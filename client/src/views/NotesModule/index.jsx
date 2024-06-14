import { FiSearch } from "react-icons/fi";
import style from "./style/NoteModule.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { downloadCSV } from "./components/exportCSV";
import CustomActionMenu from "./components/CustomActionMenu";
import Form from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppSelector";
import { agregarGetNotes, crearNote, eliminarNote, editarNote } from "../../store/slicer/noteSlice";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";


const NoteModule = () => {

  const { register, handleSubmit, setValue, reset, getValues } = useForm();


  const dataNote = useAppSelector(state=>state.note.noteData) 

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(agregarGetNotes())
  },[dispatch])


  const column = [

    {
      name: "Tipos de actividades educativas",
      selector: (row) => row.detail,
      sortable: true,
    },
    {
      name: "Nota",
      selector: (row) => row.nota,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.dateTest,
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

  const [editingNotes, setEditingNotes] = useState(null);

  

  useEffect(() => {
    const tiemout = setTimeout(() => {
      setRecords(dataNote);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(tiemout);
  }, [dataNote]);

  const handleChange = (e) => {
    const filterRecords = dataNote.filter((record) => {
      return record.detail.toLowerCase().includes(e.target.value.toLowerCase());
    });           

    setRecords(filterRecords);
  };

  const handleExport = () => {
    downloadCSV(records);
  };


  const handleEdit = async (row) => {
    const id = row.idNotas
    if (id) {
      setEditingNotes(row);
      setOpenModal(true);

      Object.keys(row).forEach((key) => {
        setValue(key, row[key]);
      });
    }

    const data = getValues();

    try {
       dispatch(editarEvents(row.idNotas, data));
      dispatch(agregarGetNotes())
      toast.success('El evento se cargo correctamente')
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };


  const handleDetail = (row) => {
    console.log("Detail:", row);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(eliminarNote(id.idNotas))
      dispatch(agregarGetNotes())
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };


  const formSections = [
    {
      name: 'personal',
      title: 'Crear Notas',
      fields: [
        { name: 'detail', label: 'actividad educativa', type: 'text', placeholder: 'Actividad...', required: true },
        { name: 'nota', label: 'nota', type: 'text', placeholder: 'Nota...', required: true },
        { name: 'dateTest', label: 'fecha', type: 'date', placeholder: 'Fecha...', required: true },
      ]
    },
  ];


  const onhandleSubmit = async (data) => {
    try {
      if (editingNotes) {
        await dispatch(editarEvents(dataNote));
        dispatch(agregarGetNotes())
        setEditingEvent([]); // Termina la edición
      } else {
        await dispatch(crearNote(data))
      } reset();
      //toast.success('Evento creado exitosamente')
      dispatch(agregarGetNotes())
    } catch (error) {
      console.error(`Error: ${error.message}`); 
    }
};


  return (
    <>
     <Toaster richColors position="top-left"/>
      <div className={style.containerUserModule}>
        <h1 className={style.titleUserModule}>Notas</h1>

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


export default NoteModule;
