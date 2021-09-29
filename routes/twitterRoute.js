var Twit = require('twit'),
    fs = require('fs'),
    express = require("express"),
    router = express.Router(),
    soxTweets,
    tweets;
require('dotenv').config();

var T = new Twit({
  consumer_key:         process.env.TWITTER_API_KEY,
  consumer_secret:      process.env.TWITTER_API_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
 


T.get('search/tweets', { q: 'Rihanna since:2021-09-25', count: 10 }, (err, data, response)=>{
  // console.log(data);
  for (var i = data.statuses.length - 1; i >= 0; i--) {
      tweets = tweets + JSON.stringify(data.statuses[i].text)+"<div></div><div></div>"
  }
  fs.writeFile("./tweetJSONs/rihanna.txt", JSON.stringify(data, null, "\t"), (err)=>{
    if (err) {
        console.log(err);
    }
  });
})

T.get('search/tweets', { q: 'redsox since:2021-01-25', geocode: '42,-71,100mi',count: 10}, (err, data, response)=>{
  // console.log(data);
  for (var i = data.statuses.length - 1; i >= 0; i--) {
      soxTweets = soxTweets + JSON.stringify(data.statuses[i].text)+"<div></div><div></div>"
  }
})


router.get('/', (req, res)=>{
    res.send("<h1>RIHANNA TWEETS</h1><div></div>"+tweets+"<div></div><h1>GO SOX</h1>" +soxTweets);
});

module.exports = router;

