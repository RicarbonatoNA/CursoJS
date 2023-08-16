const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

console.log(encabezado.innerText);//Si en el CSS está oculto, no lo va a encontrar
console.log(encabezado.textContent);//Este si
console.log(encabezado.innerHTML);//Se trae el HTML

const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';