const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crear: nombre => console.log(`Creando playlist con el nombre ${nombre}`),
    reproduciendo: (nombreLista) => console.log(`Escuchando la playlist ${nombreLista}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crear('OST');
reproductor.reproduciendo('OST');