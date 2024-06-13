import ReactApexChart from 'react-apexcharts';
import style from '../style/cardpromedio.module.css';
import { useNavigate } from 'react-router-dom';

const CardPromedio = ({ materia, promedio,id }) => {
  const chartOptions = {
    chart: {
      type: 'donut',
      height: '100%',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: false
          }
        }
      }
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
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const chartSeries = [promedio, 10 - promedio];

  const navigate = useNavigate();

  const handlenavegate = () => {
    navigate(`/dashboard/detalle/${materia}`, { state: { promedio,id } });
  };

  return (
    <div className={style.containerCardPromedio}>
      <h1 className={style.titleCardPromedio}>{materia}</h1>
      <span className={style.numberCardPromedio}>{promedio}</span>
      <section className={style.circleCardPromedio}>
        <ReactApexChart options={chartOptions} series={chartSeries} type="donut" height="100%" />
      </section>
      <section>
        <button className={style.btnCardPromedio}
        onClick={handlenavegate}
        >Detalle</button>
      </section>
    </div>
  );
}

export default CardPromedio;




