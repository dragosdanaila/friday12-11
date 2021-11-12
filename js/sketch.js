var canvasSize =400 ;

function setup() {
    var canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent("p5container");
}

function draw() {

    var eyeX = map(mouseX, 0, 400, 135, 165);
    var eyeY = map(mouseY, 0, 400, 135, 165);
    console.log(mouseX, mouseY);

    
    


    background(220);

    strokeWeight(5);

    fill(250, 250, 0);
    ellipse(width/2 , height/2 , 300);

    //eyes

    fill(255);
    ellipse(eyeX, eyeY,45, 60);
    ellipse(eyeX + 100, eyeY ,45, 60);

    push();

    noStroke();   

    fill(255, 215, 0);
    ellipse (110, 220, 50);
    ellipse (290, 220, 50);


    pop();
    noFill();
    arc (200,220,180,180, radians(30), radians(150));




}