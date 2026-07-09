function mascota ( nombre, especie, edad , peso) {                                                            
this.nombre = nombre;
this.especie = especie;
this.edad = edad;
this.peso = peso;

this.presentarse = function() {
    return "Hola, soy " + this.nombre + ", un " + this.especie + " de " + this.edad + " años y peso " + this.peso + "kg.";
  };
}

const m1 = new mascota ("patacon", "Perro", 5, 12);
const m2 = new mascota ("tomasa", "Gata", 3, 4);
const m3 = new mascota ("coti", "Pez", 1, 0.1);

console.log(m1.presentarse());
console.log(m2.presentarse());
console.log(m3.presentarse());

 