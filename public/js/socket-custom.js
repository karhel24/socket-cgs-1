var socket = io(); // Se usa var y no let por compatibilidad de navegadores

// Escuchar conexion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar desconexion
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

socket.on('enviarMensaje', function(data) {
    console.log(`${data.usuario}: ${data.message}`);
});

// Enviar información al servidor de manera privada
socket.emit('enviarMensaje', {
    usuario: 'Carlos Grau',
    message: 'Hola que tal?'
}, function(resp) {
    //console.log('Se disparó el callback'); // Callback que queremos que se dispare en el servidor si todo ok
    console.log('Respuesta Server:', resp);
});