// Mayor o Igual y else if
const dinero = 100;
const totalPagar = 500;
const tarjeta = true;
const cheque = false;

if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('si tengo un cheque');
} else if (tarjeta) {
    console.log('si puedo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos insuficientes'); 
}