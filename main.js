// tour_places-list_buy-ticket-btn.js
document.addEventListener('DOMContentLoaded', function () {            
    const buyBtns = document.querySelectorAll('.js-buy-ticket');
    const modal = document.querySelector('.js-modal');
    const modalClose = document.querySelector('.js-modal-close');
    const modalContainer = document.querySelector('.js-modal-container');
    function showBuyTickets(){
        modal.classList.add('open')
    }
    
    function hideBuyTickets(){
        modal.classList.remove('open')
    }
    for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click', showBuyTickets)
    }

    modalClose.addEventListener('click', hideBuyTickets)
    modal.addEventListener('click', hideBuyTickets)
    modalContainer.addEventListener('click', function (event){
        event.stopPropagation()
    })
});


// map.js
window.addEventListener("load", initMap);
function initMap() {
    let displayMap = document.querySelector("#map .display-map");
    // Create a map to the The Band
    let Headquarter = { lat: 40.7579787, lng: -73.9881229 };
    let myMap = new google.maps.Map(displayMap, {
        zoom: 11,
        center: Headquarter,
        fullscreenControl: false
    });

    // Add a marker for the Band
    new google.maps.Marker({
        position: Headquarter,
        map: myMap,
        title: "The Band's Headquarter is here"
    });

    
    
}
function handleError(err) {
    console.log("Geolocation error: " + err.message);
    
    let displayMap = document.querySelector("#map .display-map");
    let errorImage = document.getElementById("geoErrorImage");
    if (errorImage) {
        errorImage.style.display = "block";
    }
    if (displayMap) {
        displayMap.style.display = "none";
    }
}