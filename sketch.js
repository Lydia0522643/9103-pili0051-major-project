let width = 500;
let height = 500;

function setup() {
  createCanvas(width, height);
  background(6, 110, 153); // Setting the blue background

  // Data on points
  const points = [
    [4, 136], [95, 157], [137, 96], [136, 4], [97, 243], [242, 118],
    [264, 202], [305, 55], [356, 224], [201, 264], [53, 305], [75, 396],
    [0, 296], [162, 419], [183, 500], [224, 356], [316, 377], [336, 463],
    [422, 484], [489, 423], [540, 440], [462, 337], [376, 316], [500, 300],
    [418, 162], [396, 76], [458, 12], [500, 21], [296, 0], [500, 182],
    [0, 28], [25, -10], [6, 458], [40, 540], [300, 500]
  ];

  // Connect all points with distance <= 108 and generate a random ellipse.

  connectPoints(points, 108);
  
  // Generate random ellipses at each point
  generateRandomEllipses(points);
}

// Function to connect points, only points with distance <= maxDistance are connected.
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

// Drawing Connection Lines and Ellipses
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

// Generate random ellipse
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

// Calculated Distance
function calculateDistance(x1, y1, x2, y2) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
}

// Calculate the angle
function calculateAngle(x1, y1, x2, y2) {
  const deltaY = y2 - y1;
  const deltaX = x2 - x1;
  const angleRadians = Math.atan2(deltaY, deltaX);
  return angleRadians * (180 / Math.PI);
}

// Creating random coloured ellipses

function createEllipse(inputXPos, inputYPos, inputRadiusX, inputRadiusY, inputR, inputG, inputB) {
  let outputXPos = inputXPos;
  let outputYPos = inputYPos;
  let outputRadiusX = inputRadiusX;
  let outputRadiusY = inputRadiusY;
  let outputColour = makeRGB(inputR, inputG, inputB); 

  fill(outputColour);
  stroke('orange');
  strokeWeight(2);
  
  // Drawing Ellipses
  ellipse(outputXPos, outputYPos, outputRadiusX * 2, outputRadiusY * 2);
}

// Generate random RGB colours
function makeRGB(redInputValue, greenInputValue, blueInputValue) {
  let redOutputValue = redInputValue ?? randomRoundedValue(255);
  let greenOutputValue = greenInputValue ?? randomRoundedValue(255);
  let blueOutputValue = blueInputValue ?? randomRoundedValue(255);
  return color(redOutputValue, greenOutputValue, blueOutputValue);
}


function randomRoundedValue(maxValue) {
  return Math.round(random(0, maxValue));
}
