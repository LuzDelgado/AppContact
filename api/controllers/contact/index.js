const express = require('express');
const router = express.Router();
const Contact = require('./../../models/contact')

//referencio el móudlo que contiene la función para obtener la fecha
const dateUtilities = require('../../utilities/date');

router.route('/')
    .get((req, res)=>{
        Contact.find({})
        .then(Contacts=>{
            res.status(200).send(Contacts);
        })                
    })
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const contact = {            
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            correo: req.body.correo,
            pais: req.body.pais,
            mensaje: req.body.mensaje,
            date: dateUtilities.getDate()
        };
        //llamado a guardar tweet
        const object = new Contact(contact);
        object.save()
        .then(()=>{
            res.status(200).send({message: 'El contacto ha sido creado'});
        });
    })
    .put((req, res)=>{
        
        res.send(`Actualizar el contact`);
    });

router.route('/:id')
    .get((req, res)=>{
        res.send(`Página del tweet ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar tweet ${req.params.id}`);
    });

module.exports = router;