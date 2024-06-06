import { FiSearch } from "react-icons/fi";
import style from "./style/userModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./Components/exportCSV"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import CustomActionMenu from "./Components/CustomActionMenu";
import Form from "../../components/Form/Form";
import { data, CursoAlumno } from "./ObjectsCourseTable";
// import { CoursesApi } from "../../Api/Course";



const index = () => {

const [Courses, setCourses] = useState([])
const [load, setLoad] = useState(true)

// const CoursesFun = async () => { 
//   const Courses = await CoursesApi()
//   setCourses(Courses)
  
// }

// useEffect(()=> {
//   CoursesFun()
//   setLoad(false)
// },[])

console.log(CursoAlumno)

const LoadingFn = () => <h1>Cargando..</h1>   


  const courses = [
    {
      name: "Materia",
      selector: (row) => row.Subjects.map(e => e.subjec),
      sortable: true,
    },
    {
      name: "Cursos",
      selector: (row) => row.curso,
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

  const [records, setRecords] = useState(CursoAlumno);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const tiemout = setTimeout(() => {
      setRecords(CursoAlumno);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(tiemout);
  }, []);

  // const handleFilterChange = (e) => {
  //   const filterValue = e.target.value;
  //   // acá es un filtro parseado a  minuscula, 
  //   //"si hay un dato existente en data que tambien exista en rol, que lo asigne a filteredRecords"
  //   const filteredRecords = data.filter((record) =>
  //     record.rol.toLowerCase().includes(filterValue.toLowerCase())
  //   );
  //   setRecords(filteredRecords);
  // };

  // const handleChange = (e) => {
  //   const filterRecords = data.filter((record) => {
  //     return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setRecords(filterRecords);
  // };

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
      name: 'courses',
      title: 'rsos de la escuela',
      fields: [
        { label: 'Apellido', type: 'text', placeholder: 'Ingrese su Apellido', required: true, value: formData.fullName },
        { label: 'Nombres', type: 'text', placeholder: 'Ingrese su Nombres', required: true, value: formData.fullName },
        { label: 'Email', type: 'email', placeholder: 'Ingrese su Email', required: true, value: formData.email },
        { label: 'Dirección', type: 'text', placeholder: 'Ingrese su dirección', required: true, value: formData.address },
        { label: 'Telefono', type: 'tel', placeholder: 'Ingrese su Telefono', required: true, value: formData.phone },
        { label: 'Rol', type: 'text', placeholder: 'Ingres su rol', required: true, value: formData.role },
        { label: 'Activo', type: 'checkbox', checked: formData.active }
      ]
    },
  ];
  const formSectionsCourses = [
    {
      name: 'personal',
      title: 'Cursos de la escuela',
      fields: [
        { label: 'Curso', type: 'text', placeholder: 'Ingrese el curso', required: true, value: formData.fullName },
        { label: 'Materia', type: 'email', placeholder: 'Ingrese la materia', required: true, value: formData.email },





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
              // onChange={handleChange}
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
              <Form title="Registration" fields={formSectionsCourses} onChange={handleChangeForm} />
              <button type="submit" className={style.btnAdd}>Enviar</button>
            </form>
          </section>
        )}

        <section className={style.sectionModule}>
          <select className={style.selectUser} 
          // onChange={handleFilterChange}
          >
            <option value="">Seleccionar </option>
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
            // columns es la cabecera de la tabla
            columns={courses}
            // records es el estado que internamente tiene los datos de los usuarios, 
            // los cuales tengo que cambiar por los cursos
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

export default index;
