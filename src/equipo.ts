import { Jugador } from './jugador.ts';
import { Mercado } from './mercado.ts';


export class Equipo {
    private nombre  : string;
    private jugadores : Jugador[];
    private presupuesto : number;
    private mercado : Mercado;

    constructor(nombre: string, jugadores: Jugador[], presupuesto: number = 100000000, mercado: Mercado) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.presupuesto = presupuesto;
        this.mercado = mercado;
    }

    get _nombre(){
        return this.nombre;
    }

    ficharJugadores(): void {
        const resultado = this.mercado.seleccionarJugadoresMaxPuntos(this.presupuesto);
        this.jugadores.push(...resultado.jugadores);
        this.presupuesto = resultado.presupuestoRestante;
    }
}