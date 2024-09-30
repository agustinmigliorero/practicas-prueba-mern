const {
  verPublicaciones,
  crearPublicacion,
  verPublicacion,
} = require("../controladores/publicaciones");
const express = require("express");
const router = express.Router();

router.get("/", verPublicaciones);
router.get("/:id", verPublicacion);
router.post("/", crearPublicacion);

module.exports = router;
