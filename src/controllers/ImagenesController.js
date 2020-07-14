const Imagenes = require('../models/Imagenes');
const Request = require('request');

var listaFavoritos = [];

function filtrarImagenes(req,res){
    let imagenes = [];
    Request({
        "headers": {"x-api-key": "f221c99b-304d-4404-b111-cbd3ddccf31a"},
        qs: { limit: '10' },
	    url: 'https://api.thecatapi.com/v1/images/search',
	    json: true
    }, 
    function (error, response, body) {
	    if(!error && response.statusCode === 200){
            return res.status(200).send({body});
        } 
    })
}

function guardarFavorita(req,res){
    let imagen = req.body
    listaFavoritos.push(imagen);
    return res.status(200).send({imagen});
}

function listarFavoritos(req,res){
    return res.status(200).send({listaFavoritos});
}

module.exports = {
 filtrarImagenes,
 guardarFavorita,
 listarFavoritos
}