import style from "../Styles/receiving.module.css";

const ReceivingMessage = ({ foto, nombreProfesor, fecha, mensaje,curso }) => {
  return (
    <div className={style.cotainerReceivingMessage}>
      <section className={style.itemMessage}>
        <section className={style.itemHeadMessage}>
          <div className={style.imgItemMessage}>
            <img src={foto} alt="foto" className={style.imgMessage} />
          </div>
          <span className={style.teacherMessage}>{nombreProfesor} {curso}</span>
          <span className={style.dateMessage}>{fecha}</span>
        </section>
        <p className={style.textMessage}>{mensaje}</p>
      </section>
    </div>
  );
};

export default ReceivingMessage;
