import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Tabla() {
  const [publicaciones, setPublicaciones] = useState([]);

  async function fetchPublicaciones() {
    const respuesta = await fetch("http://localhost:3000/publicaciones");
    const resPublicaciones = await respuesta.json();

    setPublicaciones(resPublicaciones);
  }

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  function mostrarFilas() {
    return publicaciones.map((publicacion, index) => {
      return (
        <tr key={index}>
          <td>{publicacion._id}</td>
          <td>{publicacion.titulo}</td>
          <td>{publicacion.texto}</td>
          <td>
            <Link className="boton" to={`/publicaciones/${publicacion._id}`}>
              Ver publicacion
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Titulo</th>
            <th>Texto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{mostrarFilas()}</tbody>
      </table>
    </>
  );
}

export default Tabla;
