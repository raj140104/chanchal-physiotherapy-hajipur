function initMap() {
    const location = { lat: 25.6854, lng: 85.2113 }; // Coordinates for Trimurti Chowk, Hajipur
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Chanchal Physiotherapy Center",
    });
}
