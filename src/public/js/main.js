let vehicleMarker;
const map = L.map("map-template").setView([-45.57524, -72.06619], 14);
const socket = io();
const tileLayer = ("https://tile.openstreetmap.org/{z}/{x}/{y}.png?");
L.tileLayer(tileLayer).addTo(map);

// Ubicar al usuario
//map.locate({enableHighAccuracy: true});
//map.on('locationfound', e =>{
//    const coords = [e.latlng.lat, e.latlng.lng];
//    const marker = L.marker(coords);
//    marker.bindPopup('MI UBICACIÓN');
//    map.addLayer(marker);
//    socket.emit('userCoordinates', e.latlng);
//    //console.log(e);
//});

// Manejar nuevas coordenadas de otros usuarios
//socket.on('newUserCoordinates', (coords) => {
//    const marker = L.marker([coords.lat, coords.lng]);
//    marker.bindPopup('UBICACIÓN NUEVO USUARIO');
//    map.addLayer(marker);
//  });


// Evento de clic en el mapa para obtener coordenadas
map.on('click', function(e) {
    const coords = e.latlng;
    console.log('Coordenadas: ', coords);

    // Enviar las coordenadas al servidor
    socket.emit('userCoordinates', coords);
});

// Manejar nuevas coordenadas del vehículo recibidas desde el servidor
socket.on('newVehicleCoordinates', (coords) => {
    console.log('Nuevas coordenadas del vehículo:', coords);
    updateVehicleMarker(coords);
});

// Función para actualizar la posición del marcador del vehículo
function updateVehicleMarker(coords) {
    if (typeof vehicleMarker === 'undefined') {
        vehicleMarker = L.marker(coords).addTo(map);
    } else {
        vehicleMarker.setLatLng(coords);
    }
    map.panTo(coords);
}

// Obtener la ubicación del vehículo desde el dispositivo móvil
navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const vehicleCoords = { lat: latitude, lng: longitude };

    // Enviar las coordenadas del vehículo al servidor
    socket.emit('updateVehiclePosition', vehicleCoords);
}, (error) => {
    console.error('Error al obtener la ubicación:', error);
}, {
    enableHighAccuracy: true
});


const marker = L.marker([-45.57524, -72.06619]);
marker.bindPopup('PUNTO FIJO');
map.addLayer(marker);