import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/NotFound/Notfound";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import RequireAuth from "./Pages/Login/RequireAuth";
import CreateService from "./Pages/CreateService/CreateService";
import MangeService from "./Pages/ManageService/MangeService";
import UpdateService from "./Pages/ManageService/UpdateService/UpdateService";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetails></ServiceDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/new-service"
          element={
            <RequireAuth>
              <CreateService></CreateService>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manage-service"
          element={
            <RequireAuth>
              <MangeService></MangeService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/updateService/:serviceId"
          element={
            <RequireAuth>
              <UpdateService></UpdateService>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
