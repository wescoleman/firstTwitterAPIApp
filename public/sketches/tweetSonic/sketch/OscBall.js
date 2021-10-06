function OscBall(cScale, degree, position) {
  
  this.note = cScale[degree];
  this.scaleDegree = degree;
  this.amplitude = 0;
  this.pos = position ;
  this.ellipseWidth = 50;
  this.ellipseHeight = 50;
  this.c = 120;

  this.lfo = new p5.Oscillator('sine');
  this.osc = new p5.Oscillator('triangle');
  this.filt = new p5.LowPass();
  this.reverb = new p5.Reverb();  
  //  LFO to control volume
  this.lfo.start();
  this.lfo.freq((1-this.scaleDegree)/20);
  this.lfo.amp(0);
  //  triangle wave oscillator
  this.osc.start();
  this.osc.amp(0);
  //  apply filter
  this.osc.freq(this.note);
  this.filt.freq(this.note * 3);
  this.filt.process(this.osc);
  // reverb
  this.reverb.process(this.osc,10);
  this.reverb.drywet(0.8);

  

  if(this.scaleDegree == 0){
    this.lfo.amp(0.2,1);
    this.osc.amp(this.lfo);
    this.c = color('hsla(160, 100%, 50%, 0.5)');
  }
  else{
    this.osc.amp(0);
  }
  
  this.turnOn = function(){
    this.lfo.amp(0.2, 0.9);
    this.osc.amp(this.lfo,0.9); 
    this.c = color('hsla(160, 100%, 50%, 0.5)');
  }
  this.turnOff = function(){
    this.lfo.amp(0, 0.9);
    this.osc.amp(this.lfo,0.9);
    this.c = 120;
  }
  
  this.display = function() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.ellipseWidth, this.ellipseHeight);
  }
}