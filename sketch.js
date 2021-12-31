//creacion de sprites
var kaizer;
var piso1;

var pared1;

var techo1;

var pisos, techos, paredes;

function preload(){
  //creacion de grupos
  pisos = new Group();
  paredes = new Group();
  techos = new Group();

  //creacion del personaje principal
  kaizer = createSprite(50,300,10,10);
  //creacion de paredes,pisos,techos
  //1
  piso1 = createSprite(100,320,200,10);
  pared1 = createSprite(5,240,10,150);
  techo1 = createSprite(50,300,10,10);
  //2
  
}

function setup() {
createCanvas(2000,600);

}

function draw() {
background("black");

kaizer.velocityX = 0;
//camara
camera.position.x = kaizer.x + 800;
camera.position.y = kaizer.y;
//gravedad
if(kaizer.isTouching(pisos)){
  kaizer.velocityY = 0;
}else{
  kaizer.velocityY = 8;
}


if(keyDown("A")){
  kaizer.velocityX =  kaizer.velocityX-2;
}
if(keyDown("D")){
  kaizer.velocityX =  kaizer.velocityX+2;
}
if(keyWentDown("SPACE")){
  kaizer.y = kaizer.y-70;
  //kaizer.velocityY =  kaizer.velocityY-5;
}

kaizer.collide(paredes);
kaizer.collide(pisos);
kaizer.collide(techos);

pisos.add(piso1);
paredes.add(pared1);
techos.add(techo1);

  drawSprites();
}
