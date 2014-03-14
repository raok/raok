Acts = new Meteor.Collection("acts");


var twitter = Meteor.require('twitter'),
	util = Meteor.require('util'),
	fs   = Npm.require('fs'),
	twit = new twitter({
    consumer_key: 'wyir0dDuntZkbXF0jQps8w',
    consumer_secret: 'hrWA0pEoGGD9DiJf1tanhkgYOCNwFL7yN6L8QCc3Nc',
    access_token_key: '2389016353-maPa5ax7R3VcXnFBROMb8HPEwJsO64So62dAHnK',
    access_token_secret: 'iKuvsT3tZd0Mk8ACUCfi6KzeN3Fvbr5EnyzDyHIlUgrrA'
});

twit.search('help', function(data) {
    // console.log(util.inspect(data));
    // data.forEach()
    // Acts.forEach()
    console.log('\n - - - - - - - - - - - - - - -  \n');
    console.log(data);
    t = data.statuses;
    for (var k in t){
    	if (t.hasOwnProperty(k)) {
         console.log("Key is " + k + ", value is");
         console.log(t[k].text)
         // Acts.insert({'text':t[k].text});
    	}
		}
    // fs.writeFile(process.env.PWD+'/data.txt', tweets.toString(), function(err, data){
    // 	if(err) console.log(err)
    // 	console.log(data);
    // })
	
// fs.writeFile(process.env.PWD+'/helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });
   //  var tweets = JSON.parse(data);
  	// for(var i = 0; i < tweets.length; i++){
  	// 	console.log("- - - - - - - - - - - - - - NEXT ");
  	// 	console.log(tweets[i]);
  	// }

  	// if(typeof data.statuses !== "undefined"){
	  // 	data.statuses.forEach(function(tweet){
	  // 		if (typeof tweet.text !== 'undefined'){
		 //  		console.log("- - - - - - - - - - - - - - NEXT ");
		 //  		console.log(tweet.text);
		 //  		var json = JSON.pase(tweet);
		 //  		Acts.insert(json);
	  // 		}
	  // 	})	
  	// }



});