import { FiSearch } from "react-icons/fi";
import style from "./style/userModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./Components/exportCSV"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import CustomActionMenu from "./Components/CustomActionMenu";
import Form from "../../components/Form/Form";

const data = [
  {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    telefono: "+54 11 1234 5678",
    rol: "Administrador",
    estado: "Activo",
  },
  {
    nombre: "María Gómez",
    email: "maria.gomez@example.com",
    telefono: "+54 11 8765 4321",
    rol: "Usuario",
    estado: "Activo",
  },
  {
    nombre: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
    telefono: "+54 11 2345 6789",
    rol: "Moderador",
    estado: "Inactivo",
  },
  {
    nombre: "Laura Martínez",
    email: "laura.martinez@example.com",
    telefono: "+54 11 3456 7890",
    rol: "Usuario",
    estado: "Activo",
  },
  {
    nombre: "Pedro Fernández",
    email: "pedro.fernandez@example.com",
    telefono: "+54 11 4567 8901",
    rol: "Administrador",
    estado: "Inactivo",
  },
  {
    nombre: "Ana Torres",
    email: "ana.torres@example.com",
    telefono: "+54 11 5678 9012",
    rol: "Usuario",
    estado: "Activo",
  },
  {
    nombre: "Jorge López",
    email: "jorge.lopez@example.com",
    telefono: "+54 11 6789 0123",
    rol: "Moderador",
    estado: "Activo",
  },
  {
    nombre: "Marta Sánchez",
    email: "marta.sanchez@example.com",
    telefono: "+54 11 7890 1234",
    rol: "Usuario",
    estado: "Inactivo",
  },
  {
    nombre: "Luis Ramírez",
    email: "luis.ramirez@example.com",
    telefono: "+54 11 8901 2345",
    rol: "Administrador",
    estado: "Activo",
  },
  {
    nombre: "Elena Navarro",
    email: "elena.navarro@example.com",
    telefono: "+54 11 9012 3456",
    rol: "Usuario",
    estado: "Activo",
  },
];

const index = () => {
  const column = [
    {
      name: "Nombre Apellido",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
    },
    {
      name: "Estado",
      cell: (row) => (
        <span
          style={{
            color: row.estado === "Activo" ? "#29bf12" : "#f21b3f",
            fontWeight: "bold",
          }}
        >
          {row.estado}
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

  const [records, setRecords] = useState(data);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const tiemout = setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(tiemout);
  }, []);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    const filteredRecords = data.filter((record) =>
      record.rol.toLowerCase().includes(filterValue.toLowerCase())
    );
    setRecords(filteredRecords);
  };

  const handleChange = (e) => {
    const filterRecords = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
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
    console.log("Delete:", row);
  };

  const handleopenModal = () => {
    setOpenModal(!openModal);
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    active: false,
    role: ''
});

// Manejar cambios en los campos del formulario
const handleChangeForm = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
};

  const formSections = [
    {
        name: 'personal',
        title: 'Personal Details',
        fields: [
            { label: 'Apellido', type: 'text', placeholder: 'Ingrese su Apellido', required: true, value: formData.fullName  },
            { label: 'Nombres', type: 'text', placeholder: 'Ingrese su Nombres', required: true, value: formData.fullName  },
            { label: 'Email', type: 'email', placeholder: 'Ingrese su Email', required: true, value: formData.email },
            { label: 'Dirección', type: 'text', placeholder: 'Ingrese su dirección', required: true, value: formData.address  },
            { label: 'Telefono', type: 'tel', placeholder: 'Ingrese su Telefono', required: true, value: formData.phone  },
            { label: 'Rol', type: 'text', placeholder: 'Ingres su rol', required: true, value: formData.role  },
            { label: 'Activo', type: 'checkbox', checked: formData.active  }
        ]
    },
];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
};

  return (
    <>
      <div className={style.containerUserModule}>
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
            <span onClick={handleopenModal} className={style.close}>X</span>
            <form onSubmit={handleSubmit}>
            <Form title="Registration" fields={formSections} onChange={handleChangeForm} />
            <button type="submit" className={style.btnAdd}>Enviar</button>
        </form>
          </section>
        )}

        <section className={style.sectionModule}>
          <select className={style.selectUser} onChange={handleFilterChange}>
            <option value="">Seleccionar Rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
            <option value="Moderador">Moderador</option>
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
            paginationPerPage={8}
            onSelectedRowsChange={(data) => console.log(data)}
            progressPending={loading}
            progressComponent={<Loading />}
          />
        </section>
      </div>
    </>
  );
};

export default index;
