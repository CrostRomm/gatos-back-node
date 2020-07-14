const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(conexion => {
            this.connection = conexion
            console.log("La base de datos se conecto con exito");
        }).catch( e => console.log(e));
    }
}