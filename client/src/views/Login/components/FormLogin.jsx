
import style1 from "../styles/login.module.css";
import style2 from "../styles/LoginForm.module.css";
// import SessionGoogle from "./SessionGoogle";
// import SvgComponent from "./SvgLoginGoogle";
import GoogleButton from "./GoogleButton";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner'
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import { login } from "../../../store/slicer/auth.slice";

const FormLogin = () => {
  const { register, handleSubmit } = useForm();

  const dispatch= useAppDispatch()
  const onSubmit = (data) => {
    // Verificar si hay campos vacíos
    if (!data.email || !data.password) {
      toast.error('Debe completar los campos');
      return
    }
    
    // Si no hay errores, continuar con el envío del formulario
    console.log("Datos del formulario:", data);
    dispatch(login())
  };
  

  return (
    <section className={style1.formContainer}>
      <div className={style2.errorLogin}>
        <Toaster richColors position="top-left"/>
      </div>
      <div className={style2.formContainer_welcome}>
        <h1 className={style2.titleLogin}>EduSync</h1>
        <b className={style2.RegisterLogin}>Registrate por acá</b>
        <p className={style2.welcomeLogin}>Bienvenido a esta plataforma!</p>
      </div>

      <div className={style2.GoogleLogin}>
        <GoogleButton />
      </div>
      <div className={style2.divisorLoginGoogle__email_password}>
        <hr />
        <b>O continua con email</b>
        <hr />
      </div>
    
      
      <form className={style2.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="Email"
          placeholder="Email*"
          {...register("email")}
        />

        <input
          type="password"
          id="password"
          placeholder="Contraseña*"
          {...register("password")}
        />

        <input type="submit" value="Accede" />
      </form>
    </section>
  );
};

export default FormLogin