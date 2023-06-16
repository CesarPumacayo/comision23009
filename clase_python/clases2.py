"Es una funcion no tan bien aplicada, tomarlo como teorico y ejemplo de 'clases y objetos' de POO"




class Persona:
    def inicializar(self, nombre, apellido, dni):   #definiendo un metodo (funcion)
        self.nombre = nombre
        self.dni = dni
    def imprimir(self): 
        print(self.nombre)

# La clase es Persona:

# Metodo: 2 solo inicializar y imprimir
# Atributos: 3 nombre , apellido y dni

# Aca ya termino la creacion de las clases, los metodos
# Se empieza con el instanciamiento de los objetos

persona1 = Persona()
persona1.inicializar("Pablo", "Messi", 1234567)
persona1.imprimir()

persona2 = Persona()
persona2.inicializar("Arturo", "Gonzales", 34523525)
persona2.imprimir()

persona3 = Persona()
persona3.inicializar("Eugenia" , "di maria", 7676234)
persona3.imprimir()


