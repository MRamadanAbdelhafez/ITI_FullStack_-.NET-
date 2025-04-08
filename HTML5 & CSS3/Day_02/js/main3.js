var map;
var marker;

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    initMap(lat, lng);
}

function error(e) {
    console.log("Geolocation error:", e.message);
    initMap(30.033333, 31.233334);
}

function initMap(lat, lng) {
    var myLatLng = { lat: lat, lng: lng };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Selected Location",
    });
}

function getPosition(countryName) {
    var request = new XMLHttpRequest();
    request.open("GET", `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
    request.send();

    request.onload = function () {
        var data = JSON.parse(request.response);
        var lat = parseFloat(data[0].lat);
        var lon = parseFloat(data[0].lon);
        updateMap(lat, lon);
        
    };
}

function updateMap(lat, lon) {
    var newLatLng = { lat: lat, lng: lon };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: newLatLng,
    });
    marker = new google.maps.Marker({
        position: newLatLng,
        map,
        
    });
}

document.getElementById("countrySelect").addEventListener("change", function () {
    var selectedCountry = this.value;
    getPosition(selectedCountry);
});
