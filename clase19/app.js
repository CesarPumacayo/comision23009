//Addeventlistener y mouseover

let miDiv = document.getElementById("miDiv")

miDiv.addEventListener("mouseover", function(event){
    miDiv.style.backgroundColor = "blue";
},false
);


miDiv.addEventListener("mouseout", function(event){
    miDiv.style.backgroundColor = "orange";
},false
);

//innerHTML 

let miDiv2 = document.getElementById("miDiv2")
miDiv2.innerHTML = "Cambio el texto por Hola Mundo"

