/* ejemplo de numero secreto

let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}

*/

/* ejemplo de alert
alert ('¡Bienvenida y bienvenido a nuestro sitio web!');
*/

/*
let nombre = "Luna";
*/

/*
let edad = 25;
*/

/*
let numeroDeVentas = 50;
*/

/*
let saldoDisponible = 1000;
*/

/*
alert ('"¡Error! Completa todos los campos"');
*/

/* ejemplo de una variable en alert
mensajeDeError = ('"¡Error! Completa todos los campos (variable)"');

alert (mensajeDeError);
*/

/* ejemplo de solicitar nombre
let nombre = prompt('Cual es tu nombre:');
*/




/* ejemplo de si eres mayor o menor de edad

let edad = prompt('Cual es su edad:');

console.log(edad);

if (edad >= 18 ) {
    console.log(edad);
    alert ('"¡Puedes obtener tu licencia de conducir!".');
} else {
    alert ('¡Eres menor de edad!');
    console.log(edad);
}

*/


/*ejemplo de player 1 funcionando */

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
let name = prompt("Enter a new name");
para.textContent = "Player 1: " + name;
}

/*
return (updateName);


let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor");

 alert ("Hola Mundo");

console.log (numeroUsuario);

if (numeroUsuario == numeroSecreto){
    alert('Acertaste el número');
}

*/