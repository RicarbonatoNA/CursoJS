//For loop
/* for (let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
} */

/* for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0 ) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero: ${i} es IMPAR`);
    }
} */

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 600},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}