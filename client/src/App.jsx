import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Index";
import Login from "./views/Login/Index";
import Home from "./views/Home/Index";
import Users from "./views/Prophile/Index";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import DetailProfile from "./views/detailprofile/index";
//import FullInfoSon from "./views/Prophile/ParentsAndSons";
import NotFound from "./views/NotFound/index";
import UserModule from "./views/UserModule/index";
import Courses from "./views/CourseModule/CrudCourses/Courses";
import EventModule from "./views/eventmodule/index";
import Message from './views/MenssageModule/index'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard/eventmodule" element={<EventModule />} /> */}

      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/Eventos" element={"Lista de eventos"} />
          <Route path="/dashboard/Mensajes" element={<Message/>} />
          <Route path="/dashboard/profile" element={<DetailProfile />} />
          <Route path="/dashboard/Usuarios" element={<UserModule />} />
          <Route path="/dashboard/eventmodule" element={<EventModule />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Route>
          <Route path="/dashboard/cursos" element={<Courses />} />
    </Routes>
  );
};

export default App;
