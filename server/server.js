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

Meteor.startup(function () {

  var insertTweet = Meteor.bindEnvironment(function(tweet) {
    Posts.insert({'text':tweet});
  });
		// console.log(Fiber);

	Posts = new Meteor.Collection("posts");
// Posts.insert({title: "Hello world", body: "First post"});

	function getTweets(callback){
		// Fiber(function() { 
				twit.search('help', function(data) {

			    // Acts.forEach()
			    if (data.geo){
		        acts.emit('update', {coords: data.geo.coordinates, lang: data.lang, msg:data.text});
		      }

			    console.log('\n - - - - - - - - - - - - - - -  \n');
			    console.log(data);
			    t = data.statuses;
			    for (var k in t){
			    	if (t.hasOwnProperty(k)) {
			         // console.log("Key is " + k + ", value is");
			         console.log("- - - - - - - - - - - - - -  ");
			         console.log(t[k].text)
			         // Posts.insert({title: t[k].text});
			         insertTweet(t[k].text);
			         // Acts.insert({'text':t[k].text.toString()});
			    	}
					}
				callback();
			}); // end twit.search
		// }).run();  
	}
	getTweets(function(){
		console.log('this');
	});
});
