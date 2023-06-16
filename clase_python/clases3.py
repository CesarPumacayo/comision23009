# Crear la clase que cargue nombre, id y una edad de una persona
# Crear un metodo que imprima todos los datos de cada persona
# Ver si la persona es mayor de edad o no

class Persona:
    def constructor(self, nombre, id , edad): #asigna valores al atributo ej: __init__
        self.nombre= nombre
        self.id= id
        self.edad= edad
    def datos(self): 
        print("Nombre de la persona es : ", self.nombre)
        print("Numero de id de la persona es: ", self.id)
        print(f"{self.nombre} tiene {self.edad} años")

    def verificar(self):
        if self.edad >= 18:
            print("La persona es mayor de edad")
        else:
            print("La persona es menor de edad")


# Teminamos la creacion de clases y metodos

# Vamos a instanciar!!

persona1= Persona()
persona1.constructor("Arturo", 1, 20)
persona1.datos()
persona1.verificar()

persona2= Persona()
persona2.constructor("Juan", 1, 15)
persona2.datos()
persona2.verificar()

persona3= Persona()
persona3.constructor("Laura", 3, 25)
persona3.datos()
persona3.verificar()



