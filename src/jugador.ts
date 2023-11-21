export class Jugador {
    public nombre: string;
    private puntuacionPorJornada: number[]; 
    private valor_por_jornada: number[];

    constructor(nombre: string, puntuacionPorJornada: number[], valor_por_jornada: number[]) {
        this.nombre = nombre;
        this.puntuacionPorJornada = puntuacionPorJornada;
        this.valor_por_jornada = valor_por_jornada;
    }
    getPuntuacionPorJornada(): number[] {
        return this.puntuacionPorJornada;
    }

    getValorPorJornada(): number[] {
        return this.valor_por_jornada;
    }
}
