function Boton({ texto, color, evento, contador }) {
  return (
    <button onClick={evento} style={{ backgroundColor: color }}>
      {texto + contador}
    </button>
  );
}

export default Boton;
