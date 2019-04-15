document.addEventListener("turbolinks:load", function() {
    var map = new GMaps({
    div: '#map',
    lat: 38.5816,
    lng: -121.4944
  });

  var apartments = JSON.parse(document.querySelector("#map").dataset.apartments);
  window.apartments = apartments;

  var bounds = new google.maps.LatLngBounds();

  apartments.forEach(function(apartment){
    if (apartment.latitude && apartment.longitude) {
      var marker = map.addMarker({
        lat: apartment.latitude,
        lng: apartment.longitude,
        title: apartment.address,
        infoWindow: {
          content: `<p><a href='/apartments/${apartment.id}'>${apartment.address}</a></p>`
        }
      });

      bounds.extend(marker.position);
    }
  });
  map.fitBounds(bounds)
})
