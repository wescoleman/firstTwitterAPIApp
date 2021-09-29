# firstTwitterAPIApp
messing around with twitter api
# 1(a)
I used the twitter API to make a quick node js web app that would display tweets about specific people and also looked into finding tweets about keywords in specific areas (example: Redsox and Boston)

A large part of this was remembering how to set up the web app and figuring out the Twit library for node js

I used a file called .env to host all my api keys and secrets which are not posted here. there's a corresponding node library called dotenv which allows use of that file. once you install that dependency you can put your own environment variables into that file by writing APIKEY = "key_that_you_got_from_your_twitter_developer_account"

None of the dependency code (node modules)is uploaded so if you'd like to run it with your own key you'll have to have node and NPM installed (I recommend getting those through the NVM service if you're using the WSL system or I believe installing through homebrew is best if you're on a mac. once NPM and node are installed you should be able to run the command npm install in the main project folder to rebuild all the dependencies of the site

run the app by typing node app.js

I have it set so that localhost:1234 is the address that the data is displayed

There is also a json file output that outputs the entire rihanna query as a json file

# 1(b)
For the second part I added a routes folder to stay orginized and started messing around with the google NLP api in the second route /GNLP

These are asynchronous functions for sentiment analysis on text and it was fun to type in different texts and quotes to feel it out

due to their asynchronicity I was struggling to get the simple res.send() function to output to the page properly because I need to work with that in a synchronus manner instead. later on this may not be an issue as I might be dynamically updating HTML or something along those lines

In this code included the first line of I Feel Pretty from West Side Story and showed the sentiment analysis

I included a picture of the sentiment analysis of that line on the /GLNP page. the picture is in the "other files" folder
 
