function generateScale(f) {

    let a = pow(2, (1 / 12));
    let scaleFreqs = [f * pow(a, 0), f * pow(a, 1), f * pow(a, 2)*2, f * pow(a, 3), f * pow(a, 4), f * pow(a, 5), f * pow(a, 6)*2, f * pow(a, 7)*2, f * pow(a, 8*3),f * pow(a, 9)*4, f * pow(a, 10)*2,f * pow(a, 11)*2];
    return scaleFreqs;
}

function gradientBackground(){
  let c1 = color(255);
  let c2 = color(63, 191, 191);
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}