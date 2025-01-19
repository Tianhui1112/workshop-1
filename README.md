# workshop-1
You can view the generated effect by visiting the following link:

[View Workshop 1 Effect](https://tianhui1112.github.io/workshop-1/)

## Project Workflow

1. **Canvas Creation**:  
   - Created a 400x400 canvas with a background color of grayscale value 220.  
   - Used the built-in function `frameRate` to refresh the canvas at 5 frames per second.

2. **Global Variables**:  
   - Defined two global variables `colorStart` and `colorEnd`, and initialized their colors using `random`.

3. **Single Triangle Function**:  
   - Created a function to draw a single triangle, with inputs including vertex coordinates, shape color, and transparency.

4. **Multiple Triangles Function**:  
   - Defined a function that uses a `for` loop and `random` to draw 10 triangles at different positions.  
   - Utilized the built-in `lerpColor` function to update colors dynamically over time based on the global variables `colorStart` and `colorEnd`.

5. **Dynamic Transparency**:  
   - Used the built-in `frameCount` and the `sin` function to set transparency that changes over time.

6. **Mouse Interaction**:  
   - Used the built-in `mousePressed` function to update `colorStart` and `colorEnd` every time the mouse is clicked.

### Final Results
- The program draws 10 triangles at different positions with colors and transparency that change over time.  
- The canvas updates at 5 frames per second.  
- Clicking the mouse updates the colors of the triangles dynamically.
