const express = require("express");
const mongoose = require("mongoose");

// Conexión a la base de datos

const db = mongoose.connect("mongodb://127.0.0.1:27017/clase-28-9");

db.then(() => {
  console.log("Base de datos conectada");
});

// Conexión a la base de datos

const app = express();

app.use(express.json());

const rutasPublicaciones = require("./rutas/publicaciones");
app.use("/", rutasPublicaciones);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
