/**
 * Modelo de datos para el desempeño de un jugador en una jornada
 */
interface Desempeno {
    jornada: number,
    puntuacion: number
} 

/**
 * Jugador de fútbol
 */
export class Jugador {
    // Nombre del jugador
    readonly nombre: string;
    // Histórico del desempeño del jugador
    puntuaciones: Desempeno[];
    // Histórico de los valores de mercado del jugador
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

    /**
     * Obtiene el valor actual de mercado del jugador
     * @returns Valor de mercado actual del jugador
     */
    getValorActual(): number {
        return this.valoresMercado[this.valoresMercado.length - 1];
    }

    /**
     * Calcula la media del valor de mercado del jugador en los últimos n días
     * @param nDias Número de días para calcular la media
     * @returns La media de los valores de mercado de los últimos nDias
     */
    getMediaValores(nDias: number): number {
        const valores = this.valoresMercado.slice(-nDias);
        return valores.reduce((a, b) => a + b, 0) / valores.length;
    }
}
