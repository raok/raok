Acts = new Meteor.Collection('acts');
Meteor.publish("actsUpdated", function () {
  return Acts.find({});
});

var twitter = Meteor.require('twitter'),
	util = Meteor.require('util'),
	twit = new twitter({
    consumer_key: 'wyir0dDuntZkbXF0jQps8w',
    consumer_secret: 'hrWA0pEoGGD9DiJf1tanhkgYOCNwFL7yN6L8QCc3Nc',
    access_token_key: '2389016353-maPa5ax7R3VcXnFBROMb8HPEwJsO64So62dAHnK',
    access_token_secret: 'iKuvsT3tZd0Mk8ACUCfi6KzeN3Fvbr5EnyzDyHIlUgrrA'
});

twit.search('help', function(data) {
    console.log(util.inspect(data));

});


Meteor.startup(function () {
  // code to run on server at startupf
  Acts.remove({});

  for (var i=0; i<10; i++) {
    var act = {
      lat: (51+Math.random()).toString().substr(0,11),
      lon: (-Math.random()).toString().substr(0,11),
      description: "Random description Nr. "+i
    };
    Acts.insert(act);
  }
});
