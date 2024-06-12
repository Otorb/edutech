import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import style1 from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { allEmails } from "../../../Api/Login";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../../store/slicer/userSlice"; 
import { auth } from "../utils/Credentials";
import { toast } from "sonner"; 
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const [value, setValue] = useState("");
  const signIn = useSignIn();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const emailFromGoogle = result.user.email;
      setValue(emailFromGoogle);
      localStorage.setItem("email", emailFromGoogle);

      // Verifica si el correo existe en la lista de correos
      const emailsResponse = await allEmails();
      const emails = emailsResponse.data.resultEmails;
      const userEmail = emails.find((e) => e.email === emailFromGoogle);

      if (!userEmail) {
        toast.error("Email not found in the list");
        return;
      }

      const { role } = userEmail;
      const token = result.user.accessToken; 
      const nameUser = result.user.displayName;
      const photoUser = result.user.photoURL;

      if (signIn({
        auth: {
          token: token, 
          type: 'Bearer' 
        },
        userState: {
          email: emailFromGoogle, 
          photo: photoUser,
          nameUser: nameUser
        }
      })) {
        toast.success('Inicio de sesión exitoso');

        if (role === "admin") {
          dispatch(fetchUserData({ email: emailFromGoogle, token, role }));
          navigate('/dashboard');
        } else {
          dispatch(fetchUserData({ email: emailFromGoogle, token, role }));
          navigate('/dashboard/profileRole');
        }
      } else {
        toast.error('Error al iniciar sesión');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <button size="sm" type="submit" onClick={handleClick} className={style1.btnGoogle}>
        <FcGoogle />
        Accede con Google
      </button>
    </>
  );
};

export default GoogleButton;
