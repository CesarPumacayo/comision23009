#Clase padre , Persona . Va tener atributos y metodos propios
#Clase hijo, Empleado. Va a tener atributos y metodos propios mas los de Persona

class Persona:
    def __init__(self):
        self.nombre = input("Ingrese su nombre:")
        self.edad = int(input("Ingrese su edad: "))
        self.documento = int(input("Ingrese su DNI: "))

    def imprimir(self):
        print(f"Mi nombre es : {self.nombre}, tengo {self.edad} años y mi DNI es {self.documento}")

class Empleado(Persona):
    def __init__(self):
        super().__init__()
        self.sueldo = float(input("Ingrese su sueldo: "))


    def imprimir(self):
        super().imprimir()
        print("Mi sueldo es de $", self.sueldo)

    def pagar_ganancias(self):
        if self.sueldo > 500000:
            print("Usted debe pagar ganancias")
        else:
            print("No debe pagar ganancias")






# cliente1=  Persona() #Aca ingresas
# cliente1.imprimir()

empleado1 = Empleado()
empleado1.imprimir()
empleado1.pagar_ganancias()




