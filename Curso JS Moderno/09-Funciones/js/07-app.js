//Como se Comunican las funciones
iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {  
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Ricardo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario, espere...');
    console.log(`Usuario autenticado exitosamente: Bienvenido ${usuario}!`);
}