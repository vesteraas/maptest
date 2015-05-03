Meteor.startup(function() {
  Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId}, {fields: {'home': 1}});
  });
});

Accounts.onCreateUser(function (options, user) {
  user.home = {
    latitude: 59,
    longitude: 10,
    zoom: 8
  };

  return user;
});

Meteor.methods({
  setHome: function (latitude, longitude, zoom) {
    Meteor.users.update({_id: this.userId}, {$set: {home:  {latitude: latitude, longitude: longitude, zoom: zoom}}});
  }
});
