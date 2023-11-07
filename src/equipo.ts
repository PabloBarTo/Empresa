export class Equipo {
    constructor(
        private nombre: string, 
        private jugadores: string)
    {}

    getNombre(): string {
        return this.nombre;
    }

    getJugadores(): string {
        return this.jugadores;
    }

}
