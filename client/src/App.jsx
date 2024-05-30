import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Index";
import Login from "./views/Login/Index";
import Home from "./views/Home/Index";
//import Users from "./views/Prophile/Index";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Eventos" element={"Lista de eventos"} />
          <Route path="/dashboard/Usuarios" element={"Lista de usuarios"} />
          <Route path="/dashboard/Cursos" element={"Lista de cursos"} />
          <Route path="/dashboard/Mensajes" element={"Lista de Mensajes"} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
