import style1 from "../styles/login.module.css";
import style2 from "../styles/LoginForm.module.css";
// import SessionGoogle from "./SessionGoogle";
// import SvgComponent from "./SvgLoginGoogle";
import GoogleButton from "./GoogleButton";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../Api/Login";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import { fetchUserData } from "../../../store/slicer/userSlice";

const FormLogin = () => {
  const { register, handleSubmit } = useForm();

  const signIn = useSignIn();
  const navigate= useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = async (data) => {
    // Verificar si hay campos vacíos
    if (!data.email || !data.password) {
        toast.error('Debe completar los campos');
        return;
    }

    // Si no hay errores, continuar con el envío del formulario
    try {
        const response = await userLogin(data);
        
        // Suponiendo que la respuesta contiene la información necesaria para el estado de autenticación
        const { token, userStudent } = response.resultLogin;

        // Intentar iniciar sesión usando el hook signIn
        if (signIn({
            auth: {
                token: token, // El token devuelto por el backend
                type: 'Bearer' // Tipo de token, podría variar según tu backend
            },
            userState: {
                email: userStudent[0] // Estado del usuario, en este caso el email
            }
        })) {
            // Si el inicio de sesión es exitoso, puedes redirigir o realizar alguna acción
            toast.success('Inicio de sesión exitoso');
          // const rol= 'admin'
             const rol = userStudent[1]; // Reemplaza con el rol adecuado
            dispatch(fetchUserData({ email: userStudent, token, rol }));
            navigate('/dashboard/profileRole')
        } else {
            // Si falla el inicio de sesión, muestra un mensaje de error
            toast.error('Error al iniciar sesión');
        }
    } catch (error) {
        // Manejar errores de la llamada a la API
        toast.error(error.message);
    }
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