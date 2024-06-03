import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Index";
import Login from "./views/Login/Index";
import Home from "./views/Home/Index";
import Users from "./views/Prophile/Index";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import DetailProfile from "./views/detailprofile/index"
import FullInfoSon from "./views/Prophile/Sons";
import NotFound from './views/NotFound/index'
import UserModule from './views/UserModule/index'


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Usuarios" element={<UserModule/>} />
          <Route path="/dashboard/Eventos" element={"Lista de eventos"} />
          <Route path="/dashboard/Cursos" element={"Lista de cursos"} />
          <Route path="/dashboard/Mensajes" element={"Lista de Mensajes"} />
          <Route path="/dashboard/profile" element={<DetailProfile />} />
        </Route>
        <Route path="/profileRole" element={<Users />} />
        <Route path="/profileRole/:name" element={<FullInfoSon />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
