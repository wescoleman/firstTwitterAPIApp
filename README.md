# firstTwitterAPIApp
messing around with twitter api

I used the twitter API to make a quick node js web app that would display tweets about specific people and also looked into finding tweets about keywords in specific areas (example: Redsox and Boston)

A large part of this was remembering how to set up the web app and figuring out the Twit library for node js

I used a file called .env to host all my api keys and secrets which are not posted here. there's a corresponding node library called dotenv which allows use of that file. once you install that dependency you can put your own environment variables into that file by writing APIKEY = "key_that_you_got_from_your_twitter_developer_account"

None of the dependency code (node modules)is uploaded so if you'd like to run it with your own key you'll have to have node and NPM installed (I recommend getting those through the NVM service if you're using the WSL system or I believe installing through homebrew is best if you're on a mac. once NPM and node are installed you should be able to run the command npm install in the main project folder to rebuild all the dependencies of the site

run the app by typing node app.js

I have it set so that localhost:1234 is the address that the data is displayed

There is also a json file output that outputs the entire rihanna query as a json file
