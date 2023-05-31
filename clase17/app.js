//Clase Personas pero utilizando el constructor
//(Recomentado para mas de un objeto igual)

class Persona {
    constructor(nombre, apellido , edad)
    {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    }
}
//Instanciamos a las personas que nosotros queramos

let persona1 = new Persona ("Arturo", "Gonzales", 30)
let persona2 = new Persona ("César", "Pumacayo", 19)
let persona3 = new Persona ("Allison", "Vasquez", 21)

console.log(persona1.nombre)

persona1.nombre = "Juan"

console.log(persona1.nombre)

console.log("Los nombres de las personas creadas son ", persona1.nombre+ " " + persona2.nombre+ " " +persona3.nombre)

// strings ----> Cadenas de texto

let cadena1 = "Esta es la mejor manera de definirlas"
let cadena2 = new String("Este metodo es menos utilizado")

//Redifinicion

console.log(cadena1)

cadena1 = "Esta es una modificacion de la cadena 1"

console.log(cadena1)

//Propiedad .lenght o largo de cadena

document.write(cadena2)
document.write("<br>La longitud de la cadena 2 es ", cadena2.length);
document.write("<br>En la posicion 3 está la letra "+ cadena2.charAt(2)) //0 1 2 AGARRA LA t = este Casesensitive

//upper case y lower case

 
// let nombre4= prompt("Ingrese un nombre: ")

// console.log(nombre4)

// document.write("<br>",nombre4, "<br>")
// document.write(nombre4.toLowerCase(), "<br>")
// document.write(nombre4.toUpperCase(), "<br>")

//Math
PI= 3.14

console.log(Math.abs(-15))

console.log(Math.max(1,10,50,2))

console.log(Math.max(PI))


// Math.round (redondea = 4,74 = 5)




//Arrays

//const Array o let Array

let letras= ["a", "e", "t"];

console.log(letras)
console.log(letras[0]) //Imprime el primer elemento "a"
console.log(letras.length) // 3
console.log(letras[10]) //undefined
console.log(letras[-2])


let numeros = [10,5,20,59];

document.write("Los elementos del array numeros son:<br>")
for(i=0;i<numeros.length;i++)
{
    document.write(numeros[i], "<br>")
}

numeros.push(1)
console.log(1,4,5,2)
console.log(numeros)

numeros.pop()
console.log(numeros)

//unshift
let frutas = ["naranja","manzana","uva"];
console.log(frutas)
frutas.unshift("pera", "anana")
console.log(frutas)


//shift eliminar y devolver el priner elemento del array

let frutaEliminada = frutas.shift()
console.log(frutaEliminada)
console.log(frutas)


console.log(frutas.sort()) // cambia naranaja y manzana de lugar
console.log(numeros.reverse()) // al revez 












