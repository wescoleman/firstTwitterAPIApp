var express = require("express"),
    app = express();
require('dotenv').config();
const path = require('path'); 


var gnlpRoute = require('./routes/gnlp'),
    twitterRoute = require('./routes/twitterRoute'),
    tweetSonicRoute = require('./routes/tweetSonic');


app.use(express.static('public'));

// set folder to find html ejs files
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(gnlpRoute);
app.use(twitterRoute);
app.use(tweetSonicRoute);
 

app.listen(process.env.PORT || 1234, ()=>{
    console.log("server is running on localhost:1234");
});