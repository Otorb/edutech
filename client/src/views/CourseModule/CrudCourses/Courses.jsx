import { FiSearch } from "react-icons/fi";
import style from "../style/userModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import { downloadCSV } from "../Components/exportCSV"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import CustomActionMenu from "../Components/CustomActionMenu";
// import { CursoAlumno } from "ObjectsCourseTable";
import { useForm } from "react-hook-form"
import Form from "../Form/Form";
import { CursoAlumno } from "./FakeApi";
import { useDispatch, useSelector } from "react-redux";
import { getPetition } from "../reduxCourses/slice";
import { CoursesApi } from "../../../Api/Course";




const index = () => {




  const { register, handleSubmit } = useForm()

  // const [postCourses, setPostCourses] = useState("")
  // const [putCursos, setputCursos] = useState(null)
  const [getCursos, setgetCursos] = useState([])
  const [load, setLoad] = useState(true)



  // const ApiCursos = useSelector(e => e)
  // console.log(ApiCursos)


  const dispatchCourses = useDispatch()



  useEffect(() => {

    const CoursesFun = async () => {
      try {

        const apiCourso = await CoursesApi()
        setgetCursos(apiCourso?.data?.map(e => e))
        // console.log(apiCourso.data.Subjects)]

      } catch (error) {
        console.log(error)
      }
    }
    CoursesFun()
  }, [dispatchCourses])

  // const Materias = getCursos?.map(e => e?.Subjects?.map(e => e?.subjec.forEach(e => e[e] )))



  console.log(getCursos?.map(e => e?.Subjects?.map(e => e?.subjec)))
  

  // for (let index = 0; index < Materias.length; index++) {
  //   const element = Materias[index];
  //   console.log(element)
  // }

  const LoadingFn = () => <h1>Cargando..</h1>


  const courses = [
    {
      name: "Materia",
      selector: (row) => row.element,
      sortable: true,
    },
    {
      name: "Cursos",
      selector: (row) => row.getCursos?.map(e => e?.curso),
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

  const [records, setRecords] = useState(getCursos);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const tiemout = setTimeout(() => {
      setRecords(getCursos);
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

  const onSubmit = (e) => {
    console.log(e)
  }
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
    curso: '',
    materia: '',
    // active: false,
  });

  // Manejar cambios en los campos del formulario
  const handleChangeForm = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };



  const formSectionsCourses = [
    {
      name: 'personal',
      title: 'Cursos de la escuela',
      fields: [
        {
          label: 'Curso',
          name: "Curso",
          type: 'text',
          placeholder: 'Ingrese el curso',
          value: formData.curso
        },
        {
          label: 'Materia',
          name: "Materia",
          type: 'email',
          placeholder: 'Ingrese la materia',
          value: formData.materia
        },





      ]
    },
  ];

  const handleSubmitt = (event) => {
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
              <Form title="Registration" onSubmit={handleSubmit(onSubmit)} fields={formSectionsCourses} register={register} onChange={handleChangeForm} />
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