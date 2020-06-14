const express = require('express');
const router = express.Router();
const Contact = require('./../../models/contact');
const Message = require('./../../models/message');

const dateUtilities = require('./../../utilities/date');

router.route('/')
    .get((req, res)=>{
        Message.find({})
        .then(Message=>{
            res.status(200).send(Message);
        })                    
    })
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const message = {
            mensaje: req.body.mensaje,
            contact: req._id
        };
        const object = new Message(message);
        object.save()
        .then(()=>{
            res.status(200).send({message: 'El mensaje ha sido creado'});
        });                
    });
    
module.exports = router;