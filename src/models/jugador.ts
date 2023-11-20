interface Desempeno {
    jornada: number,
    puntuacion: number
} 

export class Jugador {
    private readonly nombre: string;
    private puntuaciones: Desempeno[];
    private valoresMercado: number[];

    constructor(
        nombre: string,
        puntuaciones: Desempeno[] = [], 
        valores: number[] = []
    ) {
        this.nombre = nombre;
        this.puntuaciones = puntuaciones;
        this.valoresMercado = valores;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPuntuaciones(): Desempeno[] {
        return this.puntuaciones;
    }
}
