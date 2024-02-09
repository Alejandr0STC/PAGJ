

let tierra =  document.getElementsByClassName("tierra2")[0];
let count = 0;
let planetaTierra = document.getElementsByClassName("tierra3")[0];

tierra.addEventListener('animationiteration', () => {
    console.log('Se completó una iteración de la animación.');
    if (count === 0) { 
        tierra.style.zIndex = "2";
    }
    count++;
    if(count === 2)
    {
        tierra.style.zIndex = "-1";
        count = 0;
    }
    if(tierra.style.zIndex == -1)
    {
        planetaTierra.style.width = "2em"; 
        planetaTierra.style.height = "2em"; 
    }else{
        planetaTierra.style.width = "3em"; 
        planetaTierra.style.height = "3em"; 
    }
});
window.addEventListener('load', function() {
    document.getElementById("music1").volume = 0.5
    document.getElementById("music1").play()
});
var overlay = document.getElementById("Oscurecer");

setTimeout(function () {
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
}, 10);