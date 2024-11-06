
function setup() {
  createCanvas(500, 500);
  background(6, 110, 153);

  
  // Creating a circle with radial lines
  let radialCircle1 = new RadialLinesCircle(215, 30,135/2, 35, '#bfe0f0', 35); // Radius of 35 vacated in the centre
  let radialCircle2 = new RadialLinesCircle(140, 330,135/2, 35, '#bfe0f0', 35);
  radialCircle1.draw();
  radialCircle2.draw();


  // circles
  let circle1 = new ConcentricCircles(65, 70, 135, 80, 5, '#272b5f', '#bfe0f0');
  let circle2 = new ConcentricCircles(175, 180, 135, 80, 5, '#159439', '#e3f2ef');
  let circle3 = new ConcentricCircles(290, 290, 135, 80, 5, '#dd3d4f', '#fff6fa');
  let circle4 = new ConcentricCircles(400, 400, 135, 80, 5, '#15438a', '#F4C54C');
  let circle5 = new ConcentricCircles(510, 510, 135, 80, 5, '#774E41', 'orange');
  
  let circle6 = new ConcentricCircles(330, 140, 135, 80, 5, '#c093c3', '#fab632');
  let circle7 = new ConcentricCircles(440, 250, 135, 80, 5, '#f07e35', '#f2f8f6');
  
  let circle8 = new ConcentricCircles(370, -10, 135, 80, 5, '#e4271e', '#fceae6');
  let circle9 = new ConcentricCircles(480, 100, 135, 80, 5, '#22315b', '#f6af4f');
  
  let circle10 = new ConcentricCircles(20, 220, 135, 80, 5, '#004985', '#f5b423');
  let circle11 = new ConcentricCircles(250, 440, 135, 80, 5, '#cd1a52', '#f8b66a');
  
  let circle12 = new ConcentricCircles(-10, 370, 135, 80, 5, '#009d90', '#daeef3');
  let circle13 = new ConcentricCircles(100, 480, 135, 80, 5, '#e52929', '#fdfdfd');

  // Draw the circle
  circle1.draw();
  circle2.draw();
  circle3.draw();
  circle4.draw();
  circle5.draw();
  circle6.draw();
  circle7.draw();
  circle8.draw();
  circle9.draw();
  circle10.draw();
  circle11.draw();
  circle12.draw();
  circle13.draw();

  // Punti per il secondo codice
  const points = [
    [4, 136], [95, 157], [137, 96], [136, 4], [97, 243], [242, 118],
    [264, 202], [305, 55], [356, 224], [201, 264], [53, 305], [75, 396],
    [0, 296], [162, 419], [183, 500], [224, 356], [316, 377], [336, 463],
    [422, 484], [489, 423], [540, 440], [462, 337], [376, 316], [500, 300],
    [418, 162], [396, 76], [458, 12], [500, 21], [296, 0], [500, 182],
    [0, 28], [25, -10], [6, 458], [40, 540], [300, 500]
  ];

  // Connetti punti con distanza <= 108
  connectPoints(points, 108);
  
  // Genera ellissi casuali nei punti
  generateRandomEllipses(points);
}

// Funzioni ausiliarie

function connectPoints(points, maxDistance) {
  points.forEach((start, i) => {
    points.forEach((end, j) => {
      if (i < j) {
        const distance = calculateDistance(...start, ...end);
        if (distance <= maxDistance) {
          drawConnection(start, end, distance);
        }
      }
    });
  });
}

function drawConnection(start, end, distance) {
  const angle = calculateAngle(...start, ...end);
  let radiusX = (distance - 12) / 6;
  let radiusY = 3;

  push();
  translate(start[0], start[1]);
  rotate(radians(angle));
  for (let i = 0; i < 3; i++) {
    createEllipse((12 + 6 + 2 * radiusX * i), 0, radiusX, radiusY);
  }
  pop();
}

function generateRandomEllipses(points) {
  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];

    let w = random(15, 20);
    let h = random(15, 20);
    let angle = random(-PI / 9, PI / 9);

    push();
    translate(x, y);
    rotate(angle);

    stroke(232, 120, 15);
    strokeWeight(3);
    fill(0);
    ellipse(0, 0, w, h);

    noStroke();
    fill(255);
    ellipse(0, 0, w / 3, h / 3);

    pop();
  }
}

function calculateDistance(x1, y1, x2, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

function calculateAngle(x1, y1, x2, y2) {
  const deltaY = y2 - y1;
  const deltaX = x2 - x1;
  const angleRadians = Math.atan2(deltaY, deltaX);
  return angleRadians * (180 / Math.PI);
}


function createEllipse(xPos, yPos, radiusX, radiusY) {
  fill(random(255), random(255), random(255));
  stroke('orange');
  strokeWeight(2);
  ellipse(xPos, yPos, radiusX * 2, radiusY * 2);
}

// class for circles
class ConcentricCircles {
  constructor(x, y, outerDiameter, innerDiameter, numCircles, dotColor, fillColor) {
    this.x = x;
    this.y = y;
    this.outerDiameter = outerDiameter;
    this.innerDiameter = innerDiameter;
    this.numCircles = numCircles;
    this.dotColor = dotColor;
    this.fillColor = fillColor;
    this.diameterStep = (outerDiameter - innerDiameter) / (numCircles - 1);
  }

  draw() {
    // Disegna il cerchio centrale con riempimento
    noStroke();
    fill(this.fillColor);
    circle(this.x, this.y, 140);
    
    // Disegna i cerchi concentrici
    for (let i = 0; i < this.numCircles; i++) {
      let currentDiameter = this.outerDiameter - i * this.diameterStep;
      this.drawDashedCircle(this.x, this.y, currentDiameter, 6, this.dotColor, 2); 
    }
  }

  drawDashedCircle(x, y, diameter, dotSize, lineColor, spacing) {
    stroke(lineColor);
    noFill();

    let radius = diameter / 2;
    let circumference = TWO_PI * radius;
    let numDots = floor(circumference / (dotSize + spacing));

    for (let i = 0; i < numDots; i++) {
      let angle = map(i, 0, numDots, 0, TWO_PI);
      let xDot = x + radius * cos(angle);
      let yDot = y + radius * sin(angle);

      fill(lineColor);
      noStroke();
      circle(xDot, yDot, dotSize);
    }
  }
}



class RadialLinesCircle {
  constructor(x, y, outerRadius, numLines, color, innerRadius) {
    this.x = x;
    this.y = y;
    this.outerRadius = outerRadius;
    this.numLines = numLines;
    this.color = color;
    this.innerRadius = innerRadius; // Radius of the vacated area in the centre
  }

  draw() {
    // Drawing an external circle
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.outerRadius * 2);
    
      // Calculate the angle increment for each point
    let angleStep = TWO_PI / this.numLines;
    
     // Store all outer and inner points
    let outerPoints = [];
    let innerPoints = [];
    
    
    // Drawing Radial Lines
    stroke('#ec5800'); // line colour
    strokeWeight(3);
    for (let i = 0; i < this.numLines; i++) {
      let angle1 = map(i, 0, this.numLines, 0, TWO_PI);
      let x1 = this.x + cos(angle1) * this.outerRadius;
      let y1 = this.y + sin(angle1) * this.outerRadius;
      line(this.x, this.y, x1, y1);
      
        let angle2 = i * angleStep;
      let xOuter = this.x + cos(angle2) * this.outerRadius;
      let yOuter = this.y + sin(angle2) * this.outerRadius;
      let xInner = this.x + cos(angle2) * this.innerRadius;
      let yInner = this.y + sin(angle2) * this.innerRadius;
      
      outerPoints.push({x: xOuter, y: yOuter});
      innerPoints.push({x: xInner, y: yInner});
    }
    
     // Drawing Radial Zigzag Lines
    stroke('#ec5800');
    strokeWeight(3);
    for (let i = 0; i < this.numLines; i++) {
      let nextIndex = (i + 1) % this.numLines;  // Guaranteed Loop Connection

      // Connect the current outer point to the next inner point.
      line(outerPoints[i].x, outerPoints[i].y, innerPoints[nextIndex].x, innerPoints[nextIndex].y);
    }

    // Draw a blank area in the centre
    fill(6, 110, 153); // background colour
    noStroke();
    ellipse(this.x, this.y, this.innerRadius * 2); // Empty area in the centre
  }
}