import { useState } from 'react';
import DataTable from 'react-data-table-component';
import CardEvent from '../../components/Eventos/CardEvent';
import style from './Style/examen.module.css';
import Loading from '../../components/Loading/Loading';

const Examen = () => {
  const examen = {
    dia: '2024-06-30',
    hora: '11:00',
    titulo: 'Segundo examen',
    descripcion: 'Unidad 3 - Unidad 4'
  };

  const examenes = [
    { nombreMateria: "Ingles", fechaExamen: "2024-03-15", notaExamen: 8 },
    { nombreMateria: "Ingles", fechaExamen: "2024-04-10", notaExamen: 9 },
    { nombreMateria: "Ingles", fechaExamen: "2024-05-05", notaExamen: 7 },
    { nombreMateria: "Ingles", fechaExamen: "2024-06-01", notaExamen: 8 },
    { nombreMateria: "Ingles", fechaExamen: "2024-06-25", notaExamen: 6 },
    { nombreMateria: "Robotica", fechaExamen: "2024-03-20", notaExamen: 7 },
    { nombreMateria: "Robotica", fechaExamen: "2024-04-15", notaExamen: 8 },
    { nombreMateria: "Robotica", fechaExamen: "2024-05-10", notaExamen: 7 },
    { nombreMateria: "Robotica", fechaExamen: "2024-06-05", notaExamen: 9 },
    { nombreMateria: "Robotica", fechaExamen: "2024-06-30", notaExamen: 8 },
    { nombreMateria: "Matematica", fechaExamen: "2024-03-25", notaExamen: 9 },
    { nombreMateria: "Matematica", fechaExamen: "2024-04-20", notaExamen: 8 },
    { nombreMateria: "Matematica", fechaExamen: "2024-05-15", notaExamen: 7 },
    { nombreMateria: "Matematica", fechaExamen: "2024-06-10", notaExamen: 8 },
    { nombreMateria: "Matematica", fechaExamen: "2024-07-05", notaExamen: 9 },
  ];

  const [filteredExamenes, setFilteredExamenes] = useState(examenes);
  const [selectedMateria, setSelectedMateria] = useState('');

  const handleFilterChange = (event) => {
    const materia = event.target.value;
    setSelectedMateria(materia);
    if (materia === '') {
      setFilteredExamenes(examenes);
    } else {
      setFilteredExamenes(examenes.filter(examen => examen.nombreMateria === materia));
    }
  };

  const columns = [
    {
      name: "Materia",
      selector: (row) => row.nombreMateria,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fechaExamen,
      sortable: true,
    },
    {
      name: "Calificación",
      selector: (row) => row.notaExamen,
      sortable: true,
    }
  ];

  return (
    <div className={style.containerExamen}>
      <h1 className={style.titleExamen}>Examenes</h1>
      <h3>Proximo Examen</h3>
      <CardEvent
        dia={examen.dia}
        hora={examen.hora}
        titulo={examen.titulo}
        descripcion={examen.descripcion}
      />
      <h3>Examenes Actuales</h3>
      <div className={style.filterContainer}>
        <label htmlFor="materiaSelect">Filtrar por Materia: </label>
        <select
          id="materiaSelect"
          value={selectedMateria}
          onChange={handleFilterChange}
        >
          <option value="">Todas</option>
          <option value="Ingles">Ingles</option>
          <option value="Robotica">Robotica</option>
          <option value="Matematica">Matematica</option>
        </select>
      </div>
      <DataTable
        columns={columns}
        data={filteredExamenes}
        pagination
        paginationPerPage={10}
        progressComponent={<Loading />}
      />
    </div>
  );
};

export default Examen;

