class Cliente:
    def __init__(self, nombre):
        self.nombre = nombre
        self.saldo = 0 #acumulador no hace falta
    def depositar(self, monto):
        self.saldo = self.saldo + monto

    def extraer(self, monto):
        self.saldo = self.saldo - monto

    def retornar_saldo(self):
        return self.saldo
    
    def imprimir(self):
        print(f"{self.nombre} tiene depositado la suma de {self.saldo}$ en su cuenta")

class Banco:
    def __init__(self):
        self.cliente1= Cliente("Arturo") 
        self.cliente2= Cliente("Federico") 
        self.cliente3= Cliente("Santiago")


    def operar(self): 
        self.cliente1.depositar(10000)
        self.cliente2.depositar(50000)
        self.cliente3.depositar(1000)
        self.cliente2.extraer(20000)

    def depositos_totales(self):
        total = self.cliente1.retornar_saldo() + self.cliente2.retornar_saldo() \
        + self.cliente3.retornar_saldo()
        print(f"El total de los saldos es ${total}")
        self.cliente1.imprimir()
        self.cliente2.imprimir()
        self.cliente3.imprimir()

        
banco1 = Banco()
banco1.operar()
banco1.depositos_totales()#cada funcion se relacionan entre si

