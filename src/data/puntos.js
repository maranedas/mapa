var puntosCoyTest = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Verdín",
        "Dias": "Lunes - Miércoles - Viernes"
        },
        "geometry": {
        "coordinates": [
            -72.02855722771825,
            -45.56645356760196
        ],
        "type": "Point"
        },
        "id": 17
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Coyhaique Alto KM 4",
        "Dias": "Lunes - Miércoles - Viernes"
        },
        "geometry": {
        "coordinates": [
            -72.01360041630385,
            -45.5700493689218
        ],
        "type": "Point"
        },
        "id": 18
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Cerro Negro",
        "Dias": "Lunes - Miércoles - Viernes"
        },
        "geometry": {
        "coordinates": [
            -72.02176161755287,
            -45.58589502762003
        ],
        "type": "Point"
        },
        "id": 19
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Salto Chico",
        "Dias": "Martes - Jueves"
        },
        "geometry": {
        "coordinates": [
            -72.05852501113293,
            -45.68266842059015
        ],
        "type": "Point"
        },
        "id": 20
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Claro",
        "Dias": "Martes - Jueves"
        },
        "geometry": {
        "coordinates": [
            -72.09883455954234,
            -45.587808795615004
        ],
        "type": "Point"
        },
        "id": 21
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Lago Atravesado",
        "Dias": "Martes - Jueves"
        },
        "geometry": {
        "coordinates": [
            -72.21263132758824,
            -45.592931957898365
        ],
        "type": "Point"
        },
        "id": 22
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": " Baquedano salida norte camino Aysen",
        "Dias": "Martes - Jueves"
        },
        "geometry": {
        "coordinates": [
            -72.06653405331757,
            -45.562943357495996
        ],
        "type": "Point"
        },
        "id": 23
    }
    ]
}

// Define el icono personalizado
var blueIcon = L.icon({
    iconUrl: 'Punto1.png',
    
    iconSize: [30, 60],      // Tamaño del icono
    iconAnchor: [15, 60],    // Punto del icono que corresponde a la ubicación del marcador (centro inferior)
    popupAnchor: [0, -30]   // Punto desde el cual el popup debería abrirse en relación al icono
});

// Define el icono personalizado rojo
var greenIcon = L.icon({
    iconUrl: 'Punto2.png',

    iconSize: [30, 60],      // Tamaño del icono
    iconAnchor: [15, 60],    // Punto del icono que corresponde a la ubicación del marcador (centro inferior)
    popupAnchor: [0, -30]   // Punto desde el cual el popup debería abrirse en relación al icono (sobre el icono)
});


L.geoJSON(puntosCoyTest, {
    //LLamada del Puntero
    pointToLayer: function (feature, latlng) {
        if (feature.properties.Dias.includes("Lunes") || feature.properties.Dias.includes("Miércoles") || feature.properties.Dias.includes("Viernes")) {
            return L.marker(latlng, { icon: greenIcon });
        }
        else if (feature.properties.Dias.includes("Martes") || feature.properties.Dias.includes("Jueves")) {
            return L.marker(latlng, { icon: blueIcon });
        }
        else {
            return L.marker(latlng);
        }
    }
}).bindPopup(function(layer){
    return "<strong>Punto Reciclaje:</strong> " + layer.feature.properties.Sector + "<br>" +
    "<strong>Días:</strong> " + layer.feature.properties.Dias;
}).addTo(mapa)
