import style from "../styles/contactHome.module.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import contactImg from '../../../assets/img/contac.webp'

const ContactHome = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asm3con",
        "template_n68spek",
        e.target,
        /* "u1W0PSDVrZHmTdhGBrhGp", */
        // '7lKAr0QQPtaCO09cU',
        "pbL25b0JuSENRfmSN",
        alert("Su mensaje ha sido enviado, pronto te responderemos")
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    navigate("/");
  }

  return (
    <div className={style.containerContactHome} id="contactoHome">
      <div className={style.container}>
        

        <div className={style.wrapper}>
          <div className={style.companyInfo}>
            <h3>EduSync</h3>

            <ul>
              <li>
                <i class="fa fa-road"></i> No-Country
              </li>
              <li>
                <i class="fa fa-phone"></i> (+54) 555-5555
              </li>
              <li>
                <i class="fa fa-envelope"></i> test@nocountry.com
              </li>
            </ul>
            <img src={contactImg} alt="contact" />
          </div>

          <div className={style.contact}>
            <h3>Contacto</h3>

            <form id="contact-form">
              <p>
                <label>Nombre</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Apellido</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>Email</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Telefono</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p className="full">
                <label>Mensaje</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>

              <p className="full">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
