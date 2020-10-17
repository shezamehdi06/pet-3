var dog;
var database;
var position;
var foodStock;
var lastFed;

function preload(){
preload.image(dongmg.png);
preload.image(dogmg1.png);
}

function setup(){
    createCanvas(500,500);
    database=firebase.database ();
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";

var dogpositionref=database.ref('dog/position');
dogpositionref.on("value",readposition,showerror);
}

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  
  
  function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
  }
