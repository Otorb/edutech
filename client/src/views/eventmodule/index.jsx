import { FiSearch } from "react-icons/fi";
import style from "./style/EventModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./components/exportCSV"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import CustomActionMenu from "./components/CustomActionMenu";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { agregarEvents } from "../../store/slicer/eventSlice";
import { useForm } from "react-hook-form";





const data = [
  {
    elEvent: "le invitamos el dia lunes a celebrar el aniversario de la escuela",
    //estado: "En curso",
  },
  {
    elEvent: "mañana acto dia de la bandera ",
    //estado: "En curso",
  },
  {
    elEvent: "el viernes reunion dia del padre",
    //estado: "Terminado",
  },
  {
    elEvent: "el lunesa desalluno de grado",
    //estado: "En curso",
  },
  {
    elEvent: "el martes feriado",
    //estado: "Terminado",
  },
  {
    elEvent: "el miercoles traer un instrumento",
    //estado: "En curso",
  },
  {
    elEvent: "el jueves venir vestidos de policias",
    //estado: "En curso",
  },
  {
    elEvent: "el viernes tarer una planta",
    //estado: "Terminado",
  },
  {
    elEvent: "el lunes ingresan a clases a las 09:30",
    //estado: "En curso",
  },
  {

    elEvent: "el martes venir habra reunion",
    //estado: "En curso",
  },
];

const index = () => {

  const { register, handleSubmit, setValue } = useForm();

  const dataEvent = useAppSelector(state=>state.event.eventData) 

  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(agregarEvents())
  },[])
  console.log(dataEvent[0]);
  //hacer un map en dataEvent

  const column = [

    {
      name: "Eventos",
      selector: (row) => row.message,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
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
      setRecords(dataEvent);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(tiemout);
  }, []);

  const handleChange = (e) => {
    const filterRecords = data.filter((record) => {
      return record.elEvent.toLowerCase().includes(e.target.value.toLowerCase());
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
    message: '',
    EstadoEvento: '',
    enCurso: false,
    date: ''
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
    title: 'Crear Eventos',
    fields: [
      { name: 'message', label: 'Evento', type: 'text', placeholder: 'Evento...', required: true },
      // { name: 'EstadoEvento', label: 'Estado del Evento', type: 'text', placeholder: 'Estado del Evento...', required: true },
      { name: 'date', label: 'Fecha del Evento', type: 'date', placeholder: 'Fecha del Evento...', required: true },
    ]
  },
];


  const onhandleSubmit = (data) => {
    console.log(data);
    // Lógica para manejar el envío del formulario
};




  return (
    <>
      <div className={style.containerUserModule}>
        <h1 className={style.titleUserModule}>EventModule</h1>

        <section className={style.sectionModule}>
          <div className={style.boxSearch}>
            <FiSearch />
            <input
              type="text"
              placeholder="Evento..."
              className={style.search}
              onChange={handleChange}
            />
          </div>
          <button className={style.btnAdd} onClick={handleopenModal}>
            Agregar
          </button>
        </section>
        {/* {openModal && (
          <section className={style.sectionModuleForm}>
            <span onClick={handleopenModal} className={style.close}>X</span>
            <form onSubmit={handleSubmit(onhandleSubmit)}>
            {/* <Form title="Registration" fields={formSections} onChange={handleChangeForm} /> */}
            {/* <Form fields={formSections[0].fields} register={register} formData={formData} /> */}
            {/* <Form title="Registration" fields={formSections} register={register} />
            <button type="submit" className={style.btnAdd}>Enviar</button>
        </form>
          </section>
        )} */} 


{openModal && (
          <section className={style.sectionModuleForm}>
            <span onClick={handleopenModal} className={style.close}>X</span>
            <form onSubmit={handleSubmit(onhandleSubmit)}>
              <Form title="Registration" fields={formSections} register={register} />
              <button type="submit" className={style.btnAdd}>Enviar</button>
            </form>
          </section>
        )}





        <section className={style.sectionModule}>
          {/* <select className={style.selectUser} onChange={handleFilterChange}>
            <option value="">Seleccionar estado</option>
            <option value="En curso">En curso</option>
            <option value="Terminado">Terminado</option>
          </select> */}
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
