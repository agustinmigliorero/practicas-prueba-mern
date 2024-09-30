const Publicacion = require("../modelos/publicacion");

async function verPublicaciones(req, res) {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
}

async function crearPublicacion(req, res) {
  const { titulo, texto } = req.body;
  const publicacion = new Publicacion({ titulo, texto });
  await publicacion.save();
  res.json(publicacion);
}

module.exports = { verPublicaciones, crearPublicacion };
