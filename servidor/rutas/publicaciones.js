const {
  verPublicaciones,
  crearPublicacion,
} = require("../controladores/publicaciones");
const express = require("express");
const router = express.Router();

router.get("/", verPublicaciones);
router.post("/", crearPublicacion);

module.exports = router;
