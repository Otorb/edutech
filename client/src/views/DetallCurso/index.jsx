import { useLocation, useParams } from "react-router-dom";
import style from "./style/detallcurso.module.css";
import ReactApexChart from "react-apexcharts";
import DataTable from "react-data-table-component";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const DetallCurso = () => {
  const dataUser = useAppSelector((state) => state.user.data);
  const { materia } = useParams();
  const location = useLocation();
  const { promedio } = location.state || { promedio: 0 };

  const [filteredMateria, setFilteredMateria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataUser.Curso && dataUser.Curso.Subjects) {
      const materiaEncontrada = dataUser.Curso.Subjects.find((m) => m.subjec === materia);
      setFilteredMateria(materiaEncontrada);
    }
    setLoading(false);
  }, [dataUser, materia]);

  const calcularPromedio = (notas) => {
    if (notas.length === 0) return 0;
    const suma = notas.reduce((acc, nota) => acc + parseFloat(nota.nota), 0);
    return Math.round(suma / notas.length);
  };

  const column = [
    {
      name: "Fecha",
      selector: (row) => row.dateTest,
      sortable: true,
    },
    {
      name: "Calificación",
      selector: (row) => row.nota,
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
      colors: ['#3E86E4', '#f3f3f3']
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true // Desactiva las etiquetas de datos
    },
    tooltip: {
      enabled: false // Desactiva las etiquetas emergentes
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

  const chartSeries = [promedio, 10 - promedio];

  if (loading) {
    return <Loading />;
  }

  if (!filteredMateria) {
    return <div>Materia no encontrada</div>;
  }

  const cantidadExamenes = filteredMateria.Notas.length;
  const mejorNota = Math.max(...filteredMateria.Notas.map(e => parseFloat(e.nota)));
  const promedioCalculado = calcularPromedio(filteredMateria.Notas);

  return (
    <div className={style.containerDetallCurso}>
      <h1 className={style.titleDetallCurso}>{materia}</h1>
      <a href="/dashboard/profile/id"><FaPersonWalkingArrowLoopLeft />VOLVER</a>
      <section className={style.headDetallCurso}>
        <section className={style.promedioDetallCurso}>
          Promedio Actual: {promedioCalculado}
          <ReactApexChart options={chartOptions} series={[promedioCalculado, 10 - promedioCalculado]} type="donut" height="100%" />
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
          data={filteredMateria.Notas}
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


