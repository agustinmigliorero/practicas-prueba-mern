import Boton from "./componentes/Boton";
import Tabla from "./componentes/Tabla";
import Inicio from "./componentes/Inicio";
import VerPublicacion from "./componentes/VerPublicacion";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "#ffaaaa" }}>
        Este es el navbar de la pagina!{" "}
        <Link className="boton" to="/">
          Inicio!
        </Link>{" "}
        <Link className="boton" to="/publicaciones">
          Publicaciones!
        </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/publicaciones" element={<Tabla />} />
        <Route path="/publicaciones/:id" element={<VerPublicacion />} />
      </Routes>
    </div>
  );
}

export default App;
