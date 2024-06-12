import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "../../UserModule/style/modal.css";
import PortaDetall from "../../Home/utility/fondoDetall.jpeg";
import Perfil from '../../Home/utility/perfil.jpeg'


const ModalDetallCourse = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null; // Se agrega una validación para asegurarse de que se haya recibido el curso

  return createPortal(
    <>
      <div className="contentModalgallery">
        <section className="DetallModal">
          <MdClose className="iconCloseModal" onClick={onClose} />
          <div className="contentFormModal">
            <img
              src={PortaDetall}
              alt="fondoDetall"
              className="portadaDetall"
            />
            <section className="areImgDetall">
            <img src={Perfil} alt="fotoPerfil" className="perfilDetallimg" />
            </section>
            <section className="areainfoDetall">
              <section className="infoModalDetalluser">
                <span>Nombre del Curso: {course.curso}</span>
                {/* Puedes agregar más detalles del curso si lo deseas */}
                <h3>Asignaturas</h3>
                {course.Subjects.map((subject) => (
                  <span key={subject.idSubject}>{subject.subjec}</span>
                ))}
              </section>
            </section>
          </div>
        </section>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ModalDetallCourse;
