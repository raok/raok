
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


var words = "help me with";

Meteor.startup(function () {
	Acts.remove({});

  var insertTweet = Meteor.bindEnvironment(function(tweet) {
    Acts.insert(tweet);
  });

	function getTweets(callback){
		twit.stream("statuses/filter", {
		                track: words, 'lang':'en'
		            }, function(stream) {
		    stream.on('data', function(data) {
		    	//if(typeof data.geo !== 'undefined' ){ // && typeof data.geo.coordinates !== 'undefined'){
		    		console.log(data.geo, data.text);    
		    		tweet = {};
		    		tweet.description = data.text;
		    		tweet.lat = (51.0+Math.random()).toString().substr(0,11);
     				tweet.lon = (-0.0+Math.random()).toString().substr(0,11);
     				tweet.id  = String(data.id);
		    		insertTweet(tweet);
		    });
		});
	}

	getTweets(function(){
		console.log('done');
	});
});