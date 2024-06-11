import { useLocation, useParams } from "react-router-dom";
import style from "./style/detallcurso.module.css";
import ReactApexChart from "react-apexcharts";
import DataTable from "react-data-table-component";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";

const DetallCurso = () => {
  const exampleMaterias = [
    {
      nombreMateria: "Ingles",
      detalleExamenes: [
        { nombreMateria: "Ingles", notaExamen: 8, fechaExamen: "2024-03-15" },
        { nombreMateria: "Ingles", notaExamen: 9, fechaExamen: "2024-04-10" },
        { nombreMateria: "Ingles", notaExamen: 7, fechaExamen: "2024-05-05" },
        { nombreMateria: "Ingles", notaExamen: 8, fechaExamen: "2024-06-01" },
        { nombreMateria: "Ingles", notaExamen: 6, fechaExamen: "2024-06-25" },
      ],
    },
    {
      nombreMateria: "Robotica",
      detalleExamenes: [
        { nombreMateria: "Robotica", notaExamen: 7, fechaExamen: "2024-03-20" },
        { nombreMateria: "Robotica", notaExamen: 8, fechaExamen: "2024-04-15" },
        { nombreMateria: "Robotica", notaExamen: 7, fechaExamen: "2024-05-10" },
        { nombreMateria: "Robotica", notaExamen: 9, fechaExamen: "2024-06-05" },
        { nombreMateria: "Robotica", notaExamen: 8, fechaExamen: "2024-06-30" },
      ],
    },
    {
      nombreMateria: "Matematica",
      detalleExamenes: [
        { nombreMateria: "Matematica", notaExamen: 9, fechaExamen: "2024-03-25" },
        { nombreMateria: "Matematica", notaExamen: 8, fechaExamen: "2024-04-20" },
        { nombreMateria: "Matematica", notaExamen: 7, fechaExamen: "2024-05-15" },
        { nombreMateria: "Matematica", notaExamen: 8, fechaExamen: "2024-06-10" },
        { nombreMateria: "Matematica", notaExamen: 9, fechaExamen: "2024-07-05" },
      ],
    },
  ];

  const { materia } = useParams();
  const location = useLocation();
  const { promedio } = location.state || { promedio: 0 };

  const [filteredMateria, setFilteredMateria] = useState(null);

  useEffect(() => {
    const materiaEncontrada = exampleMaterias.find((m) => m.nombreMateria === materia);
    setFilteredMateria(materiaEncontrada);
  }, [materia]);

  const column = [
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

  const chartOptions = {
    chart: {
      type: 'donut',
      height: 350,
      width: 350,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ['#a7c957', '#f3f3f3'],
    },
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%',
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  const chartSeries = [promedio, 100 - promedio];

  if (!filteredMateria) {
    return <Loading />;
  }

  const cantidadExamenes = filteredMateria.detalleExamenes.length;
  const mejorNota = Math.max(...filteredMateria.detalleExamenes.map(e => e.notaExamen));

  return (
    <div className={style.containerDetallCurso}>
      <h1 className={style.titleDetallCurso}>{materia}</h1>
      <section className={style.headDetallCurso}>
        <section className={style.promedioDetallCurso}>
          Promedio Actual: {promedio}
          <ReactApexChart options={chartOptions} series={chartSeries} type="donut" height="100%" />
        </section>
        <section className={style.infoHeadDetallCurso}>
          <section className={style.barraDetallCurso}>
            <span className={style.circleInfoDetallCurso}>
              {cantidadExamenes}
            </span>
            <span className={style.descriptionCircleDetallCurso}>
              Cantidad de examenes Actuales
            </span>
          </section>
          <section className={style.barraDetallCurso}>
            <span className={style.circleInfoDetallCurso}>
              {mejorNota}
            </span>
            <span className={style.descriptionCircleDetallCurso}>
              Puntuacion más Alta
            </span>
          </section>
        </section>
      </section>
      <section className={style.tableDetallCurso}>
        <h1 className={style.titleDetallCurso}>Examenes Rendidos</h1>
        <DataTable
          columns={column}
          data={filteredMateria.detalleExamenes}
          pagination
          paginationPerPage={10}
          progressPending={!filteredMateria}
          progressComponent={<Loading />}
        />
      </section>
    </div>
  );
};

export default DetallCurso;

