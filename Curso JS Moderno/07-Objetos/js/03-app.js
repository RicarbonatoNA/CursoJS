//Agregar y eliminar propiedades de un objeto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedad del objeto
delete producto.disponible;

console.log(producto);