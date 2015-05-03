Meteor.startup(function () {
  Meteor.subscribe('userData');
  GoogleMaps.load();
});