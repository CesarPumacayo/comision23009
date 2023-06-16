class Gato:
    # El  metodo init
    def __init__(self, nombre, color, edad) -> None:
        self.nombre= nombre
        self.color= color
        self.edad = edad

    def maullar(self):
        return "MIAUUUUUU"
    
    def __str__(self) -> str:
        return f"{self.nombre} es un gato de color {self.color} que tiene {self.edad} años"
    

gato1 = Gato("Pocho", "Naranja", 5)

print(gato1.nombre)
print(gato1.maullar())
print(gato1)    #imprime en pantalla el __str__

gato1.__del__()  #elimina la funcion
print(gato1)

