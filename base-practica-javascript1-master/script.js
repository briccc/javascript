import {barcelona, roma, paris, londres} from './ciudades.js';

let ciudades = document.querySelectorAll('a');
let tituloCiudad = document.getElementById('titulo');
let subtituloCiudad = document.getElementById('subtitulo');
let parrafoCiudad = document.getElementById('parrafo');
let precioCiudad = document.getElementById('precio');

ciudades.forEach(function(ciudad){
    ciudad.addEventListener('click', function(){

    //remueve la clase active de todos los elementos
    ciudades.forEach(function (ciudad){
        ciudad.classList.remove('active');
    })
    
    //agrega la clase active al elemento seleccionado
    this.classList.add('active');

    //obtener el contenido segun el enlace
    let contenido = obtenerCOntenido(this.textContent);

    //mostrar contenido en DOM
    tituloCiudad.innerHTML = contenido.titulo;
    subtituloCiudad.innerHTML = contenido.subtitulo;
    parrafoCiudad.innerHTML = contenido.parrafo;
    precioCiudad.innerHTML = contenido.precio;


    })
    })

function obtenerCOntenido(ciudad){
        let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }

    return contenido[ciudad];

}


