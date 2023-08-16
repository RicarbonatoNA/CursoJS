//Añadir Funciones en un Objeto
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log('Pausando...');
    },
    borrar: function (id) {  
        console.log(`Borrando canción... ${id}`);
    },
    crear: function (nombre) {  
        console.log(`Creando playlist con el nombre ${nombre}`);
    },
    reproduciendo: function (nombreLista) {
        console.log(`Escuchando la playlist ${nombreLista}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crear('OST');
reproductor.reproduciendo('OST');