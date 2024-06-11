import { FiSearch } from "react-icons/fi";
import style from "./style/EventModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./components/exportCSV";
import CustomActionMenu from "./components/CustomActionMenu";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { agregarEvents, crearEvents } from "../../store/slicer/eventSlice";
import { useForm } from "react-hook-form";


const index = () => {

  const { register, handleSubmit, setValue, reset } = useForm();


  const dataEvent = useAppSelector(state=>state.event.eventData) 


  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(agregarEvents())
  },[])


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
      width: "150px",
    },
  ];

  const [records, setRecords] = useState([]);
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
    const filterRecords = dataEvent.filter((record) => {
      return record.message.toLowerCase().includes(e.target.value.toLowerCase());
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

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };


  const formSections = [
    {
      name: 'personal',
      title: 'Crear Eventos',
      fields: [
        { name: 'message', label: 'Evento', type: 'text', placeholder: 'Evento...', required: true },
        { name: 'date', label: 'Fecha del Evento', type: 'date', placeholder: 'Fecha del Evento...', required: true },
      ]
    },
  ];


  const onhandleSubmit = async (data) => {
    try {
      await dispatch(crearEvents(data))
      reset();
      //toast.success('Evento creado exitosamente');preguntar si tengo que instalarla
      dispatch(agregarEvents())
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
};


  return (
    <>
      <div className={style.containerUserModule}>
        <h1 className={style.titleUserModule}>Eventos</h1>

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
          <button className={style.btnAdd} onClick={handleOpenModal}>
            Agregar
          </button>
        </section>

        {openModal && (
          <section className={style.sectionModuleForm}>
            <span onClick={handleOpenModal} className={style.close}>X</span>
            <form onSubmit={handleSubmit(onhandleSubmit)}>
              <Form title="Registration" fields={formSections} register={register} />
              <button type="submit" className={style.btnAdd}>Enviar</button>
            </form>
          </section>
        )}

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
