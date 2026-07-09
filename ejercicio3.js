function Estudiante(nombre, nota) {
  this.nombre = nombre;
  this.nota = nota;

  this.mostrarResultado = function() {
    if (this.nota >= 3.0) {console.log("✅ " + this.nombre + " aprobó con " + this.nota);
    } else {
      console.log("❌ " + this.nombre + " reprobó con " + this.nota);
    }
  };
}

const est1 = new Estudiante("Yaireth Lora", 5.0);
const est2 = new Estudiante("Luis Cavadia", 2.8);
const est3 = new Estudiante("Joel Crespo", 4.5);
const est4 = new Estudiante("Sofia Villarreal", 4.0);

est1.mostrarResultado();
est2.mostrarResultado();
est3.mostrarResultado();
est4.mostrarResultado();