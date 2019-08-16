  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.9387165, lng: 30.3208587},
      zoom: 15,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
      position: {lat: 59.938671, lng: 30.323022},
      map: map,
      title: 'Наш офис. Приходите в гости =)',
    });
  }
