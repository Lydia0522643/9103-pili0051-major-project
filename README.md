# 9103-pili0051-major project
## Instructions on how to interact with the work
#### Move the mouse slowly over the screen and click on the centre of any of the circles. The Dot circles around that centre will start to rotate at a speed of 0.02 per frame, and the colours will gradually change with the angle of rotation. Click on the centre of the circle again to stop the rotation. You can click on the centres of multiple circles in turn to make their Dot circles rotate at the same time.
##  
## Details of my individual approach to animating the group code
- **I chose User Input and used the mouse to trigger the interaction effect.**
##
- **I controlled the DotCircle to vary its colour and state, which was different from the rest of my group.The properties that are animated and how they are animated.**
  - I modified the *class DotCircle* to define its initial angle and rotation state. The initial angle is 0 and it does not rotate in the initial state.
  - I modified *display ()* and used an *if* statement to indicate that if it is in a rotating state, the angle will be increased to achieve the rotating effect. *gradientColor* uses *lerpColor ()* to generate a dynamic gradient colour, changing the colour based on the rotation angle, with white as the final colour of the gradient. A sin function is used to generate a value that changes with the angle to create a dynamic gradient effect.
  - Add the *toggleRotation()* method to control the rotation state, and use *isMouseOver* to check whether the mouse is hovering over the circle.
  - Add the *function mousePressed()*, detect each DotCircle in the array, and detect the click area to switch the rotation state.
##
- **References to inspiration for animation**
![A gif](References/References(1).gif)
#### 
  - This GIF got me thinking that I could make the DotCircle rotate around the common centre of the concentric circles based on the group code.
#### 
![An image](References/References(2).jpg)
![A gif](References/References(3).gif)
#### 
  - This set of images and GIF inspired the gradient part of my code. The dots in the Image have different diameters, thus creating a balanced image, and the dots in the GIF smoothly change size as they rotate around the centre of the circle, thus achieving a dynamic effect. However, in my practice, I found that I could not make the size of the DotCircle to create a dynamic effect, and then I thought that I could change the colour of the DotCircle to make it achieve an approximate visual dynamic effect.
##
- **Technical explanation of my individual code**
  - In *class DotCircle*, initialise the angle value and the isRotating value, the initial rotation angle is 0, and isRotating is set to false by default, i.e. it does not rotate in the initial state.
  - In display(), if (this.isRotating) checks whether isRotating is true. If so, this.angle is increased by 0.02. Each time display() is called, the angle is increased, causing the figure to slowly rotate.
  - *let gradientColor* uses *lerpColor()* to generate a dynamic gradient colour based on the rotation angle. A sine function is used to generate a dynamic gradient effect. *sin(this.angle + i * 0.3)* generates an angle-dependent value, which is combined with *lerpColor* to generate a gradient from dotColor to white, simulating a dynamic effect that changes with rotation.
  - Add *toggleRotation() *method: Toggles the value of isRotating to control the rotation state. After each call, the value of isRotating toggles between true and false.
  - Add the *isMouseOver()* method: used to detect whether the mouse is hovering over a circle. The distance between the mouse position *(px, py)* and the centre of the circle is calculated using *dist(px, py, this.x, this.y)*. If the distance is less than the radius, the mouse is over the circle.
  - Add the *function mousePressed()*: *for (let circle of circles)* checks whether each circle is a DotCircle, and *circle.isMouseOver(mouseX, mouseY)* is used to check whether the current mouse position *(mouseX, mouseY)* is within the range of the DotCircle. If circle is a DotCircle and the mouse is within the bounds of the DotCircle, then *circle.toggleRotation()* is executed.
- I used the *lerpColor()* method outside the course, which can be found on the p5.js website. It is a colour interpolation function that is used to achieve a smooth transition between two colours, so it is very useful for me to create gradient effects. lerpColor requires three parameters: the starting colour, the target colour, and the amt. When amt=0, it returns the starting colour, and when amt=1, it returns the target colour. In my code, the starting colour is the current colour *this.dotColor*, and the target colour is white. A value that changes with the angle is generated using *sin(this.angle + i * 0.3)*, so that the colour smoothly transitions between *color(this.dotColor)* and *color(255)*, thereby creating a dynamic gradient effect.

 
