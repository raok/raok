Acts = new Meteor.Collection('acts');
var map;

Acts.find().observe({
  added: function(act) {
    postMarker = L.marker([act.lat, act.lon]).addTo(map);
    postMarker.bindPopup(act.description);
  }
});

Template.hello.greeting = function () {
  return "Welcome to raok.";
};

Template.hello.rendered = function() {
  map = L.map('map').setView([51.505, -0.09], 8);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(map);
};

