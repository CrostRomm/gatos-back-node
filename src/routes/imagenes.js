const express = require('express');
const imagenesController = require('../controllers/ImagenesController');

const Router = express.Router();

Router.get('/', imagenesController.filtrarImagenes)
      .post('/favoritos', imagenesController.guardarFavorita)
      .get('/favoritos', imagenesController.listarFavoritos);


module.exports = Router;