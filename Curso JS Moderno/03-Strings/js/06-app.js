const producto = 'Monitor 20 pulgadas';

//.repeat: Te va a permitir repetir un String
const texto = " en promocion ".repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//.split: Dividir un String
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Esscuchar musica, Escribir, Aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript Moderno #JSModernoConJuan";
console.log(tweet.split('#'));