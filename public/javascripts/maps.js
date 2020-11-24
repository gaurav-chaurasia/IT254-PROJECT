const mapContainer = document.getElementById('map');
const redDot = "https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0";
const blueDot = "https://storage.googleapis.com/support-kms-prod/SNP_2752068_en_v0";

function initMap() {

    // Map options 
    var options = {
        zoom: 19,
        center: {
            lat: 25.271050,
            lng: 83.013208,
        }
    }

    var map = new google.maps.Map(
        mapContainer,
        options, 
    );

    var marker = new google.maps.Marker({
        position: {
            lat: options.center.lat,
            lng: options.center.lng,
        },
        map: map,
        icon: blueDot,
    });
}

function showPointsOnMap(coords) {
    const a = document.getElementById('secret-location-data');
    console.log(a);
}