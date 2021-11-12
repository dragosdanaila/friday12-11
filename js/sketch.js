var planet1Orbit=0;
var planet2Orbit=0;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(0);
    //sun
    translate(width/2,height/2);
    fill(240,240,10);
    ellipse(0,0,300);

    //planet1
    push();
    rotate(planet1Orbit);
    translate(280,0);
    fill(100,200,200);
    ellipse(0,0,100);

    //planet2
    push();
    rotate(planet2Orbit);
    translate(90,0);
    fill(100,0,115);
    ellipse(0,0,30);

    pop();
    pop();
    planet1Orbit = planet1Orbit+0.01
    planet2Orbit = planet2Orbit+0.05


}