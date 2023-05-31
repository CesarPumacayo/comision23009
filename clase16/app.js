
//declaracion de una funcion
function mensaje(){
    alert("Hola mundo!!!")
}


//invocar a la funcion

//mensaje();

//Function regular

function cuadrado(x){
    return x*x
}

function sumar(n1,n2){
    return n1+n2
}

console.log(cuadrado(3))
console.log(sumar(2,2))


//Function arrow o flecha

let cuadrado2 = x => x*x;
let sumar2= (n1,n2) => n1 + n2;

console.log(cuadrado2(3))
console.log(sumar(3,2))

//scope o alcances locales y globales
var name1 = "Arturo";

console.log(name1);
function nombre(){
    console.log(name1);
}

nombre();
console.log(name1)

var a = 10;
var b = 11;

if(a == 10){

    var a= 9; //El alcance es global, sobre escribe al 10
    let b= 15 //EL alcance es local, solamente vale 15 dentro de la funcion
    console.log(a);
    console.log(b);

}
console.log(a);// cambia por el valor dentro de la funcion
console.log(b);//Se mantiene el valor previo a la funcion

//Callbacks
function saludar(nombre2){
    console.log("El nombre es: ", nombre2)
}

function pedirNombre(Callbacks){
    var nombre2= prompt("Ingrese su nombre de usuario: ")
    Callbacks(nombre2);
}

pedirNombre(saludar);


//CLASE 16: NUEVO METODOS PARA LLAMAR OBJETOS


//Objetos, creacion y uso

//Creación de un objeto ------> literal

let perro = {
    nombre: "Firulais",
    edad: 22,
    color: "Negro",
    imagen: "link a imagen",

}

console.log(perro);
console.log(perro.nombre);

//Modificar las propiedades del objeto

perro.nombre = "Juancito";
console.log(perro);

console.log("El nombre de mi perro es: ", perro.nombre)

//Creacion con new Object

let auto = new Object()

//Una vez creado el objeto puedo empezar a crear las propiedades

auto.marca= "Ford"
auto.modelo= 2010
auto.color= "azul"

console.log(auto);


document.write("Mi auto es de marca ",auto.marca ," del año ", auto.modelo, " y de color ", auto.color);



//un nuevo objeto

let gato = {nombre:"coquito", edad:2,color:"Naranja"}

//Mostrar y modificar las propiedades usando corchetes

console.log("El nombre de mi gato es ", gato["nombre"])

gato["nombre"] = "Pepito"

console.log("El nombre de mi gato es ", gato["nombre"])


//Metodos que son funciones que vamos atener dentro de un objeto

let persona = {
    //defino las propiedades
    nombre: "Arturo",
    apellido: "grottoli",
    edad: 37,


    //Definicion de metodo

    identificar(){
        return "El nombre de la persona es "  + this.nombre + " " + this.apellido + " y tiene " + this.edad + " años"
    }
}

console.log(persona.identificar())












