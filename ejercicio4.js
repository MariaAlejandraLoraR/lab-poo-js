function Libro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.prestado = false; // <- Siempre inicia en false, más fácil

  this.prestar = function() {
    this.prestado = true;
    console.log("Libro prestado: " + this.titulo);
  };

  this.devolver = function() {
    this.prestado = false;
    console.log("Libro devuelto: " + this.titulo);
  };
}

const libro1 = new Libro("Mi psicóloga me dijo", "Katherine Hoyer", 123);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 471);
const libro3 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);

libro1.prestar();
libro2.prestar();
libro3.prestar();

libro1.devolver();
libro2.devolver();
libro3.devolver();
    