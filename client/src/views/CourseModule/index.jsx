import { Toaster } from "sonner";
import style from "../UserModule/style/userModule.module.css";
import { FiSearch } from "react-icons/fi";
import { downloadCSV } from "../UserModule/Components/exportCSV";
import DataTable from "react-data-table-component";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { CargarCursos } from "../../store/slicer/courseSlice";
import CustomActionMenu from "../UserModule/Components/CustomActionMenu";
import { listStudients } from "../../Api/Studient";  
import ModalCourseAdd from "./components/ModalCourseAdd"; 
import ModalDetallCourse from "./components/ModalDetallCourse";

const CourseModule = () => {
  const dispatch = useAppDispatch();
  const dataCourse = useAppSelector(state => state.course.courseData);

  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false); 
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(CargarCursos());
    listStudients().then(response => setStudents(response.data.resultStudent)); 
  }, [dispatch]);

  useEffect(() => {
    if (dataCourse.length > 0 && students.length > 0) {
      const courseWithStudentCount = dataCourse.map(course => {
        const studentCount = students.filter(student => student.courseId === course.id).length;
        return { ...course, studentCount };
      });
      setRecords(courseWithStudentCount);
      setLoading(false);
    }
  }, [dataCourse, students]);

  const column = [
    {
      name: "Curso",
      selector: (row) => row.curso,
      sortable: true,
    },
    {
      name: "Cantidad Estudiantes",
      selector: (row) => row.studentCount,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <CustomActionMenu
          row={row}
          onEdit={() => handleEdit(row)}
          onDetail={handleDetail}
          onDelete={handleDelete}
        />
      ),
      button: true,
      width: "150px",
    },
  ];

  const handleEdit = (course) => {
    console.log(course);
  };

  const handleDetail = (row) => {
    setSelectedUser(row);
    setOpenDetailModal(true);
  };

  const handleDelete = (row) => {
    console.log(row);
  };

  const handleExport = () => {
    downloadCSV(records);
  };

  const handleChange = (e) => {
    const filterRecords = records.filter((record) => {
      return record.curso.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecords);
  };


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className={style.containerUserModule}>
        <Toaster richColors position="top-left" />
        <h1 className={style.titleUserModule}>Cursos</h1>
        <p className={style.descriptionUserModule}>
          Como administrador, usted puede gestionar los cursos
        </p>

        <section className={style.sectionModule}>
          <div className={style.boxSearch}>
            <FiSearch />
            <input
              type="text"
              placeholder="Curso.."
              className={style.search}
              onChange={handleChange}
            />
          </div>

          <button
            className={style.btnAdd}
            onClick={handleOpenModal} 
          >
            Agregar Curso
          </button>
        </section>

        <section className={style.sectionModule}>
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
            progressPending={loading}
            progressComponent={<Loading />}
          />
        </section>
      </div>

      {openDetailModal && (
        <ModalDetallCourse
        isOpen={openDetailModal}
        onClose={() => setOpenDetailModal(false)}
        course={selectedUser} 
      />
      )}
    
      {openModal && (
        <ModalCourseAdd
          isOpen={openModal}
          onClose={() => setOpenModal(false)} 
          user={null} 
        />
      )}
    </>
  );
};

export default CourseModule;

