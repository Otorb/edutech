import { FiSearch } from "react-icons/fi";
import style from "./style/userModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./Components/exportCSV"; 
import CustomActionMenu from "./Components/CustomActionMenu";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { cargarUsuarios, eliminarEstudiante, eliminarPadre, eliminarProfesor } from "../../store/slicer/usersSlice";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { AddStudient } from "../../Api/Studient";

// const data = [
//   {
//     nombre: "Juan Pérez",
//     email: "juan.perez@example.com",
//     telefono: "+54 11 1234 5678",
//     rol: "Administrador",
//     estado: "Activo",
//   },
//   {
//     nombre: "María Gómez",
//     email: "maria.gomez@example.com",
//     telefono: "+54 11 8765 4321",
//     rol: "Usuario",
//     estado: "Activo",
//   },
//   {
//     nombre: "Carlos Rodríguez",
//     email: "carlos.rodriguez@example.com",
//     telefono: "+54 11 2345 6789",
//     rol: "Moderador",
//     estado: "Inactivo",
//   },
//   {
//     nombre: "Laura Martínez",
//     email: "laura.martinez@example.com",
//     telefono: "+54 11 3456 7890",
//     rol: "Usuario",
//     estado: "Activo",
//   },
//   {
//     nombre: "Pedro Fernández",
//     email: "pedro.fernandez@example.com",
//     telefono: "+54 11 4567 8901",
//     rol: "Administrador",
//     estado: "Inactivo",
//   },
//   {
//     nombre: "Ana Torres",
//     email: "ana.torres@example.com",
//     telefono: "+54 11 5678 9012",
//     rol: "Usuario",
//     estado: "Activo",
//   },
//   {
//     nombre: "Jorge López",
//     email: "jorge.lopez@example.com",
//     telefono: "+54 11 6789 0123",
//     rol: "Moderador",
//     estado: "Activo",
//   },
//   {
//     nombre: "Marta Sánchez",
//     email: "marta.sanchez@example.com",
//     telefono: "+54 11 7890 1234",
//     rol: "Usuario",
//     estado: "Inactivo",
//   },
//   {
//     nombre: "Luis Ramírez",
//     email: "luis.ramirez@example.com",
//     telefono: "+54 11 8901 2345",
//     rol: "Administrador",
//     estado: "Activo",
//   },
//   {
//     nombre: "Elena Navarro",
//     email: "elena.navarro@example.com",
//     telefono: "+54 11 9012 3456",
//     rol: "Usuario",
//     estado: "Activo",
//   },
// ];

const UserModule = () => {

  const dispatch= useAppDispatch()
  const { register, handleSubmit } = useForm();

  const column = [
    {
      name: "Nombre Apellido",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Telefono",
      selector: (row) => row.phone,
    },
    {
      name: "Rol",
      selector: (row) => row.role,
    },
    {
      name: "Estado",
      cell: (row) => (
        <span
          style={{
            color: row.active ? "#29bf12" : "#f21b3f",
            fontWeight: "bold",
          }}
        >
          {row.active ? 'Activo':'Inactivo'}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <CustomActionMenu
          row={row}
          onEdit={handleEdit}
          onDetail={handleDetail}
          onDelete={handleDelete}
        />
      ),
      button: true,
      width: "150px",
    },
  ];

  const dataUsers = useAppSelector(state=> state.users.usersData)
  
  const [records, setRecords] = useState(dataUsers);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const mensaje = useAppSelector(state => state.users.mensaje);

  useEffect(() => {
    if (mensaje) {
      toast.success(mensaje);
      dispatch(cargarUsuarios())
    }
  }, [mensaje]);

  useEffect(() => {
    dispatch(cargarUsuarios());
  }, []);

  useEffect(() => {
    const tiemout = setTimeout(() => {
      setRecords(dataUsers);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(tiemout);
  }, [dataUsers]);
 

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    const filteredRecords = dataUsers.filter((record) =>
      record.role.toLowerCase().includes(filterValue.toLowerCase())
    );
    setRecords(filteredRecords);
  };

  const handleChange = (e) => {
    const filterRecords = dataUsers.filter((record) => {
      return record.fullName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecords);
  };

  const handleExport = () => {
    downloadCSV(records);
  };

  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  const handleDetail = (row) => {
    console.log("Detail:", row);
  };

  const handleDelete = (row) => {
    const userDataToDelete = {
      email: row.email,
      role: row.role,
    };
    
    if (row.role === 'student') {
      dispatch(eliminarEstudiante(userDataToDelete));
    } else if (row.role === 'parent') {
      dispatch(eliminarPadre(userDataToDelete));
    } else if (row.role === 'teacher') {
      dispatch(eliminarProfesor(userDataToDelete));
    }
    
  };
  

  const handleopenModal = () => {
    setOpenModal(!openModal);
  };
 



  const formSections = [
    {
        name: 'personal',
        title: 'Datos Personales',
        fields: [
          { label: 'Apellido *', type: 'text', placeholder: 'Ingrese su Apellido', name: 'lastName' },
          { label: 'Nombres *', type: 'text', placeholder: 'Ingrese su Nombres', name: 'name' },
          { label: 'Email *', type: 'email', placeholder: 'Ingrese su Email', name: 'email' },
          { label: 'Contraseña *', type: 'password', placeholder: 'Ingrese una contraseña', name: 'password' },
          { label: 'Telefono *', type: 'tel', placeholder: 'Ingrese su Telefono', name: 'phone' },
          { label: 'Fecha de Nacimiento *', type: 'date', name: 'birthd' },
          { label: 'Registración *', type: 'text', placeholder: 'Ingrese la registracion', name: 'registration' },
          { label: 'Foto *', type: 'text', placeholder: 'Ingrese URL imagen', name: 'photo' },
          { label: 'Tipo de Usuario *', type: 'select', placeholder: 'Seleccione el tipo', name: 'role', options: [
            { value: 'student', label: 'Estudiante' },
            { value: 'parent', label: 'Padre' },
            { value: 'teacher', label: 'Docente' },
            { value: 'admin', label: 'Administrador' },
          ] },
        ]
    },
];

const onSubmit = async(data, event) => {
  event.preventDefault(); // Evitar la recarga de la página
  // Verificar si hay campos vacíos
  if (!data.name || !data.lastName || !data.email || !data.password || !data.phone || !data.birthd || !data.registration || !data.photo || !data.role) {
    toast.error('Todos los campos son obligatorios');
    return;
}
  console.log(data)

  if (data.role === 'student'){
      try {
     await AddStudient(data)
    toast.success('Usuario cargo exitosamente')
    dispatch(cargarUsuarios())
  } catch (error) {
    toast.error('Error: ', error)
  }
  }

};


  return (
    <>
      <div className={style.containerUserModule}>
      <Toaster richColors position="top-left"/>
        <h1 className={style.titleUserModule}>Usuarios</h1>
        <p className={style.descriptionUserModule}>
          Como administrador, usted puede gestionar y personalizar la
          experiencia de nuestra comunidad
        </p>

        <section className={style.sectionModule}>
          <div className={style.boxSearch}>
            <FiSearch />
            <input
              type="text"
              placeholder="Nombre.."
              className={style.search}
              onChange={handleChange}
            />
          </div>
          <button className={style.btnAdd} onClick={handleopenModal}>
            Agregar
          </button>
        </section>
        {openModal && (
           <section className={style.sectionModuleForm}>
           <span onClick={handleopenModal} className={style.close}>
             X
           </span>
           <form onSubmit={handleSubmit(onSubmit)}>
             <Form title="Registration" fields={formSections} register={register} />
             <button type="submit" className={style.btnAdd}>
               Enviar
             </button>
           </form>
         </section>
        )}

        <section className={style.sectionModule}>
          <select className={style.selectUser} onChange={handleFilterChange}>
            <option value="">Seleccionar Rol</option>
            <option value="Admin">Administrador</option>
            <option value="parent">Padres</option>
            <option value="teacher">Docente</option>
            <option value="studient">Estudiante</option>
          </select>
          <button className={style.btnAddExport} onClick={handleExport}>
            Exportar Excel
          </button>
        </section>
        <section className={style.sectionModule}>
          <DataTable
            columns={column}
            data={records}
            selectableRows
            pagination
            paginationPerPage={10}
            onSelectedRowsChange={(data) => console.log(data)}
            progressPending={loading}
            progressComponent={<Loading />}
          />
        </section>
      </div>
    </>
  );
};

export default UserModule;
