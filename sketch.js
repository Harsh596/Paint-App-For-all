var brush , slider;
function setup(){
   db = firebase.database();
   createCanvas(500,500);
  
   //background("white");
   brush = color(30);
  slider = createSlider(3,100,200);
  slider.position(200,200);
}

function draw(){
   //text("x : " + mouseX ,0,395 );  
   //text("y : " + mouseY , 0,405);
  const val = slider.value();
 if(mouseIsPressed) {
    if(mouseX <= 50){
        if(mouseY <= 50) {
         brush = color(0,0,255);
         } 
        else if(mouseY <= 100) {
            brush = color(255,0,0);
            } else if(mouseY <= 150) {
               brush = color(0,255,0);
               } else if(mouseY <= 200) {
                  brush = color(0,0,0);
                  } else if(mouseY<=250){
                     brush = color(255,255,255);
                  }
        }
        stroke(brush);
        strokeWeight(val);  
        line(mouseX,mouseY,pmouseX,pmouseY);
        }
        stroke(0);
        strokeWeight(3);
        fill(0,0,255);
        rect(0,0,50,50);
        fill(255,0,0);
        rect(0,50,50,50);
        fill(0,255,0);
        rect(0,100,50,50);
        fill(0,0,0);
        rect(0,150,50,50);
        fill(255,255,255);
        rect(0,200,50,50)
}




