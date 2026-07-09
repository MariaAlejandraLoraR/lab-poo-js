function Computador(marca, procesador, ram, precio) {  
  this.marca = marca; 
  this.procesador = procesador;
  this.ram = ram;
  this.precio = precio;

  this.verFicha = function() {
    console.log("Marca:", this.marca, "| Procesador:", this.procesador, "| RAM:", this.ram + "GB", "| Precio: $" + this.precio);
  };
}

const pc1 = new Computador("Lenovo", "i5", 16, 2800000);
const pc2 = new Computador("Asus", "Ryzen 5", 8, 2200000);
const pc3 = new Computador("HP", "i7", 32, 4500000);

pc1.verFicha();
pc2.verFicha();
pc3.verFicha();