const map = L.map('mapid').setView([-2.5387188,-44.2672987], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


L.marker([-2.5387188,-44.2672987], { icon })
    .addTo(map)
    .bindPopup(popup)
   

//criando ícone //
const icon = L.icon({
    iconUrl:"/../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240 
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img scr=".public/images/arrow-white.svg" ></a>')