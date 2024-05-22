module.exports = io => {
  
  io.on('connection', (socket) => {
    console.log('Nuevo Usuario Conectado');
    
    // Emitir posición inicial del vehículo
    socket.emit('position', { lat: -45.57524, lng: -72.06619 });

      // Manejar coordenadas del usuario conectado
      socket.on('userCoordinates', coords => {
      socket.broadcast.emit('newUserCoordinates', coords);// Ver broadcast 
    });

      // Manejar coordenadas del vehículo
      socket.on('updateVehiclePosition', coords => {
      console.log('Coordenadas del vehículo recibidas:', coords);
      io.emit('newVehicleCoordinates', coords); // Emitir las coordenadas a todos los clientes
    });

      // Manejar desconexión del usuario
      socket.on('disconnect', () => {
      console.log('Usuario Desconectado');
    });
  });
};