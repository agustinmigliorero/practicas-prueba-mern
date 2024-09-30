const Publicacion = require("../modelos/publicacion");

async function verPublicaciones(req, res) {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
}

async function verPublicacion(req, res) {
  const { id } = req.params;
  const publicacion = await Publicacion.findById(id);
  res.json(publicacion);
}

async function crearPublicacion(req, res) {
  const { titulo, texto } = req.body;
  const publicacion = new Publicacion({ titulo, texto });
  await publicacion.save();
  res.json(publicacion);
}

module.exports = { verPublicaciones, crearPublicacion, verPublicacion };
