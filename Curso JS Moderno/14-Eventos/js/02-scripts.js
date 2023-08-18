const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo en la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('entrando en la navegacion');
    nav.style.backgroundColor = 'white';
})

//mousedown - similar al click
//click
//dblclick = doble click
//mouseup - cuando sueltas el mouse