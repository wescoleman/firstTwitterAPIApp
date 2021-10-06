var chromScale,
    oscBalls,
    r,
    happy,
    sad,
    contemplative;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  gradientBackground();

  r = height * 0.4
  chromScale = generateScale(200);
  oscBalls = new Array(12);
  happy = false;
  sad = false;
  contemplative = false; 

  var startButton = document.getElementById('startBtn');
  var stopButton = document.getElementById('stopBtn');
  startButton.onclick = function() {
    for(var i = 0; i < 12; i++){
      var posVec = createVector(width/2 + r*cos(2*PI/12*i-PI/2),height/2 +r*sin(2*PI/12*i-PI/2));
      oscBalls[i] = new OscBall(chromScale, i,posVec);
    }
    loop();
    draw();
  }
  stopButton.onclick = function() {
    for(var i = 0;i<oscBalls.length; i++){  
      oscBalls[i].turnOff();
    }
    noLoop();
  } 
  noLoop();
}

function draw() {

  if(sentiData.documentSentiment.score >=0.2 ){
        happy = true;
  }
  else if(sentiData.documentSentiment.score <= -0.2 ){
    sad = true;
  }
  else{
    contemplative = true;
  }
  for(var i = 0; i < 12; i++){
    oscBalls[i].display();
  }
  
  if(happy){
    for(var i = 0;i<oscBalls.length; i++){
      if(i==0||i==4||i==7){
        oscBalls[i].turnOn();
      }
      else{
        oscBalls[i].turnOff();
      }
      happy = false;
    }
  }
  
  if(sad){
    for(var i = 0;i<oscBalls.length; i++){
      if(i==0||i==3||i==7){
        oscBalls[i].turnOn();
      }
      else{
        oscBalls[i].turnOff();
      }
      sad = false;
    }
  }
  
  if(contemplative) {
    for(var i = 0;i<oscBalls.length; i++){
      if(i==0||i==5||i==10){
        oscBalls[i].turnOn();
      }
      else{
        oscBalls[i].turnOff();
      }
      contemplative = false;
    }
  }
}

