var Twit = require('twit'),
    fs = require('fs'),
    express = require("express"),
    app = express(),
    toDisplay;


require('dotenv').config();

app.use(express.static('public'));
 
var T = new Twit({
  consumer_key:         process.env.TWITTER_API_KEY,
  consumer_secret:      process.env.TWITTER_API_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
 


T.get('search/tweets', { q: 'Rihanna since:2021-09-25', count: 10 }, function(err, data, response) {
  console.log(data);
  toDisplay = JSON.stringify(data.statuses.text, null, "\t");
  fs.writeFile("rihanna.json", JSON.stringify(data, null, "\t"), function(err) {
    if (err) {
        console.log(err);
    }
  });
})





app.get('/', function(req, res) {
    res.send('There is a json file with tweets about rihanna in it');
});

app.listen(process.env.PORT || 1234, function() {
    console.log("server is running on localhost:1234");
});