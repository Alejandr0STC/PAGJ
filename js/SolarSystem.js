

let tierra =  document.getElementsByClassName("tierra2")[0];
let count = 0;


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
});
window.addEventListener('load', function() {
    document.getElementById("music1").volume = 0.5
    document.getElementById("music1").play()
});
var overlay = document.getElementById("Oscurecer");

setTimeout(function () {
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
}, 10);