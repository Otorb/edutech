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



const data = [
  {
    elEvent: "le invitamos el dia lunes a celebrar el aniversario de la escuela",
    estado: "En curso",
  },
  {
    elEvent: "maria.gomez@example.com",
    estado: "En curso",
  },
  {
    elEvent: "carlos.rodriguez@example.com",
    estado: "Terminado",
  },
  {
    elEvent: "laura.martinez@example.com",
    estado: "En curso",
  },
  {
    elEvent: "pedro.fernandez@example.com",
    estado: "Terminado",
  },
  {
    elEvent: "ana.torres@example.com",
    estado: "En curso",
  },
  {
    elEvent: "jorge.lopez@example.com",
    estado: "En curso",
  },
  {
    elEvent: "marta.sanchez@example.com",
    estado: "Terminado",
  },
  {
    elEvent: "luis.ramirez@example.com",
    estado: "En curso",
  },
  {

    elEvent: "elena.navarro@example.com",
    estado: "En curso",
  },
];

const index = () => {

  const dataEvent = useAppSelector(state=>state.event.eventData) 
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(agregarEvents())
  },[])
  console.log(dataEvent);
  //hacer un map en dataEvent

  // const column = [
  //   // {
  //   //   name: "n°",
  //   //   selector: (row) => row.numEvent,
  //   //   sortable: true,
  //   // },
  //   {
  //     name: "Eventos",
  //     selector: (row) => row.elEvent,
  //     sortable: true,
  //   },
  //   {
  //     name: "Estado",
  //     cell: (row) => (
  //       <span
  //         style={{
  //           color: row.estado === "En curso" ? "#29bf12" : "#f21b3f",
  //           fontWeight: "bold",
  //         }}
  //       >
  //         {row.estado}
  //       </span>
  //     ),
  //     sortable: true,
  //   },
  //   {
  //     name: "Acciones",
  //     cell: (row) => (
  //       <CustomActionMenu
  //         row={row}
  //         onEdit={handleEdit}
  //         onDetail={handleDetail}
  //         onDelete={handleDelete}
  //       />
  //     ),
  //     button: true,
  //     width: "150px",
  //   },
  // ];

  const column = [
    // {
    //   name: "n°",
    //   selector: (row) => row.numEvent,
    //   sortable: true,
    // },
    {
      name: "Eventos",
      selector: (row) => row.elEvent,
      sortable: true,
    },
    {
      name: "Estado",
      cell: (row, index) => (
        <div>
          <button
            style={{
              backgroundColor: row.estado === "En curso" ? "#29bf12" : "#f21b3f",
              color: "white",
              fontWeight: "bold",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => toggleEstado(index, row.estado === "En curso" ? "Terminado" : "En curso")}
          >
            {row.estado}
          </button>
        </div>
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
      record.estado.toLowerCase().includes(filterValue.toLowerCase())
    );
    setRecords(filteredRecords);
  };

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

    // fullName: '',
    // email: '',
    // address: '',
    // phone: '',
    // role: ''
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
          { label: 'Evento', type: 'text', placeholder: 'Evento...', required: true, value: formData.message  },
          { label: 'Estado del Evento', type: 'text', placeholder: 'Estado del Evento...', required: true, value: formData.EstadoEvento },
          { label: 'Fecha del Evento', type: 'date', placeholder: 'Fecha del Evento...', required: true, value: formData.date },
          { label: 'Activo', type: 'checkbox', checked: formData.active  }
        ]
    },
];


  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
};

const toggleEstado = (index, newEstado) => {
  const updatedRecords = [...records];
  updatedRecords[index].estado = newEstado;
  setRecords(updatedRecords);
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
            <option value="">Seleccionar estado</option>
            <option value="En curso">En curso</option>
            <option value="Terminado">Terminado</option>
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
