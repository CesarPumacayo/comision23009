class Pelicula:
    def __init__(self, titulo, duracion, anio):
        self.titulo = titulo
        self.duracion = duracion
        self.anio = anio
        print(f"La pelicula creada a sido {self.titulo}")

    def __str__(self):
        return f"{self.titulo} ({self.anio})"


class Catalogo:
    
    peliculas = [] #lista con objetos de la clase lista

    def __init__(self, peliculas= []):
        Catalogo.peliculas = peliculas
    
    def agregar(self, p): #p va ser objeto pelicula
        Catalogo.peliculas.append(p)
    
    def mostrar(self):
        for p in Catalogo.peliculas:
            print(p)

movie1 = Pelicula("Ciudadela", 120, 2016) #pelicula : la pelicula ha sido creada
c = Catalogo([movie1])
c.mostrar()


c.agregar(Pelicula("Que paso ayer", 130, 2000))
c.agregar(Pelicula("Cristo Señor", 200, 1998))

c.mostrar()

