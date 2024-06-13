import { FiSearch } from "react-icons/fi";
import style from "./style/userModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./Components/exportCSV"; 
import CustomActionMenu from "./Components/CustomActionMenu";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { cargarUsuarios, eliminarEstudiante, eliminarPadre, eliminarProfesor } from "../../store/slicer/usersSlice";
import { Toaster, toast } from "sonner";
import ModalFormStudient from "./Components/ModalFormStudient";
import ModalFormParent from "./Components/ModalFormParent";
import ModalFormTeacher from "./Components/ModalFormTeacher";
import ModalDetall from "./Components/ModalDetall";

const UserModule = () => {
  const dispatch = useAppDispatch();

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
          onEdit={() => handleEdit(row)}
          onDetail={handleDetail}
          onDelete={handleDelete}
        />
      ),
      button: true,
      width: "150px",
    },
  ];

  const dataUsers = useAppSelector(state => state.users.usersData);
  const [records, setRecords] = useState(dataUsers);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const mensaje = useAppSelector(state => state.users.mensaje);

  useEffect(() => {
    if (mensaje) {
      toast.success(mensaje);
      dispatch(cargarUsuarios());
    }
  }, [mensaje]);

  useEffect(() => {
    dispatch(cargarUsuarios());
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(dataUsers);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
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

  const handleEdit = (user) => {
    console.log(user)
    setEditingUser(user);
    setSelectedRole(user.role);
    setOpenModal(true);
  };

  const handleDetail = (row) => {
    setSelectedUser(row);
    setOpenDetailModal(true);
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

  const handleOpenModal = (role) => {
    setSelectedRole(role);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRole('');
    setEditingUser(null);
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
          <button className={style.btnAdd} onClick={() => handleOpenModal('student')}>
            Agregar Estudiante
          </button>
          <button className={style.btnAdd} onClick={() => handleOpenModal('parent')}>
            Agregar Padre
          </button>
          <button className={style.btnAdd} onClick={() => handleOpenModal('teacher')}>
            Agregar Docente
          </button>
        </section>

        <section className={style.sectionModule}>
          <select className={style.selectUser} onChange={handleFilterChange}>
            <option value="">Seleccionar Rol</option>
            <option value="admin">Administrador</option>
            <option value="parent">Padres</option>
            <option value="teacher">Docente</option>
            <option value="student">Estudiante</option>
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

      {openDetailModal && (
        <ModalDetall
          isOpen={openDetailModal}
          onClose={() => setOpenDetailModal(false)}
          user={selectedUser}
        />
      )}

      {openModal && selectedRole === 'student' && <ModalFormStudient isOpen={openModal} onClose={handleCloseModal} user={editingUser} />}
      {openModal && selectedRole === 'parent' && <ModalFormParent isOpen={openModal} onClose={handleCloseModal} user={editingUser} />}
      {openModal && selectedRole === 'teacher' && <ModalFormTeacher isOpen={openModal} onClose={handleCloseModal} user={editingUser} />}
    </>
  );
};

export default UserModule;



