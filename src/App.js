import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Navbar from "./components/Navbar"; */

import Home from "./views/Home";
import Plans from "./views/Plans";
import Services from "./views/Services";
import Class from "./views/Class";
import Register from "./views/Register";
import StartSession from "./views/StartSession";

function App() {
  return (
    <>
      <BrowserRouter>

{/*         <Navbar /> */}

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Planes" element={< Plans/>} />
          <Route path="/Servicios" element={< Services/>} />
          <Route path="/Clases" element={< Class />} />
          <Route path="/Registrar" element={< Register />} />
          <Route path="/IniciarSesion" element={< StartSession />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
