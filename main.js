// tour_places-list_buy-ticket-btn.js
document.addEventListener('DOMContentLoaded', function () { 
    buyTicket();
    imageSlider();  
});

function buyTicket (){           
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
        });
    }

function imageSlider() {
    let slider = document.getElementById("slider");
    if (!slider) return;

    // Image data
    let imgFiles = [
        "image/slider/ny.jpg",
        "image/slider/chicago.jpg",
        "image/slider/la.jpg"
    ];
    let imgCaptions = [
        "New York",
        "Chicago",
        "Los Angeles"
    ];
    let imgDescriptions = [
        "The atmosphere in New York is lorem ipsum.",
        "Thank you, Chicago - A night we won't forget.",
        "We had the best time playing at Venice Beach!"
    ];
    let imgCount = imgFiles.length;

    // Create image element
    let image = document.createElement("img");
    image.src = imgFiles[0];
    image.alt = imgCaptions[0];
    image.style.width = "100%";

    // Create text-content div
    let textContent = document.createElement("div");
    textContent.className = "text-content";

    let heading = document.createElement("h2");
    heading.className = "text-heading";
    heading.textContent = imgCaptions[0];

    let description = document.createElement("div");
    description.className = "text-description";
    description.textContent = imgDescriptions[0];

    textContent.appendChild(heading);
    textContent.appendChild(description);

    // Clear slider and append elements
    slider.innerHTML = "";
    slider.appendChild(image);
    slider.appendChild(textContent);

    // Cycle through images
    let currentImg = 0;
    setInterval(function () {
        currentImg = (currentImg + 1) % imgCount;
        image.src = imgFiles[currentImg];
        image.alt = imgCaptions[currentImg];
        heading.textContent = imgCaptions[currentImg];
        description.textContent = imgDescriptions[currentImg];
    }, 4000);
}




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