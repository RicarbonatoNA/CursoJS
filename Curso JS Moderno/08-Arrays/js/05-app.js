//Añadir nuevos elementos al fin o Inicio de un array
const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

//,push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

//.unshift agrega al inicio de un arreglo
carrito.unshift(producto3);

console.table(carrito);