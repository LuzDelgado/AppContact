/* Mapeo de Tabla de schema de base de datos*/
/* formato de la informacion de como va ser guardada */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'mensajes';
const messageSchema = new Schema({
    mensaje:{
        type: String,
        required: true
    },
    contact: {
        type: Schema.ObjectId, ref: 'contactos'
    }
}, {
    timestamps: true
});

const Message = mongoose.model(collection, messageSchema);

module.exports = Message;