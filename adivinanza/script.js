let numRandom = Math.floor(Math.random()*100 + 1);

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');

let intento = document.getElementById('intento');
let intentos = 0;

function checkearResultado(){
    intentos++;

    intento.textContent = intentos; 

    let numeroEntrada = parseInt(document.getElementById('numeroEntrada').value);

    if(numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada) ){
        mensaje.textContent = 'Ingrese un numero valido';
        mensaje.style.color = 'red';   
        return;
    } 

    if (numeroEntrada == numRandom){
        mensaje.textContent = 'Ganaste';
        mensaje.style.color = 'green';
    }else if(numeroEntrada > numRandom){
        mensaje.textContent = 'El numero es menor';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El numero es mayor';
        mensaje.style.color = 'red';
    }
}
