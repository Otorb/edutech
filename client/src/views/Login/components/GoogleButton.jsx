import {
  GoogleAuthProvider,
  //   getAuth,
  //   signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import style1 from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../utils/Credentials";

const GoogleButton = () => {
  const [value, setValue] = useState("");
  console.log("test googlebutton:", value);

  const handleClick = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <button size="sm" type="submit" onClick={handleClick}
       className={style1.btnGoogle}
      >
        <FcGoogle />
        Accede con Google

      </button>
    </>
  );
};

export default GoogleButton;
