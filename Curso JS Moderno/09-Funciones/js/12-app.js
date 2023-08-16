//Arrow Functions en un forEach y un map
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 600},
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`)
carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
console.log(nuevoArreglo2);