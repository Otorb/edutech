import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import CardEvent from '../../components/Eventos/CardEvent';
import style from './Style/examen.module.css';
import Loading from '../../components/Loading/Loading';
import { useAppSelector } from '../../Hooks/useAppSelector';

const Examen = () => {
  const userData = useAppSelector((state) => state.user.data);
  
  const examen = {
    dia: '2024-06-30',
    hora: '11:00',
    titulo: 'Segundo examen',
    descripcion: 'Unidad 3 - Unidad 4'
  };

  const [examenes, setExamenes] = useState([]);
  const [filteredExamenes, setFilteredExamenes] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState('');

  useEffect(() => {
    if (userData.Curso && userData.Curso.Subjects) {
      const allExamenes = userData.Curso.Subjects.flatMap(subject => 
        subject.Notas.map(nota => ({
          nombreMateria: subject.subjec,
          fechaExamen: nota.dateTest,
          notaExamen: parseFloat(nota.nota)
        }))
      );
      setExamenes(allExamenes);
      setFilteredExamenes(allExamenes);
    }
  }, [userData]);

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
          {userData.Curso?.Subjects?.map(subject => (
            <option key={subject.subjec} value={subject.subjec}>{subject.subjec}</option>
          ))}
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


