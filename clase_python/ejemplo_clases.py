class Auto:
    def __init__(self, marca, modelo , color): #metodo inicializar atributos
        self.marca = marca
        self.modelo = modelo
        self.color = color

    def acelerar(self):
        print("El auto se encuentra en movimiento")

    def frenar(self):
        print("Vehiculo esta frenado")

    def imprimir(self):
        print(f"El auto es de la marca {self.marca} , modelo {self.modelo} y  color {self.color}")


auto1 = Auto("Fiat", 2016, "Black")

auto1.imprimir()
auto1.acelerar()
auto1.frenar()