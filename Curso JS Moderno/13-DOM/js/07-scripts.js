//Cambiando el CSS con JavaScript
/* const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'upppercase'; */

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);