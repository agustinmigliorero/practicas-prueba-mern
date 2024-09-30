import Boton from "./componentes/Boton";
import Tabla from "./componentes/Tabla";
import Inicio from "./componentes/Inicio";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "#ffaaaa" }}>
        Este es el navbar de la pagina! <Link to="/">Inicio!</Link>{" "}
        <Link to="/publicaciones">Publicaciones!</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/publicaciones" element={<Tabla />} />
      </Routes>
    </div>
  );
}

export default App;
