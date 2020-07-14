const mongoose = require('mongoose');

const GatosSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  foto: {
    type: String,
    required: false
  } 
});

const Gatos = mongoose.model('gatos',GatosSchema);

module.exports = Gatos;