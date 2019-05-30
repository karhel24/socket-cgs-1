const { io } = require('../server');

io.on('connection', (client) => {

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a la app!!'
    });

    console.log('Usuario conectado', client.id);

    client.on('disconnect', () => {
        console.log(`Usuario ${client.id} desconectado.`);
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL'
        //     });
        // }

        //client.emit('enviarMensaje', data); // Se envia al conectado del que recibe el client.on('enviarMensaje'...) anterior
        client.broadcast.emit('enviarMensaje', data); // Se envia a todos los conectados. 


    });


});