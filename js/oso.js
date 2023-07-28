function corazonStyle(){
    let i = 1;
    let px = '296px'
    while(i < 4){
        document.getElementsByClassName("corazon")[2 + i].style.left = "-101px";
        if(i == 3 ){ px = '299px'}
        
        document.getElementsByClassName("txtHeart")[2 + i].style.right = px;
        i++
    }
}
corazonStyle()
addEventListener('click', function(value){
    
    let id;
    let text;
    if(value.target.classList.value.length > 0){
        id = value.target.classList.value
    }else{
        id = value.target.id
    }
    if(id == "corazon")
    {  
        console.log(value.target.attributes[2].value)
        text = value.target.attributes[2].value;
    }
    switch (id) {
        case "textoOSO": mentiris(); break;
        case "corazon": palabritas(text); break;
        default: cerrarModales();
            break;
    }
})
function cerrarModales()
{
    let modalHeart = document.getElementById("corazondeletras");
    modalHeart.style.opacity = "0";
    setTimeout(function () {
        
    modalHeart.style.display = "block";
    }, 10);
}
function mentiris(){
    document.getElementById("music1").volume = 0.5
    document.getElementById("music1").play()
    i = 0 
    while(i < 6){
        document.getElementsByClassName("paloMaestro")[i].style.transform = "rotate(180deg)";
        i++;
    }
    document.getElementsByClassName("textoOSO")[0].getElementsByTagName("p")[0].textContent =  "Bueno una cosa"
}
function palabritas(text){
    let textoFinal ;
    let textoFinalT ;
    if(text == "1"){ 
        textoFinalT = "Mi Amor"
        textoFinal = "Cada dia contigo es un dia mas feliz, eres el amor de mi vida y siempre lo seras, quiero darte todo de mi y mas, quiero este amor para siempre."
    }
    if(text == "2"){
        textoFinalT = "Mi Niña"
        textoFinal = "La niña de mis ojos, te tengo siempre en el corazon, esos ojitos, esos cachetitos que tanto adoro apachurrar, nunca cambies."
    }
    if(text == "3"){
        textoFinalT = "Mi Princesa"
        textoFinal = "Que seria mi mundo sin la princesa que lo gobierna, que seria de mi sino cuidaras mi corazon."
    }
    if(text == "4"){
        textoFinalT = "Mi Chikita"
        textoFinal = "Tan pequeña y tan grande, me enseñas cada dia que tu amor es el mas grande de este mundo y yo solo lo quiero por siempre."
    }
    if(text == "5"){
        textoFinalT = "Mi Esposa"
        textoFinal = "Mi futuro y mi presente eres tu, quiero tener una vida a tu lado, con cualquier titulo pero nunca dejandonos de amar, siempre siendo tu y yo."
    }
    if(text == "6"){
        textoFinalT = "Mi Todo"
        textoFinal = "Este mundo no tiene sentido, no tiene forma pero siempre tu le das sentido a esta locura que nos rodea, te amo y gracias por hacer que valga la pena vivir."
    }
    let modalHeart = document.getElementById("corazondeletras");
    modalHeart.style.display = "block";
    document.getElementById("TituloText").textContent = textoFinalT;
    document.getElementById("textoMHeart").textContent = textoFinal;

    setTimeout(function () {
        modalHeart.style.opacity = "1";
    }, 10);
    
  
}
//width: 500px; valor del corazon modal
var overlay = document.getElementById("Oscurecer");
if(window.innerWidth >= 1050)
{
    setTimeout(function () {
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }, 10);
}
else{
    document.getElementById("errorpantalla").style.visibility = "visible";
}