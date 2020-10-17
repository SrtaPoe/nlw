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
    const button = event.currentTarget


    console.log(button.children)


    const buttons =  document.querySelectorAll(".image button")
    buttons.forEach(removeActiveClass)


    function removeActiveClass(button) {
        
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.scr = image.scr

    button.classList.add('active')




}

