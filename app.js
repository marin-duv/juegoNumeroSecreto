
// ejemplo de numero secreto
//******************************************************************************************

alert (`Bienvenido al juego del número secreto`);
//tema comentarios y else
// estas son las variables

let numeroSecreto = parseInt(Math.floor(Math.random()*10))+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;
console.log (numeroSecreto);

//loop while ; lazo de repeticion:
while (numeroUsuario != numeroSecreto) {
    //numeroSecreto = parseInt(numeroSecreto);
    console.log (typeof(`numero SECRETO ...... ${numeroSecreto}`));
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
    console.log(`Valor de intento: ${numeroUsuario}`);
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //acerto, fue verdadera la condicion
        // se utilizop templete strings
        // templete strings `texto: ${variable}`
        alert(`¡Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //condicionales anidadas
        if (numeroUsuario > numeroSecreto) {
            alert(`El numero secreto es menor`);
        } else {
            alert(`El numero secreto es mayor`);
        }
        //incrementamos el contador cuando la persona no acierta
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos ){
            alert (`LLegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //la condicion no se cumplio 
        //alert('Lo siento, No acertaste el número');
        //console.log(`Èl numero secreto era ${numeroSecreto}`);
    }
}
//******************************************************************************************


/*
//ejemplo while del 1 al 10 
let numero = 1;
while (numero <= 10 ) {
    console.log(`El número es: ${numero}`);
    numero ++;
}

*/

/*

//ejemplo while del 10 al 0 
let numero = 10;
while (numero >= 0 ) {
    console.log(`El número es: ${numero}`);
    numero --;
}

*/
/*
//ejemplo de cuenta regresiva numero gasta el 0
let numero = prompt(`Indica un número por favor: ` );
while (numero >= 0 ) {
    console.log(`El número es: ${numero}`);
    numero --;
}
*/

/*
//ejemplo de cuenta progresiva numero gasta el 0
let numeroMaximo = prompt("Indica un número por favor:");
let contador = 0;
while (contador <= numeroMaximo ) {
        console.log(`El número es: ${contador}`);
        contador ++;
}
*/



/*
//ejemplo buen fin de semana
let diaSemana = prompt ("Me indicas el dia actual, por favor:");
console.log(`dia de la semana :  ${diaSemana}`);
if ( diaSemana == "sabado" || diaSemana == "domingo") {
    alert(`¡Buen fin de semana! a`);
} else {
    alert(`¡Buena Semana!`);   
}
*/




/*
//ejemplo numero negativo
let numeroUsuario = prompt ( " Me indicas un número: ");
console.log(`numeroUsuario: ${numeroUsuario}`);

if (numeroUsuario >0  ){
    alert (`el numero es positivo`);
} else if (numeroUsuario < 0 ) {
    alert (`el numero es negativo`);
} else {
    alert (`El numero es CERO`);
}

*/


/*
//ejemplo de sistema de puntacion 

let puntacion = prompt ("me indicas tu puntacion");

if (puntacion >= 100) {
    alert (`Felicidases has ganado`);
} else {
    alert (`Intentalo nuevamente para ganar`);
}

*/

/*
//ejemplo saldo de cuenta bancaria con templete strings
let saldoActual = 15000;
alert(`Tu saldo actual es $ ${saldoActual}`);
*/

/*
//ejemplo de saludo con nombre 
let nombre = prompt (`Escribe tu nombre por favor : `);
alert(`Bienvenido a nuestro curso de JAVASCRIPT: ${nombre}`);
*/



/* 
//ejemplo de alert
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


/*ejemplo de player 1 funcionando 

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
let name = prompt("Enter a new name");
para.textContent = "Player 1: " + name;
}

*/

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