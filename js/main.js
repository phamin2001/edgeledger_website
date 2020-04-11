// Initialize and add the map
function initMap() {
  // Your location
  const loc = {
    lat: 39.739235,
    lng: -104.99025
  };
  // Current map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}
