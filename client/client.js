Acts = new Meteor.Collection('acts');

var actsSub = Meteor.subscribe("actsUpdated", updateActs);
actsSub.ready(function() {
    var acts = Acts.find();

    console.log('hi');

    acts.forEach(function (act) {
      console.log(act);
      var postMarker = L.marker([act.lat, act.lon]).addTo(map);
      postMarker.bindPopup(act.description);
    });
});

function updateActs(coll) {
  console.log(coll);
}

Template.hello.greeting = function () {
  return "Welcome to raok.";
};

Template.hello.rendered = function() {
  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(map);

  setTimeout(function() {
    var acts = Acts.find();

    acts.forEach(function (act) {
      var postMarker = L.marker([act.lat, act.lon]).addTo(map);
      postMarker.bindPopup(act.description);
    });

  }, 200);


  // this is just test
  var marker = L.marker(['51.5', '-0.09']).addTo(map);
  marker.bindPopup('Help Me?');
};

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

