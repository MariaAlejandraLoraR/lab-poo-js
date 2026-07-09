function computador(marca, procesador, ram, precio) {  
this.marca = marca; 
this.procesador = procesador;
this.ram = ram;
this.precio = precio;

this.verFicha = function() {
   console.log("Marca:", this.marca, "| RAM:", this.ram + "GB", "| Precio: $" + this.precio);
  };
}

const pc1 = new computador ("Lenovo", "i5", 16, 2800000);
const pc2 = new computador ("Asus", "Ryzen 5", 8, 2200000);
const pc3 = new computador ("HP", "i7", 32, 4500000);

console.log(pc1)
console.log(pc2)
console.log(pc3)
pc1.verFicha();