// //Declaracion de funcion
// function saludar()
// {
//     document.write("Hola mundo desde una función! <br>")
//     alert("Hola mundo desde una alerta")
//     console.log("Hola mundo!")
    
// }
// //Invocacion o llamada a la función

// saludar ();  //3 lineas aparece arriba la funcion segun como dejar la linea del script
// saludar ();  //6 lineas 
// saludar ();  
// saludar ();  //12 lineas, el ahorro es de 12-4= 8 lineas

// //Funcion que tenga parametros y argumentos

let a = Number.parseInt(prompt("Ingrese el primer numero: "))
let b = Number.parseInt(prompt("Ingrese el segundo numero: "))

function sumar(a,b)
{
    document.write("La suma de los numeros ingresados es: ", a + b)

}

sumar(a,b); //hago llamar a la funcion

function restar(a,b)
{
    document.write("<br>La resta de los numeros ingresados es: ", a - b)
}
restar(a,b);

//bucle adentro de la funcion

let numero = Number.parseInt(prompt("Ingrese un numero para ver su tabla"))

function tabla(numero){
    for(i=1;i<=10;i++)
    {
        console.log("<br>El resultado es: ", numero, " x ",i,"=", numero*i)
    
    }
}
tabla(numero);

let nombre = prompt("Ingrese el nombre: ")

function saludar2(nombre)
{
    document.write("<br> Buenas noches ", nombre, " vamos a hacerle un cuestionario")
}

saludar2(nombre);


//funcion con retorno

let numero1= Number.parseInt(prompt("Ingrese el primer numero: "))
let numero2 = Number.parseInt(prompt("Ingrese el segundo numero: "))

let numeroMayor = function(numero1,numero2){
    if(numero1 > numero2)
    {
        return numero1
    }
    else{
        return numero2
    }
}
console.log("El número mayor es ", numeroMayor(numero1, numero2));
