import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./Paginas/Inicio";
import { Nosotros } from "./Paginas/Nosotros";
import { Productos } from "./Paginas/Productos";
import { Detalle } from "./Paginas/Detalle";
import { FormContacto } from "./Paginas/Contacto";
import LayoutPrincipal from "./Layouts/LayoutPrincipal";
import LayoutVacio from "./Layouts/LayoutVacio";
import Especial from "./Paginas/Especial";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/productos/:id" element={<Detalle />}></Route>
          <Route path="/contacto" element={<FormContacto />}></Route>
        </Route>

        <Route element={<LayoutVacio />}>
          <Route path="/Especial" element={<Especial />}></Route>
        </Route>

        {/*fallback*/}
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
}

export default App;
