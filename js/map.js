var mymap = L.map("mapid").setView([43.4375, -1.5559], 12);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(mymap);

const ga = [43.42454, -1.60919];

var marker = L.marker(ga).addTo(mymap);

// ajout d'un popup
marker.bindPopup(
  "<h3>Pizzeria le Spot à Guéthary</h3><p class='moins'>491 avenue du Général de Gaulle 64210 Guéthary<br /><a href='https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=43.4245%2C-1.6092#map=14/43.4460/-1.5783'>Visualiser l'itinéraire ?</a></p>"
);
