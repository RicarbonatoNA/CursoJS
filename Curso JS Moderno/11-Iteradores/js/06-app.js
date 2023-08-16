//forEach y map
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (pendientes, index)=> {
    console.log(`${index} : ${pendientes}`);
})

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 600},
]

const nuevoArreglo = carrito.forEach((producto) => {
    console.log(producto.nombre);
})

carrito.map(producto => console.log(producto.nombre));