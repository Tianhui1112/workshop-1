# workshop-1
You can view the generated effect by visiting the following link:

[View Workshop 1 Effect](https://tianhui1112.github.io/workshop-1/)

## Overview
This project generates a 400x400 canvas where 10 triangles are drawn at random positions. The color and transparency of the triangles dynamically change over time, creating a vibrant, shifting pattern. Users can interact with the sketch by clicking the mouse, which changes the start and end colors of the gradient.


## Features: 
- Randomly positioned triangles drawn on the canvas. 
- Gradually changing colors using a sine wave to interpolate between two colors. 
- Dynamic transparency that changes over time. 
- Mouse interaction to update the gradient start and end colors.



## Project workflow

1.1: Canvas Creation
We begin by setting up the canvas and configuring the frame rate for the animation. This ensures that the canvas refreshes at 5 frames per second.

```javascript
function setup() { createCanvas(400, 400); // Create a 400x400 canvas 
background(220); // Set the background color to light gray (grayscale value 220) 
frameRate(5); // Set the frame rate to 5 frames per second 
// Initialize the gradient colors with random RGB values 
colorStart = color(random(255), random(255), random(255)); 
colorEnd = color(random(255), random(255), random(255));
```

1.2: Global Variables
Two global variables colorStart and colorEnd are initialized with random colors. These variables define the gradient's start and end colors, which will change over time.

```javascript
let colorStart; 
let colorEnd;
```

1.3: Dynamic Triangle Drawing

Inside the draw() function, we use a loop to draw 10 triangles at random positions. The color of each triangle is interpolated between colorStart and colorEnd, gradually shifting over time using the lerpColor() function. The transparency of the triangles is also dynamically adjusted based on the sine of the frameCount.
```javascript
function draw() {
  background(220);  // Refresh the background on each frame
  console.log(frameCount);  // Print the frame count to track the animation progress
  
  // Loop to draw 10 triangles at random positions
  for (let i = 0; i < 10; i++) {
    let x1 = random(width); 
    let y1 = random(height);
    let x2 = random(width); 
    let y2 = random(height); 
    let x3 = random(width); 
    let y3 = random(height); 

    // Interpolate between the start and end colors using sin and frameCount
    let lerpedColor = lerpColor(colorStart, colorEnd, (sin(frameCount * 0.1) + 1) / 2);
    
    // Calculate dynamic transparency using sin
    let transparency = (sin(frameCount * 0.1) + 1) * 128; 

    // Call the function to draw a single triangle with dynamic color and transparency
    drawSingleTriangles(x1, y1, x2, y2, x3, y3, lerpedColor, transparency);
  }
}

```


1.4: Drawing Single Triangle

The drawSingleTriangles() function is responsible for drawing a single triangle. It accepts the coordinates of the triangle vertices, the current color, and the alpha (transparency) value. The color is extracted from the interpolated value between colorStart and colorEnd, and the transparency changes over time using the sine wave.
```javascript
function drawSingleTriangles(x1, y1, x2, y2, x3, y3, fillColor, alphaValue) {
  fill(fillColor.levels[0], fillColor.levels[1], fillColor.levels[2], alphaValue); // Set fill color with transparency
  stroke(random(255));  // Random stroke color for each triangle
  triangle(x1, y1, x2, y2, x3, y3);  // Draw the triangle using the random coordinates
}

```
1.5: Mouse Interaction
When the mouse is pressed, the mousePressed() function is triggered. This function updates colorStart and colorEnd with new random colors, allowing the user to change the gradient's color range interactively.

```javascript
function mousePressed() {
  // Generate new random start and end colors for the gradient
  colorStart = color(random(255), random(255), random(255));
  colorEnd = color(random(255), random(255), random(255));
}

```
