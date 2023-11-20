interface Desempeno {
    jornada: number,
    puntuacion: number
} 

export class Jugador {
    readonly nombre: string;
    puntuaciones: Desempeno[];
    valoresMercado: number[];

    constructor(
        nombre: string,
        puntuaciones: Desempeno[] = [], 
        valores: number[] = []
    ) {
        this.nombre = nombre;
        this.puntuaciones = puntuaciones;
        this.valoresMercado = valores;
    }
}
