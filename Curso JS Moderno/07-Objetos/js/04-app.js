//Destructuring de objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(producto.nombre);

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);