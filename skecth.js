//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let raquete2Comprimento = 10;
let raquete2Altura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

let xRaquete2 = 580;
let yRaquete2 = 150;

let colidiu2 = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 mostraBolinha();
 movimentaBolinha();
 verificacaoBolinhaBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaMinhaRaquete2();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca()
  mostraraquete2();
}

function mostraBolinha (){
 circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificacaoBolinhaBorda(){
  if (xBolinha +raio > width || 
     xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha +raio > height ||
     yBolinha -raio < 0){
    
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraraquete2(){
  rect(xRaquete2, yRaquete2, raquete2Comprimento, raquete2Altura)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaMinhaRaquete2(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca (){
colidiu= collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}






