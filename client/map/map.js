Template.body.helpers({
  mapOptions: function () {
    if (GoogleMaps.loaded()) {
      var home = Tracker.nonreactive(function() {
        return Meteor.user().home;
      });

      return {
        center: new google.maps.LatLng(home.latitude, home.longitude),
        zoom: home.zoom
      };
    }
  }
});

Template.body.onCreated(function () {
  GoogleMaps.ready('map', function (map) {
    var setHome = function () {
      Meteor.call('setHome', map.instance.getCenter().lat(), map.instance.getCenter().lng(), map.instance.getZoom(), function (err, result) {
        console.log('Home set');
      });
    }

    google.maps.event.addListener(map.instance, 'dragend', function (event) {
      setHome();
    });

    google.maps.event.addListener(map.instance, 'zoom_changed', function (event) {
      setHome();
    });
  });
});
