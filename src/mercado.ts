import { Jugador } from './jugador.ts';
import { Equipo } from './equipo.ts';

export class Mercado {
    private jugadoresDisponibles : Jugador[];

    constructor(jugadores: Jugador[]) {
        this.jugadoresDisponibles = jugadores;
    }

    getJugadoresDisponibles(): Jugador[] {
        return this.jugadoresDisponibles;
    }

}
