const mongoose = require("mongoose");
const { Schema } = mongoose;

const publicacionSchema = new Schema({
  titulo: { type: String },
  texto: { type: String },
});

module.exports = mongoose.model("Publicacion", publicacionSchema);
