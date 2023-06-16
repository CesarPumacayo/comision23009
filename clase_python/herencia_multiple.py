#Hrencia multiple----> Es una subclase que tiene 2 o mas superclases

class Papa:
    def cocina(self):
        print("Mi papá hace asados")

class Mama:
    def padel(self):
        print("Mi mamá juega al padel")


class Hijo(Papa, Mama):
    def imprimir(self):
        print("Yo soy el hijo de mi mamá y de mi papá")


pedrito = Hijo()

pedrito.cocina()
pedrito.padel()
pedrito.imprimir()

