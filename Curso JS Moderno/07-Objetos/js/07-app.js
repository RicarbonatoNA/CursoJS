const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = true;

delete producto.precio;

console.log(producto);