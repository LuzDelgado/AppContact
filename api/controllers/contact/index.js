const express = require('express');
const router = express.Router();
const Contact = require('./../../models/contact');
const Message = require('./../../models/message');

const dateUtilities = require('./../../utilities/date');

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
            date: dateUtilities.getDate()
        };
        Contact.find({nombre: contact.nombre})
        .then(contact=>{
            if(contact.length>0){
                
            }else{
                const object = new Contact(contact);
                object.save()
                .then(()=>{
                    res.status(200).send({message: 'El contacto ha sido creado'});
                });
            }    
        });        
    })
    .put((req, res)=>{        
        res.send(`Actualizar el contact`);
    });

module.exports = router;