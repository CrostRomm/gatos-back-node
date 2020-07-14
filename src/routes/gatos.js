const express = require('express');
const gatosController = require('../controllers/GatosController');

const Router = express.Router();

Router.get('/', gatosController.listarGatos)
      .get('/:id',gatosController.find, gatosController.buscarGato)
      .post('/', gatosController.registrarGato)
      .put('/:id', gatosController.find, gatosController.editarGato)
      .delete('/:id', gatosController.find, gatosController.eliminarGato)


module.exports = Router;