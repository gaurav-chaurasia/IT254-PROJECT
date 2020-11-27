const redDot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
const blueDot = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
const mapContainer = document.getElementById('map');
const addLocation = document.getElementById('addLocation');
const updateLocation = document.getElementById('updateLocation');
const deleteLocation = document.getElementById('deleteLocation');
const userLatitude = document.querySelector('#user_location #lat'); 
const userLongitude = document.querySelector('#user_location #lng'); 
const otherLatitude = document.querySelectorAll('#locations #lat');
const otherLongitude = document.querySelectorAll('#locations #lng');
let currentLatitude, currentLongitude;


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {
        currentLatitude =  p.coords.latitude;
        currentLongitude = p.coords.longitude;
    });
}

function getLocation (prop) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const data = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                }
                const options = {
                    method: prop.method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
                console.log(options);
                console.log(prop.path);
                const response = await fetch(prop.path, options);
            }, 
            (msg) => {
                alert(msg.message);
                console.log(msg.message);
            }
        );
    } else {
        alert('geo location is not supported in your devise!!!');
    }
}

addLocation.addEventListener('click', () => {
    getLocation({ 
        path: '/maps/add',
        method: 'POST'
    });
});

updateLocation.addEventListener('click', () => {
    getLocation({ 
        path: '/maps/update',
        method: 'PUT'
    });
});

deleteLocation.addEventListener('click', () => {
    getLocation({ 
        path: '/maps/delete',
        method: 'DELETE'
    });
});

function getOptions() {
    if (navigator.geolocation) {
        // console.log(currentLatitude);
        // console.log(currentLongitude);
        if (userLatitude && userLongitude) {
            return {
                zoom: 19,
                center: {
                    lat: parseFloat(userLatitude.innerText, 10),
                    lng: parseFloat(userLongitude.innerText, 10)
                } 
            };
        } else if (currentLatitude && currentLongitude) {
            return {
                zoom: 19,
                center: {
                    lat: currentLatitude,
                    lng: currentLongitude
                } 
            };
        } else {
            return {
                zoom: 19,
                center: {
                    lat: 25.2677,
                    lng: 82.9913
                } 
            };
        }
    }
}

function initMap() {
    // Map options 
    let options = getOptions();
    let map = new google.maps.Map(
        mapContainer,
        options, 
    ); 

    // adding user location and center 
    if (userLatitude && userLongitude) {
        showPointsOnMap({
            coords: {
                lat: parseFloat(userLatitude.innerText, 10),
                lng: parseFloat(userLongitude.innerText, 10)
            },
            icon: blueDot
        });
    }


    // lets add other points to the map too
    for (let i = 0; i < otherLatitude.length; i++) {
        showPointsOnMap({
            coords: {
                lat: parseFloat(otherLatitude[i].innerText, 10),
                lng: parseFloat(otherLongitude[i].innerText, 10)
            },
            icon: redDot
        });
    }


    function showPointsOnMap(prop) {
        let marker = new google.maps.Marker({
            position: {
                lat: prop.coords.lat,
                lng: prop.coords.lng,
            },
            map: map,
            icon: prop.icon,
        });
        // console.log(prop);
        const infowindow = new google.maps.InfoWindow({
            content: "<p class='alert alert-dark'>Marker Location: <strong>" + marker.getPosition() + "</strong></p>",
        });
        google.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
        });
    }
}
