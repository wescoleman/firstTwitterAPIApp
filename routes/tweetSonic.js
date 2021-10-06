//express router and environment variables
var express = require('express'),
    router = express.Router(),
    sentiment,
    tweets,
    soxTweets;
require('dotenv').config();

// google API
const NLP = require('google-nlp')
const apiKey = process.env.GNLP_API_KEY;
let nlp = new NLP( apiKey );

// Twitter API
var Twit = require('promised-twit'),
    fs = require('fs');
var T = new Twit({
  consumer_key:         process.env.TWITTER_API_KEY,
  consumer_secret:      process.env.TWITTER_API_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

//  Default features if `features` param is omitted
const features = {
    syntax:    true,
    entities:  true,
    sentiment: true
}

router.get('/tweetSonic', function(req, res) {
    tweets = "";
    T.getSearchTweets({ q: 'trump since:2021-01-25', geocode: '42,-71,100mi',count: 100})
        .then (( data)=>{
            for (var i = 0; i < data.statuses.length; i++) {
                tweets = tweets + data.statuses[i].text +'\n';
            }
            nlp.analyzeSentiment( tweets )
                .then((sentiment)=>{
                    console.log(sentiment);
                    res.render('tweetSonic',{td : tweets, sd: sentiment });;
                })
                .catch(function( error ) {
                    console.log( 'Error:', error.message );
                })
        })    
});

module.exports = router;
 