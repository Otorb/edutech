import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "../style/modal.css";
import PortaDetall from "../../Home/utility/fondoDetall.jpeg";
import Perfil from "../../Home/utility/perfil.jpeg";

const ModalDetall = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  console.log(user);

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
              {user.role === "parent" && (
                <>
                  <section className="infoModalDetalluser">
                    <span>{user.fullName}</span>
                    <span>Dirección: {user.address}</span>
                    <h3>Contactos</h3>
                    <span>Email: {user.email}</span>
                    <span>Teléfono: {user.phone}</span>
                    <h3>HIJOS/AS</h3>
                    {user.Students.map((item) => (
                      <span key={item.studentId}> {item.fullName}</span>
                    ))}
                  </section>
                </>
              )}
              {user.role === "student" && (
                <>
                  <section className="infoModalDetalluser">
                    <span>{user.fullName}</span>
                    <span>Email: {user.email}</span>
                    <span>Teléfono: {user.phone}</span>
                    <span>Fecha de Nacimiento: {user.birthd}</span>
                    <span>Curso: {user.Curso.curso}</span>
                    <span>Estado de Registro: {user.registration}</span>
                    <h3>Asignaturas</h3>
                    {user.Curso.Subjects.map((subject) => (
                      <span key={subject.idSubject}>{subject.subjec}</span>
                    ))}
                  </section>
                </>
              )}
              {user.role === "teacher" && (
                <>
                  <section className="infoModalDetalluser">
                    <span>{user.fullName}</span>
                    <h3>Contactos</h3>
                    <span>Email: {user.email}</span>
                    <span>Teléfono: {user.phone}</span>
                    
                  </section>
                </>
              )}
            </section>
          </div>
        </section>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ModalDetall;
