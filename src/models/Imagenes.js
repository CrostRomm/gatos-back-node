const mongoose = require('mongoose');

const ImagenesSchema = new mongoose.Schema({
    id: String,
    url: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

const Imagenes = mongoose.model('imagenes',ImagenesSchema);

module.exports = Imagenes;