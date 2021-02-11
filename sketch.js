var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backgroundColor = "pink";
var bgImg
function preload() {
bgImg = loadImage("bg.jpg");
}


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bgImg);

  
//remember to CALL play() here with some expression or condition
}
