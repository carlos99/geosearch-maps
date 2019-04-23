document.addEventListener("turbolinks:load", function() {
    var map = new GMaps({
    div: '#map',
    lat: 38.5816,
    lng: -121.4944
  });

  window.map = map;

  var apartments = JSON.parse(document.querySelector("#map").dataset.apartments);
  window.apartments = apartments;

  //var bounds = new google.maps.LatLngBounds();

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
      //bounds.extend(marker.position);
    }
  });

var l = document.querySelector("#map").dataset.l;
if (l) {
  var latlngs   = l.split(',');
  var southWest = new google.maps.LatLng(latlngs[0], latlngs[1]);
  var northEast = new google.maps.LatLng(latlngs[2], latlngs[3]);
  var bounds    = new google.maps.LatLngBounds(southWest, northEast);
  map.fitBounds(bounds, 0);
}else {
  map.fitZoom();
}

  document.querySelector("#redo-search").addEventListener("click", function(e){
    e.preventDefault();

    var bounds = map.getBounds();
    var location = bounds.getSouthWest().toUrlValue() + "," + bounds.getNorthEast().toUrlValue();

    Turbolinks.visit(`/apartments?l=${location}`);
  });
});
