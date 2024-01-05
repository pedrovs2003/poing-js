let xBall = 300
let yBall = 200
let diameter = 15
let ray = diameter / 2

let xRect = 5
let yRect = 150
let widthRect = 10
let heightRect = 90

let xRectOpponent = 585
let yRectOpponent = 150
let yOpponentSpeed

let xBallSpeed = 6
let yBallSpeed = 6

let myScore = 0
let OpponentScore = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  showBall()
  ballMovement()
  borderVerification()
  showRect(xRect, yRect)
  showRect(xRectOpponent, yRectOpponent)
  rectMovement()
  rectMovementOpponent()
  checkTouchRect()
  checkTouchRectOpponent()
  score()
  getGoal()
}

function showBall() {
  circle(xBall, yBall, diameter)
}

function showRect(x, y) {
  rect(x, y, widthRect, heightRect)
}
function ballMovement() {
  xBall += xBallSpeed
  yBall += yBallSpeed
}

function borderVerification() {
  if (xBall + ray > width || xBall - ray < 0) {
    xBallSpeed *= -1
  }

  if (yBall + ray > height || yBall - ray < 0) {
    yBallSpeed *= -1
  }
}

function rectMovement() {
  if (keyIsDown(UP_ARROW)) {
    yRect -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRect += 10
  }
}

function checkTouchRect() {
  if (xBall - ray < xRect + widthRect && yBall - ray < yRect + heightRect && yBall + ray > yRect) {
    xBallSpeed *= -1
  }
}

function checkTouchRectOpponent() {
  if (xBall + ray > xRectOpponent + widthRect && yBall - ray < yRectOpponent + heightRect && yBall + ray > yRectOpponent) {
    xBallSpeed *= -1
  }
}

function rectMovementOpponent() {
    //MULTYPLAYER
  // if (keyIsDown(87)) {
  //   yRectOpponent -= 10
  // }
  // if (keyIsDown(83)) {
  //   yRectOpponent += 10
  // }

  //SINGLEPLAYER
  yOpponentSpeed = yBall - yRectOpponent - widthRect / 2 - 30
  yRectOpponent += yOpponentSpeed
}

function score() {
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(myScore, 170, 26)
  fill(color(255, 140, 0))
  rect(430, 10, 40, 20)
  fill(255)
  text(OpponentScore, 450, 26)
}

function getGoal() {
  if (xBall > 590) {
    myScore += 1
  }
  if (xBall < 10) {
    OpponentScore += 1
  }
}