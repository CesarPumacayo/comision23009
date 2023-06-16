class Calculadora:
    def __init__(self):
        self.numero1 = float(input("Ingrese el primer numero: "))
        self.numero2 = float(input("Ingrese el segundo numero: "))
        self.sumar()
        self.restar()
        self.multiplicar()
        self.dividir()



    def sumar(self):
        calculo = self.numero1 + self.numero2
        print(f"La suma de los dos numeros es igual a : {calculo}")


    def restar(self):
        calculo = self.numero1 - self.numero2
        print(f"La resta de los dos numeros es igual a : {calculo}")
    

    def multiplicar(self):
       calculo = self.numero1 * self.numero2
       print(f"La multiplicacion de los dos numeros es igual a : {calculo}")
 

 
    def dividir(self):
        calculo = self.numero1 / self.numero2
        if self.numero2 == 0:
            print(f"La division es imposible")
        else:
            print(f"La division de los dos numeros es igual a : {calculo}")
 
    def __del__(self):
        print("Se ha eliminado la operacion")

operacion1 = Calculadora()
