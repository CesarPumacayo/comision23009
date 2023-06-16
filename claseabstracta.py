import abc 
from abc import ABC, abstractmethod #DECORADOR PARA LOS METODOS ABSTRACTOS


class Animal:
    def __init__(self, nombre):
        self.setNombre(nombre)

    def setNombre(self, nombre):
        self.nombre = nombre

    @abc.abstractmethod

    def tipoSonido(self):
        pass
    def __str__(self):
        return "Nombre: " + self.nombre



class Gato(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)
        self.raza = raza

    def tipoSonido(self):
        print("Miau Miau")

    def __str__(self):
        return super().__str__() + " Raza: " + self.raza
    

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)
        self.raza = raza

    def tipoSonido(self):
        print("Guau Guau")

    def __str__(self):
        return super().__str__() + " Raza: " + self.raza
    

gato1 = Gato("Bartolo", "Siames")
# print(gato1.__str__())
gato1.tipoSonido()


perro1 = Perro("Spot", "Golden")

perro1.tipoSonido()