import { BsWhatsapp, BsMortarboard, BsEnvelope  } from 'react-icons/bs';
import styles from '../styles/User.module.css';

const Usuario = () => {
  return (
    <div className={styles["usuario-header"]}>
      <div className={styles["contenedor-imagen"]}>
        <img src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen del Usuario" className={styles["usuario-imagen"]}/>
      </div>
      <div className={styles["usuario-info"]}>
        <h1>Sara Doe</h1>
        <div className={styles["usuario-data"]}>
          <p><BsMortarboard className={styles["iconograde-paneluser"]}/> Noveno Grado</p>
          <p><BsWhatsapp className={styles["iconowp-paneluser"]}/> 57+ 000 333 3333</p>
          <p><BsEnvelope  className={styles["iconomail-paneluser"]}/> correostudent@google.com</p>
        </div>
      </div>
    </div>
  )
}

export default Usuario;
