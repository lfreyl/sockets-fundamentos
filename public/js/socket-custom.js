var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});