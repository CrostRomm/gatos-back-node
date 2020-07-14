const Gatos = require('../models/Gatos');

function listarGatos(req, res){
    Gatos.find({})
    .then(gatos => {
        if(gatos.length) return res.status(200).send({gatos});
        return res.status(404).send({mensaje: 'No hay gatos en el registro'});
    }).catch(e => res.status(500).send({e}));
}

function buscarGato(req, res){
    Gatos.findById(req.params.id)
        .then(gato => {
            if(gato) return res.status(200).send({gato});
            return res.status(404).send({mensaje: 'no existe este gato'});
        }).catch(e => res.status(500).send({e}));
}


function registrarGato(req, res){
    let gato = new Gatos(req.body);
    gato.save()
        .then(response => res.status(201)
        .send({gato})).catch(e => {
            res.status(500).send({e})
        });
}

function editarGato(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gatos) return res.status(404).send({mensaje: 'No se encontro el gato a editar'});

    let gato  = req.body.gatos[0];

    gato = Object.assign(gato, req.body);
    gato.save().then(cat => res.status(200).send({mensaje: 'Se actualizo correctamente', gato}))
    .catch(e => res.status(500).send({e}))
}

function eliminarGato(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gatos) return res.status(404).send({mensaje: 'No se encontro el gato a eliminar'});

    req.body.gatos[0].remove().then(product => res.status(200).send({mensaje: 'Se elimino el gato'}))
    .catch(e => { res.status(500).send({e})});

}

function find(req,res,next){
    //let query = {};
    //query[req.params.key] = req.params.value;
    Gatos.find(req.params.value).then(gatos => {
        if(!gatos.length) return next();
        req.body.gatos = gatos;
        return next();
    }).catch(e => {
        req.body.error = e;
         return next();
        });
}

module.exports = {
 listarGatos,
 buscarGato,
 registrarGato,
 editarGato,
 eliminarGato,
 find
}