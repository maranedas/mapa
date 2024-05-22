var map = L.map("contenedor-del-mapa").setView([-45.57524, -72.06619], 14)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(map)


map.locate({enableHighAccuracy: true});
map.on('locationfound', e=>{
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker([coords]);
    marker.bindPopup('UBICACION');
    map.addLayer(marker);
    //console.log(e);
});

//agregar mapas KML
//var estacionamientosKML = omnivore.kml("./data/Estacionamientos_discapacidad.kml").addTo(mapa)
