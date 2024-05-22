const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

//inicializaciones
const app =  express();
const server = http.createServer(app);
const io = socketIO(server);

//Configuraciones del servidor
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//rutas
app.use(require('./routes/'));

// sockets
require('./sockets')(io);


//static files

app.use(express.static(path.join(__dirname, 'public')));

//inicializando el puerto de escucha del servidor
server.listen(3000, () => {
    console.log('Server on port 3000');
});