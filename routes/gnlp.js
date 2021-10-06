var express = require('express'),
    router = express.Router();
require('dotenv').config();
const NLP = require('google-nlp')
const apiKey = process.env.GNLP_API_KEY;
let nlp = new NLP( apiKey );

var westSideStory =  "<h1>I feel pretty! Oh so pretty!</h1>";
var output = westSideStory + '<div></div>' + 'Sentiment: '



//Analyze sentiment from the text string

nlp.analyzeSentiment( westSideStory )
    .then((sentiment)=>{
        // console.log( 'Sentiment:', sentiment );
        output = output + JSON.stringify(sentiment.documentSentiment) + '<div></div>'
    })
    .catch(function( error ) {
        console.log( 'Error:', error.message );
    })

//	Default features if `features` param is omitted
const features = {
    syntax:    true,
    entities:  true,
    sentiment: true
}

router.get('/GNLP',(req, res)=>{
  res.send(output);
});

module.exports = router;

