// Acts = new Meteor.Collection("acts");
var twitter = Meteor.require('twitter'),
	util = Meteor.require('util'),
	// Fiber = Meteor.require('fibers'),
	twit = new twitter({
    consumer_key: 'wyir0dDuntZkbXF0jQps8w',
    consumer_secret: 'hrWA0pEoGGD9DiJf1tanhkgYOCNwFL7yN6L8QCc3Nc',
    access_token_key: '2389016353-maPa5ax7R3VcXnFBROMb8HPEwJsO64So62dAHnK',
    access_token_secret: 'iKuvsT3tZd0Mk8ACUCfi6KzeN3Fvbr5EnyzDyHIlUgrrA'
});

var words = "help with, card";

Meteor.startup(function () {

  var insertTweet = Meteor.bindEnvironment(function(tweet) {
    Acts.insert(tweet);
  });

	Acts = new Meteor.Collection("acts");
// Posts.insert({title: "Hello world", body: "First post"});


	function getTweets(callback){
		twit.stream("statuses/filter", {
		                track: words, 'lang':'en'
		            }, function(stream) {
		    stream.on('data', function(data) {
		    	//if(typeof data.geo !== 'undefined' ){ // && typeof data.geo.coordinates !== 'undefined'){
		    		console.log(data.geo, data.text);    
		    		tweet = {};
		    		tweet.text = data.text;
		    		tweet.lat = (51.0+Math.random()).toString().substr(0,11);
     				tweet.lon = (-0.0+Math.random()).toString().substr(0,11);
     				tweet.id  = Number(data.id);
		    		insertTweet(tweet);
		    });
		});
	}

	getTweets(function(){
		console.log('done');
	});
});
