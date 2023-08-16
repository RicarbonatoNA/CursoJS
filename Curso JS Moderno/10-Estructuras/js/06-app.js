// El Operador && para revisar que se cumplan 2 o más condiciones
const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!puedePagar && !usuario){
    console.log('no puedes comprar');
} else if(!usuario) {
    console.log('Inicia sesion o registrate');
} else if(!puedePagar) {
    console.log('Fondos insuficientes');
}