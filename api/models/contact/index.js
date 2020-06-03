/* Mapeo de Tabla de schema de base de datos*/
/* formato de la informacion de como va ser guardada */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Contact = mongoose.model('contactos', contactSchema);

module.exports = Contact;