import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "../style/modal.css";
import PortaDetall from "../../Home/utility/fondoDetall.jpg";
import Perfil from "../../Home/utility/perfil.jfif";

const ModalDetall = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="contentModalgallery">
        <section className=" DetallModal">
          <MdClose className="iconCloseModal" onClick={onClose} />
          <div className="contentFormModal">
            <img src={PortaDetall} alt="fondoDetall" className="portadaDetall" />
            <section className="areImgDetall">
                <img src={Perfil} alt="fotoPerfil" className="perfilDetallimg"/>
            </section>
            <section className="areainfoDetall">
                informacion del usuario
            </section>
          </div>
        </section>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ModalDetall;
