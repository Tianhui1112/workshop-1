let colorStart;
let colorEnd;

function setup() {
  createCanvas(400, 400);
  background(220); // Set the background to gray
  frameRate(5); // Set the frame rate to 5 frames per second
  
  // Initialize the gradient colors
  colorStart = color(random(255), random(255), random(255));
  colorEnd = color(random(255), random(255), random(255));
}

function draw() {
  background(220); // Refresh the background every frame
  console.log(frameCount);
  
  // Loop to draw multiple triangles at random positions
  for (let i = 0; i < 10; i++) {
    let x1 = random(width); 
    let y1 = random(height);
    let x2 = random(width); 
    let y2 = random(height); 
    let x3 = random(width); 
    let y3 = random(height); 

    // Gradually changing color over time
    let lerpedColor = lerpColor(colorStart, colorEnd, (sin(frameCount*0.1 ) + 1) / 2);
    let transparency = (sin(frameCount * 0.1) + 1) * 128; // Varying transparency over time

    // Call function to draw the triangle
    drawSingleTriangles(x1, y1, x2, y2, x3, y3, lerpedColor, transparency);
  }
}

// Define function to draw a single triangle
function drawSingleTriangles(x1, y1, x2, y2, x3, y3, fillColor, alphaValue) {
  fill(fillColor.levels[0], fillColor.levels[1], fillColor.levels[2], alphaValue); // Use gradient color and transparency
  stroke(random(255)); // Random stroke color
  triangle(x1, y1, x2, y2, x3, y3); // Draw the triangle
}

// Change gradient start and end colors randomly when the mouse is pressed
function mousePressed() {
  colorStart = color(random(255), random(255), random(255));
  colorEnd = color(random(255), random(255), random(255));
}