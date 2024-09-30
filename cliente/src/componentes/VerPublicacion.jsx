import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function VerPublicacion() {
  const { id } = useParams();
  const [publicacion, setPublicacion] = useState({});

  async function fetchPublicacion() {
    const respuesta = await fetch(`http://localhost:3000/publicaciones/${id}`);
    const resPublicacion = await respuesta.json();
    setPublicacion(resPublicacion);
  }

  useEffect(() => {
    fetchPublicacion();
  }, []);

  function mostrarPublicacion() {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>{publicacion.titulo}</h2>
        <p>{publicacion.texto}</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ textAlign: "center", color: "blue" }}>Ver publicacion!</h1>
      {mostrarPublicacion()}
      <Link className="boton" to="/publicaciones">
        Volver
      </Link>
    </div>
  );
}

export default VerPublicacion;
