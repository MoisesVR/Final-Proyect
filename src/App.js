import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Plans from "./views/Plans";
import Services from "./views/Services";
import Class from "./views/Class";
import Register from "./views/Register";
import StartSession from "./views/StartSession";
import DashboardAdmin from "./views/DashboardAdmin";
import DashboardUser from "./views/DashboardUser";
import DashboardProfesor from "./views/Dashboard_profesor";
import Navbar from "./components/Navbar";
import { DataProvider } from "./context/contextApi";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Planes" element={< Plans />} />
          <Route path="/Servicios" element={< Services />} />
          <Route path="/Clases" element={< Class />} />
          <Route path="/Registrar" element={< Register />} />
          <Route path="/IniciarSesion" element={< StartSession />} />
          <Route path="/Dashboard" element={< DashboardAdmin />} />
          <Route path="/Dashboard_user" element={< DashboardUser />} />
          <Route path="/Dashboard_profesor" element={< DashboardProfesor />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
