mapboxgl.accessToken = "pk.eyJ1IjoibWFyYW5lZGExIiwiYSI6ImNsdzU0YmlqejBwY3AycXQ5MTNwY3llZzYifQ.00iOWByToi_1wBximX5Fig";

const map = new mapboxgl.Map({
    container: "contenedor-del-mapa",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-72.06619, -45.57524],
    zoom: 12
  });