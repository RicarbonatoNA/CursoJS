const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 600},
]

const nuevoArreglo = carrito.map(function(producto){
    console.log(producto.nombre);
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    console.log(producto.nombre);
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
