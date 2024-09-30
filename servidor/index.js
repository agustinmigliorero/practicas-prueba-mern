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

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Origin, Authorization"
  );
  next();
});
//cors

const rutasPublicaciones = require("./rutas/publicaciones");
app.use("/", rutasPublicaciones);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
