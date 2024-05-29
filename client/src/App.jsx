import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Index";
import Login from "./views/Login/Index";
import Home from "./views/Home/Index";
//import Users from "./views/Prophile/Index";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import DetailProfile from "./views/detailprofile/index"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
      <Route element={<AuthOutlet fallbackPath="/login" />}>
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/profile" element={<DetailProfile />} /> 
</Route>
        
      </Route>
    </Routes>
  );
};

export default App;