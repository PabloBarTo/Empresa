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

    seleccionarJugadoresMaxPuntos(presupuestoMaximo: number): { jugadores: Jugador[], presupuestoRestante: number } {
        const n = this.jugadoresDisponibles.length;

        let mejorSeleccion: Jugador[] = [];
        let mejorPuntuacion = 0;
        let presupuesto_restante = presupuestoMaximo;

        const calcularPuntuacion = (seleccion: Jugador[]): number => {
            return seleccion.reduce((total, jugador) => total + jugador.getPuntuacionUltimaJornada(), 0);
        };

        const buscarCombinacion = (actual: number, seleccion: Jugador[], presupuestoRestante: number): void => {
            if (actual === n) {
                const puntuacionActual = calcularPuntuacion(seleccion);
                if (puntuacionActual > mejorPuntuacion && presupuestoRestante >= 0) {
                    mejorPuntuacion = puntuacionActual;
                    mejorSeleccion = [...seleccion];
                    presupuesto_restante = presupuestoRestante;
                }
                return;
            }

            seleccion.push(this.jugadoresDisponibles[actual]);
            buscarCombinacion(actual + 1, seleccion, presupuestoRestante - this.jugadoresDisponibles[actual].getValorUltimaJornada());
            seleccion.pop();  // Excluir el jugador actual en la selección

            buscarCombinacion(actual + 1, seleccion, presupuestoRestante);
        };

        buscarCombinacion(0, [], presupuestoMaximo);

        console.log("Jugadores seleccionados:", mejorSeleccion.map(jugador => jugador.nombre));
        console.log("Presupuesto restante:", presupuesto_restante);

        return {
            jugadores: mejorSeleccion,
            presupuestoRestante: presupuesto_restante
        };
    }
    
}