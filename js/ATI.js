let  texto ={
    1: 'Crei que la vida ya no queria que siga...',
    2: 'me dejo claro que no era para mi...',
    3: 'pense que no sanaria nunca...',
    4: 'pero un dia llegaste a mi vida de golpe...',
    5: 'y supe que todo hiba mejorar...',
}
const typed = new Typed('.typed', {
	strings: [
		'<i class="verboYou" onchange="console.log("qasdas")">Crei que la vida ya no queria que siga...</i>',
		'<i class="verboYou"> me dejo claro que no era para mi...</i>',
		'<i class="verboYou">pense que no sanaria nunca...</i>',
		'<i class="verboYou">pero un dia llegaste a mi vida de golpe...</i>',
        '<i class="verboYou">y supe que todo hiba mejorar...</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 1, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
    onComplete:() => {imagenCambiante()}, // Función a callback, se ejecuta al terminar la animación
});


function TextoCambiante() {
    let textoid = document.getElementById('textos');
    
    let i = 1;
    while (i < 6) {
    
        setTimeout(() => {
            textoid.textContent = texto[i]; 
            i++;   
        }, 1000);  
    }

}
window.onload = setTimeout(() => {
    //TextoCambiante();
}, 1000);

function imagenCambiante() {
    
    document.getElementById("music1").volume = 0.5
    document.getElementById("music1").play()
   
    document.getElementsByClassName('texto')[0].style.visibility = "hidden" ;
   
    let i = 1;
    function cambiarImagen(){
        let imagenid = document.getElementById('imagen');
        imagenid.src = `../img/nosotros/imagen${i}.jpeg`;
        if(i == 9){
            imagenid.style.opacity ="0"
            setTimeout(() => {
                let texto = document.getElementsByClassName('texto')[0].style.visibility = "visible" ;
                document.getElementsByClassName("verboYou")[0].textContent = "Gracias por todo ❤️"
                
            }, 3000);
            return;
        }
        i++
    }

    setInterval(cambiarImagen, 500);
   
}



 