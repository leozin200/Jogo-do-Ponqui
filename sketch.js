//variaveis da bolinha

let xBolinha =300
let yBolinha =200
let diametro =30
let raio = diametro/2

//variaveis da velocidade
let velocidadexBolinha =6
let velocidadeyBolinha =6

//variaveis da minha raquete
let xminhaRaquete = 20;
let yminhaRaquete = 150;
let larguraminhaRaquete = 10;
let alturaminhaRaquete = 100;


//função dimenção do fundo

function setup() {
  createCanvas(600, 400);
}

// função desenhar

function draw() {
  background(173,216,2200);
  bolinha ();
  minhaRaquete();
}
  function bolinha(){
    circle(xBolinha, yBolinha, diametro)
xBolinha+=velocidadexBolinha;
yBolinha+=velocidadeyBolinha;
if (xBolinha>width || xBolinha -raio <0){
  velocidadexBolinha *= -1 }
if(yBolinha+ raio> height || yBolinha -raio <0){
  velocidadeyBolinha *=-1}
   
  }

//funçao da minha raquete
function minhaRaquete(){
rect(xminhaRaquete , yminhaRaquete, larguraminhaRaquete, alturaminhaRaquete);  
  if(keyIsDown(UP_ARROW))
    yminhaRaquete -= 10
 if(keyIsDown(DOWN_ARROW))
    yminhaRaquete += 10
    
  }
