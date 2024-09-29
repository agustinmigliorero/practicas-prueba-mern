import Boton from "./componentes/Boton";
import { useState } from "react";

function App() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  function eventoBoton1() {
    setContador1(contador1 + 1);
  }

  function eventoBoton2() {
    setContador2(contador2 + 1);
  }

  return (
    <div>
      <h1>Hola gente!</h1>
      <Boton
        contador={contador1}
        evento={eventoBoton1}
        color="blue"
        texto="Este es el boton "
      ></Boton>
      <Boton
        contador={contador2}
        evento={eventoBoton2}
        color="red"
        texto="Este boton tiene otro numero "
      ></Boton>
    </div>
  );
}

export default App;
