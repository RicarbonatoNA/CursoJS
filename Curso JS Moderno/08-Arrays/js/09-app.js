const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 600},
]

for(let i= 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

carrito.forEach(function(producto){
    console.log(producto.nombre);
})