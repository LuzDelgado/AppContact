const newContact = () => {
    //se construye el objeto que se enviará al API
    const contact = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value
    };
    if(contact.nombre!=='' && contact.correo!=='') {
        //se define la ruta hacia donde se enviará la petición
        const url = '/api/contact';
        //se hace la petición con Fetch
        fetch(url, {
            method: 'POST', //se define que es de tipo POST 
            body: JSON.stringify(contact), //se convierte en String el objeto que se va a enviar
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())        
        //respuesta con error

        .catch(error => console.error('Error:', error))
        //respuesta exitosa
        .then(response => {     
            document.getElementById('nombre').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('pais').value = '';
        });
    }    
};

const newMessage = () => {
    //se construye el objeto que se enviará al API
    const menssage = {
        mensaje: document.getElementById('mensaje').value        
    };
    if(message.mensaje!==''){
        //se define la ruta hacia donde se enviará la petición
        const url = '/api/message';
        //se hace la petición con Fetch
        fetch(url, {
            method: 'POST', //se define que es de tipo POST 
            body: JSON.stringify(message), //se convierte en String el objeto que se va a enviar
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())        
        //respuesta con error
        .catch(error => console.error('Error:', error))
        //respuesta exitosa
        .then(response => {
            document.getElementById('mensaje').value = '';    
        });
    }    
};


const getContacts = () => {
    const url = '/api/contact';
    fetch(url)
    .then(res => res.json())
    .then(response => {
        //se recibe el array de respuesta, se recorre y se arma un string 
        //para mostrar el resultado
        const html = response.map(contact => {
           return `<li class="list-group-item">${contact.nombre}<br /><small>${contact.correo}</small></li>`
        }).join(" ");
        //el string construido se agrega en el div con id tweets
        document.getElementById('contact').innerHTML = `<ul class="list-group">
                                                        <li class="list-group-item active">Contactos</li>
                                                        ${html}
                                                        </ul>`;
    });
};
