

// primera funcion que hacemos en JS


console.log("Hola mundoo!! DESDE UN ARCHIVO EXTERNO")
console.log("Hola mundoo!! DESDE UN ARCHIVO EXTERNO! 2")



/*
comentario
Declaracion de variables
*/

/*
console.log("La nueva variable resultado es igual a: ", resultado)
var nombre= prompt("Ingrese su nombre:");
document.write("El nombre ingresado es ", nombre)
*/


let numero = 5+10;
var nombre = "Arturo";
let booleano = true;
const pi = 3.1416;
var x;


resultado= nombre+numero;
nombre = 20;
console.log(numero);
console.log(nombre);
console.log(booleano);

console.log(typeof resultado);
console.log(typeof x)
console.log(typeof nombre);

console.log(typeof numero);

console.log(nombre);
console.log(pi);
console.log(x)

let nota = Number.parseInt(prompt("Ingrese su nota:"))

console.log("Su nota fue", nota)

if(nota>10 || nota < 0)
{
    console.log("Debe ingresar un numero entre 0 y el 10")
}
if(nota>=4 && nota < 7)
{
    console.log("Felicitaciones, has aprobado")
}
else if(nota >=7)
{
    console.log("Felicitaciones, promocionaste!!")
}
else
{
    console.log("Has desaprobado el examen")
}








