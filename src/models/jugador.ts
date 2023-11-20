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

    getValorActual(): number {
        return this.valoresMercado[this.valoresMercado.length - 1];
    }

    getMediaValores(nDias: number): number {
        const valores = this.valoresMercado.slice(-nDias);
        return valores.reduce((a, b) => a + b, 0) / valores.length;
    }
}
