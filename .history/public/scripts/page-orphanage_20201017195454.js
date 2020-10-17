const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheeZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-2.5387188,-44.2672987], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//criando ícone //
const icon = L.icon({
    iconUrl:"/../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-2.5387188,-44.2672987], { icon })
    .addTo(map)
    
function selectImage() {
    console.log("cliquei")
}