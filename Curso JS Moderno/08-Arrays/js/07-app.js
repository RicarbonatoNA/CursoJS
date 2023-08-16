//Eliminar elementos con Splice
const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular 2",
    precio: 500
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

//.unshift agrega al inicio de un arreglo
carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento del arreglo
/* carrito.pop();
console.table(carrito); */

//Eliminar del inicio del arreglo
/* carrito.shift();
console.table(carrito); */

carrito.splice(1, 1);
console.table(carrito);