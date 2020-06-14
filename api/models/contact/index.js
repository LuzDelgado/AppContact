/* Mapeo de Tabla de schema de base de datos*/
/*models/contact*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'contactos';
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
        required: false
    },
    pais:{
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Contact = mongoose.model(collection, contactSchema);

module.exports = Contact;