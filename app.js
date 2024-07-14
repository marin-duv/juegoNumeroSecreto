/*

let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}

*/

alert ('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre = "Luna";

let edad = 25;

let numeroDeVentas = 50;

let saldoDisponible = 1000;

alert ('"¡Error! Completa todos los campos"');

mensajeDeError = ('"¡Error! Completa todos los campos (variable)"');

alert (mensajeDeError);

let nombreDeUsuario = prompt('Cual es tu nombre:');

nombreDeUsuario = nombre;

let edadDeUsuario = prompt('Cual es su edad:');

edadDeUsuario = edad;


if (edad >= 18 ) {
    alert ('"¡Puedes obtener tu licencia de conducir!".');
}

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}



let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor");

/* alert ("Hola Mundo");*/

console.log (numeroUsuario);

if (numeroUsuario == numeroSecreto){
    alert('Acertaste el número');
}