Deps.autorun(function() {
  Meteor.subscribe("actsUpdated", Session.get("bounds"));
});

var map;

Acts.find().observe({
  added: function(act) {
    postMarker = L.marker([act.lat, act.lon]).addTo(map);
    postMarker.bindPopup('<p>' + act.description + '</p><p><a href="https://twitter.com/intent/tweet?in_reply_to=' + act.id + '&hashtags=offertohelp">Offer to help</a></p><p><a href="https://twitter.com/intent/tweet?in_reply_to=' + act.id + '&hashtags=done">I did this</a></p>');
  }
});

Template.hello.greeting = function () {
  return "Welcome to raok.";
};

function getMapBounds() {
  var point = map.getBounds(),
      bounds = {
        maxLat: point.getNorth(),
        minLong: point.getWest(),
        minLat: point.getSouth(),
        maxLong: point.getEast()
    };
  return bounds;
};

Template.map.rendered = function() {
  map = L.map('map').setView([0, 0], 1, { animate: true});
  map.locate({setView: true, maxZoom: 9});
  Session.set('bounds', getMapBounds());

  map.on('moveend', function() {
    map.stopLocate();
    Session.set('bounds', getMapBounds());
  });

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(map);
};

