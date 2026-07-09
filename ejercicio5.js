function Vehiculo(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  this.detalles = function() {
    return "Vehículo: " + this.marca + " " + this.modelo + ", año " + this.año;
  };
}

// 3 objetos diferentes - no repitas marcas/modelos
const v1 = new Vehiculo("Toyota", "Corolla", 2020);
const v2 = new Vehiculo("Mazda", "CX-5", 2022);
const v3 = new Vehiculo("Chevrolet", "Onix", 2021);

console.log(v1.detalles());
console.log(v2.detalles());
console.log(v3.detalles());