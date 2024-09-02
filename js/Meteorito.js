var overlay = document.getElementById("Oscurecer");
setTimeout(function () {
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";

}, 10);


// Soltar chispas al rebotar, no crear estrellas con set timeout
var canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var unAltura = canvas.height/8,
    unAncho = canvas.width/8;


function crearFondo(){
  c.shadowBlur = 0;
  c.fillStyle = "rgba(0, 0, 0, .4)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  
  c.fillStyle="rgb(42,71,87)";
  c.beginPath();
  c.moveTo(0, unAltura * 6);
  c.lineTo(unAncho * 4, unAltura * 0.7);
  c.lineTo(unAncho * 6, unAltura * 6);
  c.lineTo(0, unAltura * 6);
  c.fill();
  c.closePath();

  c.fillStyle ="rgb(32,55,67)";
  c.beginPath();
  c.moveTo(0, unAltura * 8);
  c.lineTo(0, unAltura * 5);
  c.lineTo(unAncho * 1.5, unAltura * 2);
  c.lineTo(unAncho * 4, unAltura * 6);
  c.lineTo(unAncho * 6.5, unAltura * 3);
  c.lineTo(unAncho*8 , unAltura * 5);
  c.lineTo(unAncho*8, unAltura * 9);
  c.lineTo(0, unAltura * 8 );
  c.fill();
  c.closePath();

  c.fillStyle="rgb(26,44,54)";
  c.beginPath();
  c.moveTo(0, unAltura * 8);
  c.lineTo(0, unAltura * 6);
  c.lineTo(unAncho*1.9, unAltura *8);
  c.lineTo(unAncho*3.6, unAltura * 4);
  c.lineTo(unAncho*3.9, unAltura *3.3);
  c.lineTo(unAncho*4.2, unAltura * 8);
  c.lineTo(unAncho*6.5, unAltura *5);
  c.lineTo(unAncho*8, unAltura * 8);
  c.fill();
};


// Propiedades fijas
var velInicialX = 3,
    velInicialY = 0.1,
    cocienteRebote = 0.6,
    gravedad = 0.1,
    estrellas ={},
    indiceEstrellas = 0;

function Estrella(){
  this.radio = 5 + (Math.random() * 10);
  this.inicialX = this.radio + (Math.random() * (canvas.width - (this.radio*2)));
  this.inicialY = -100 + (Math.random() * - 500);
  this.x = this.inicialX;
  this.y = this.inicialY;
  this.velX = velInicialX;
  this.velY = velInicialY;
  this.life = 0;
  this.maxLife = 4;
  indiceEstrellas++;
  estrellas[indiceEstrellas] = this;
  this.id = indiceEstrellas;
};

Estrella.prototype.actualizar = function (){
  
  // Tiempo de vida
  if (this.life >= this.maxLife || this.radio <1.5){
      delete estrellas[this.id];
  }
  
  // Rebote en las paredes
  if (this.x + this.velX > canvas.width- this.radio ||
      this.x + this.velX < this.radio){
    this.velX = -this.velX;
  }
  
  // Rebote en el suelo 
  if (this.y + this.velY + this.radio > canvas.height ){
    this.velY = - this.velY * cocienteRebote;
    this.velX = this.velX * (cocienteRebote + 0.3);
    this.radio = this.radio * cocienteRebote;
    this.life++;
    // Llamar a funcion que suelte chispas
    for (var i = Math.round(Math.random() * 6); i<7; i++){
      // new Chispas(this.x, this.y);
    }
  }
  
  this.x += this.velX;
  this.y += this.velY;
  this.velY += gravedad;
};

Estrella.prototype.dibujar = function (){
  c.beginPath();
  c.fillStyle="white";
  c.shadowBlur = 20;
  c.shadowColor = "white";
  c.arc(this.x,this.y, this.radio, 0, Math.PI * 2, false);
  c.fill();
  this.actualizar();
}

function Chispas(inicialX, inicialY){
  this.x = inicialX;
  this.y = inicialY;
};


setInterval(()=>{new Estrella()}, 2000);

function animacion (){
  crearFondo();
  for (var i in estrellas){
    estrellas[i].dibujar();
  }
  requestAnimationFrame(animacion);
  // console.table(estrellas);
}
animacion();


addEventListener('click', function(value){
   
  let id;
  if(value.target.classList.value.length > 0){
      id = value.target.classList.value
  }else{
      id = value.target.id
  }

  switch (id) {
      case "botonFlecha"       : parrafos()       ; break;
      default:
          break;
  }
})
var indiText = 0;
var transicion = false;
function parrafos() {
  if (transicion == true) {
    return;
  }
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let text3 = document.getElementById("text3");
  console.log(indiText);
  if (indiText == 0) {
    text1.style.opacity = 0;
    transicion = true;
    let promesa1 = new Promise(function (resolve) {
      text1.addEventListener(
        "transitionend",
        function () {
          text1.style.display = "none";
          text2.style.display = "block";
          resolve();
        },
        {
          once: true,
        }
      );
    });
    promesa1.then(function () {
      setTimeout(() => {
        text2.style.opacity = 1;
        text2.addEventListener("transitionend", function () {
          indiText++;
          transicion = false;
        });
      }, 20);
    });
    return;
  }
  if (indiText == 1) {
    text2.style.opacity = 0;
    transicion = true;
    let promesa1 = new Promise(function (resolve) {
      text2.addEventListener(
        "transitionend",
        function () {
          text2.style.display = "none";
          text3.style.display = "block";
          //console.log("1")
          resolve();
        },
        {
          once: true,
        }
      );
    });
    promesa1.then(function () {
      // console.log("2")
      setTimeout(() => {
        text3.style.opacity = 1;
        text3.addEventListener("transitionend", function () {
          indiText++;
          transicion = false;
        });
      }, 20);
    });
  }
}
window.addEventListener('load', function() {
  document.getElementById("music1").volume = 0.5
  document.getElementById("music1").play()
});