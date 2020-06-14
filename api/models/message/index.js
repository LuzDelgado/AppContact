/* Mapeo de Tabla de schema de base de datos*/
/* formato de la informacion de como va ser guardada */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
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
        required: false
    },
    pais:{
        type: String,
        required: false
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