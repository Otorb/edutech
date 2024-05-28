import { useEffect, useState } from "react";
import HomeProfesor from "./components/HomeProfesor";
import HomePadre from "./components/HomePadre";
import HomeEstudiante from "./components/HomeEstudiantes";
import { userHistory } from "../../Api/history";

const Index = () => {

  const [roluser, setRoluser] = useState("estudiante");

  useEffect(() => {
    const dataHitorial = async () => {
      try {
        const response = await userHistory();
        console.log(response);
        // Aquí puedes hacer algo con la respuesta, como actualizar el estado del componente
      } catch (error) {
        console.error("Error fetching user history:", error);
      }
    };

    dataHitorial();
  }, []);

  return (
    <>
      {roluser === "profesor" && <HomeProfesor />}
      {roluser === "padre" && <HomePadre />}
      {roluser === "estudiante" && <HomeEstudiante />}
    </>

  );
};

export default Index;
