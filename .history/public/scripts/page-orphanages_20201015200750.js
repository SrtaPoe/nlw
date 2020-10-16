const map = L.map('mapid').setView([-2.5387188,-44.2672987], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


L.marker([-2.5387188,-44.2672987]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();