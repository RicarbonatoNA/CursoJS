//Destructuring de objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(producto.nombre);

const { nombre } = producto;

console.log(nombre);

//Destructuring de arrays
const numeros = [10,20,30,40,50];

const [primero, ...tercero  ] = numeros;
console.log(tercero);