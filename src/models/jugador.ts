export enum Posicion {
    PORTERO = "PORTERO",
    DEFENSA = "DEFENSA",
    CENTRAL = "CENTRAL",
    DELANTERO = "DELANTERO"
}

interface Desempeno {
    jornada: string | number,
    puntuacion: number
} 

interface ValorMercado {
    dia: Date,
    valor: number
}

export class Jugador {
    private readonly nombre: string;
    private readonly posicion: Posicion;
    private readonly puntuaciones: Desempeno[];
    private readonly valoresMercado: ValorMercado[];

    constructor(
        nombre: string,
        posicion: Posicion, 
        puntuaciones: Desempeno[] = [], 
        valores: ValorMercado[] = []
    ) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.puntuaciones = puntuaciones;
        this.valoresMercado = valores;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPosicion(): Posicion {
        return this.posicion;
    }

    getPuntuaciones(): Desempeno[] {
        return this.puntuaciones;
    }

    getValoresMercado(): ValorMercado[] {
        return this.valoresMercado;
    }
}