class Animal:
    def hablar(self):
        pass

class Gato(Animal):
    def hablar(self):
        print("Miau" *3)

class Pajaro(Animal):
    def hablar(self):
        print("Pio" *3)

class Perro(Animal):
    def hablar(self):
        print("Guau" *3)


#Arrancar

for animal in [Gato(),Pajaro(), Perro()]:

    animal.hablar() 