import style1 from "../styles/login.module.css";
import style2 from "../styles/LoginForm.module.css";
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    if (!data.email || !data.password) {
      toast.error('Debe completar los campos');
      return;
    }

    try {
      const response = await userLogin(data);
      const { resultLogin } = response;
  
      let token, userInfo;
  
      if (resultLogin.userTeacher) {
        token = resultLogin.token;
        userInfo = {
          email: resultLogin.userTeacher[0],
          role: resultLogin.userTeacher[1],
        };
      } else if (resultLogin.userStudent) {
        token = resultLogin.token;
        userInfo = {
          email: resultLogin.userStudent[0],
          role: resultLogin.userStudent[1],
        };
      } else if (resultLogin.userAdmin) {
        token = resultLogin.token;
        userInfo = {
          email: resultLogin.userAdmin[0],
          role: resultLogin.userAdmin[1],
        };
      } else {
        throw new Error('Formato de respuesta no reconocido');
      }
  
      if (signIn({
        auth: {
          token: token,
          type: 'Bearer',
        },
        userState: {
          email: userInfo.email,
        },
      })) {
        toast.success('Inicio de sesión exitoso');
        dispatch(fetchUserData({ email: userInfo.email, token, role: userInfo.role }));
        if( userInfo === 'admin'){
          navigate('/dashboard')
        }else{
          navigate('/dashboard/profileRole');
        }
      } else {
        toast.error('Error al iniciar sesión');
      }
    } catch (error) {
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

export default FormLogin;
