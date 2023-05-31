//Ejemplos de for in

let numeros = [0,10,50,25]

console.log(numeros)

for(i in numeros){
    console.log(i) // 0, 1, 2, 3
    console.log(numeros[i]) //0,10,50,25
}

let persona = {
    nombre: "Arturo",
    apellido: "Grottoli",
    genero: "Masculino",
};

for (elementos in persona){
    console.log(elementos + " : " + persona[elementos]);
}

//Ejemplos de for of

let nombres = ["Arturo", "Maria", "Juan"]
for (x of nombres){
    console.log(x)
}

let cadena = "Esto es una cadena"
for (letra of cadena){
    console.log(letra)
}

//Local storage, permite guardar información aunque cerremos el navegador

//Chequea si funciona en este navegador
if(typeof(Storage) !== "undefined"){
//store
localStorage.setItem("Nombre", "Arturo"); //El nombre no existe entonces lo crea
localStorage.setItem("Nombre", "Juan"); //Ya existe el nombre, entonces lo reemplaza
localStorage.setItem("Apellido","Grottoli");
console.log("El navegador soporta Storage")

}else{
    console.log("Su navegador no soporta web Storage")
}


//Metodo GetElementBy (id, class, name, tag)

function cambiarTexto(){
    let elementos = document.getElementsByClassName("elemento")
    elementos[0].innerHTML = "Cambio el primer texto"
}

function cambiarTextoTodos(){
    let elementos = document.getElementsByTagName("div")
    for(i=0; i<elementos.length;i++)
    elementos[i].innerHTML = "Otro cambio"
    
}

function cambiarTitulo(){
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "CAMBIO DE TITULO"
}