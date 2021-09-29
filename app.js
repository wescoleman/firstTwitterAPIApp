var express = require("express"),
    app = express();
require('dotenv').config();


var gnlpRoute = require('./routes/gnlp'),
    twitterRoute = require('./routes/twitterRoute');


app.use(express.static('public'));
app.use(gnlpRoute);
app.use(twitterRoute);
 

app.listen(process.env.PORT || 1234, ()=>{
    console.log("server is running on localhost:1234");
});