import { useState, useEffect } from "react";

function Tabla() {
  const [publicaciones, setPublicaciones] = useState([]);

  async function fetchPublicaciones() {
    const respuesta = await fetch("http://localhost:3000/");
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
          </tr>
        </thead>
        <tbody>{mostrarFilas()}</tbody>
      </table>
    </>
  );
}

export default Tabla;
