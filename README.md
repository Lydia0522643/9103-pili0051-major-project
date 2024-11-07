# 9103-pili0051-major project
## Instructions on how to interact with the work
#### Move the mouse slowly over the screen and click on the centre of any of the circles. The Dot circles around that centre will start to rotate at a speed of 0.02 per frame, and the colours will gradually change with the angle of rotation. Click on the centre of the circle again to stop the rotation. You can click on the centres of multiple circles in turn to make their Dot circles rotate at the same time.
##  
## Details of my individual approach to animating the group code
#### I controlled the DotCircle to vary its colour and state, which was different from the rest of my group.
- I chose User Input and used the mouse to trigger the interaction effect.
- The properties that are animated and how they are animated
  - I modified the *class DotCircle* to define its initial angle and rotation state. The initial angle is 0 and it does not rotate in the initial state.
  - I modified *display ()* and used an *if* statement to indicate that if it is in a rotating state, the angle will be increased to achieve the rotating effect. *gradientColor* uses *lerpColor ()* to generate a dynamic gradient colour, changing the colour based on the rotation angle, with white as the final colour of the gradient. A sin function is used to generate a value that changes with the angle to create a dynamic gradient effect.
  - Add the *toggleRotation()* method to control the rotation state, and use *isMouseOver* to check whether the mouse is hovering over the circle.
  - Add the *function mousePressed()*, detect each DotCircle in the array, and detect the click area to switch the rotation state.
##
## References to inspiration for animation
![A gif](References/References(1))
#### This GIF got me thinking that I could make the DotCircle rotate around the common centre of the concentric circles based on the group code.
![An image](References/References(2))
![A gif](References/References(3))
#### This set of images and GIF inspired the gradient part of my code. The dots in the Image have different diameters, thus creating a balanced image, and the dots in the GIF smoothly change size as they rotate around the centre of the circle, thus achieving a dynamic effect. However, in my practice, I found that I could not make the size of the DotCircle to create a dynamic effect, and then I thought that I could change the colour of the DotCircle to make it achieve an approximate visual dynamic effect.
##
## Technical explanation of my individual code

