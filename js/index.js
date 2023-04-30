
function insertPetalos(){
    let girasol = document.getElementsByClassName('girasol')[0];
    for (let i = 0; i < 48; i++) {
        girasol.innerHTML += '<div class="petalo"> <div class="petalo-curvo"></div> </div>'
    }
    girasol.innerHTML += `
    <div class="centro" style="left: 165.2px;">
    <div class="centroText">Tú</div>
    </div>
    `
    AnimacionAire();
}
function insertPasto(){
    const style = document.createElement('style');
    document.head.appendChild(style);

    let pasto = document.getElementById('jardin');
    let indiceTmp = 0;
    let altura = 9;
    for (let i = 0; i < 196; i++) {
        pasto.innerHTML += '<div class="pasto"></div>'
        let rotacionPasto = Math.floor(Math.random() * 65);
        let modifiPasto = Math.floor(Math.random() * (45 - 25 + 1) + 25);
        if(i <= 96){
            if (indiceTmp == 0) {
                document.getElementsByClassName('pasto')[i].style.left =   -14 + "px";
            }else if( indiceTmp == 1){
                document.getElementsByClassName('pasto')[i].style.left =   0 + "px";
            }else {
                document.getElementsByClassName('pasto')[i].style.left =  14 * (indiceTmp - 1) + "px";
            }
        }else{
            document.getElementsByClassName('pasto')[i].style.bottom =   3 + "px";
            document.getElementsByClassName('pasto')[i].style.zIndex =   -1 ;
            if (i == 97) {
                document.getElementsByClassName('pasto')[i].style.left =   (-14)-altura + "px";
            }else if( i == 1){
                document.getElementsByClassName('pasto')[i].style.left =   0-altura + "px";
            }else {
                document.getElementsByClassName('pasto')[i].style.left =  (14 * (indiceTmp -1))-altura + "px";
            }
        }
        document.getElementsByClassName('pasto')[i].style.transform =   'skew('+modifiPasto+'deg) rotate('+rotacionPasto+'deg)';
        let rule =`
        @keyframes movimiento`+i+` {
          0% {
            transform: skew(`+modifiPasto+`deg) rotate(`+rotacionPasto+`deg);
          }
          100% {
            transform: skew(`+(modifiPasto/2)+`deg) rotate(`+(rotacionPasto/2)+`deg);
          }
        }
      `
         const sheet = style.sheet;
        sheet.insertRule(rule, sheet.cssRules.length);
        document.getElementsByClassName('pasto')[i].style.animationName = "movimiento"+i;
        document.getElementsByClassName('pasto')[i].style.animationDuration = "3s";
   
        document.getElementsByClassName('pasto')[i].style.animationDirection = "alternate";
        document.getElementsByClassName('pasto')[i].style.animationIterationCount = "infinite"; 
        indiceTmp ++ ;
        if(i == 96){indiceTmp = 0}
    }
    
}
insertPasto()
insertPetalos()

function AnimacionAire(){
    let petalos = document.getElementsByClassName('petalo-curvo');
    for (let index = 0; index < petalos.length; index++) {
        
        petalos[index].style.animationName = "moving";
        petalos[index].style.animationDuration = "8s";
        petalos[index].style.animationDirection = "alternate";
        petalos[index].style.animationIterationCount = "infinite"; 
    }
     
}
function parrafos(a) {
    for (let index = 0; index < document.getElementsByClassName('borbuja').length; index++) {
        
        if(index != a){
            document.getElementsByClassName('borbuja')[index].classList.remove('activa');
            setTimeout(() => {
                document.getElementsByClassName('borbuja')[index].style.display = 'none'
            }, 300);
        }
    }
    if(document.getElementsByClassName('borbuja')[a].classList[1] == 'activa'){
        document.getElementsByClassName('borbuja')[a].classList.remove('activa');
        setTimeout(() => {
            document.getElementsByClassName('borbuja')[a].style.display = 'none'
        }, 300);
    }else{
        document.getElementsByClassName('borbuja')[a].style.display = 'block'
        document.getElementsByClassName('borbuja')[a].classList.add('activa');
        
    }
}
// Crear una nueva hoja de estilo


// Agregar una regla de animación a la hoja de estilo


