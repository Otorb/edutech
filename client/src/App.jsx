import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Index";
import Login from "./views/Login/Index";
import Home from "./views/Home/Index";
import Users from "./views/Prophile/Index";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import DetailProfile from "./views/detailprofile/index";
import NotFound from "./views/NotFound/index";
import UserModule from "./views/UserModule/index";
import EventModule from "./views/eventmodule/index";
import Message from "./views/MenssageModule/index";
import Examen from "./views/Examen/index";
import DetallCurso from "./views/DetallCurso/index";

import Cursos from './views/CourseModule/index'
import Hijos from './views/Hijos/index'

import Notas from './views/NotesModule/index'



const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

          <Route path="/dashboard/profileRole" element={<Users />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard/profileRole" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Hijos" element={<Hijos/>} />
          <Route path="/dashboard/Mensajes" element={<Message />} />
          <Route path="/dashboard/profile/:id" element={<DetailProfile />} />
          <Route path="/dashboard/Usuarios" element={<UserModule />} />
          <Route path="/dashboard/Examenes" element={<Examen />} />
          <Route path="/dashboard/detalle/:materia" element={<DetallCurso />} />
          <Route path="/dashboard/Cursos" element={<Cursos />} />
          <Route path="/dashboard/Notas" element={<Notas />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
          <Route path="/dashboard/cursos" element={'cursos'} />
      </Route>
    </Routes>
  );
};

export default App;
