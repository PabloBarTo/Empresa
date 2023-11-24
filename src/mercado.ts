import { Jugador } from './jugador.ts';

export class Mercado {
    private jugadoresDisponibles : Jugador[];

    constructor(jugadores: Jugador[]) {
        this.jugadoresDisponibles = jugadores;
    }

    private get _jugadoresDisponibles(): Jugador[] {
        return this.jugadoresDisponibles;
    }

    seleccionarJugadoresMaxPuntos(presupuestoMaximo: number): { jugadores: Jugador[], presupuestoRestante: number } {
        let mejorSeleccion: Jugador[] = [];
        let mejorPuntuacion = 0;
        let presupuestoRestante = presupuestoMaximo;

        // Llamamos a buscarCombinacion y actualizamos los resultados
        const resultado = this.buscarCombinacion(0, [], presupuestoMaximo, mejorSeleccion, mejorPuntuacion);
        mejorSeleccion = resultado.jugadores;
        presupuestoRestante = resultado.presupuestoRestante;

        console.log("Jugadores seleccionados:", mejorSeleccion.map(jugador => jugador.nombre));
        console.log("Presupuesto restante:", presupuestoRestante);

        return {
            jugadores: mejorSeleccion,
            presupuestoRestante: presupuestoRestante
        };
    }

    private buscarCombinacion(actual: number, seleccion: Jugador[], presupuestoRestante: number, mejorSeleccion: Jugador[], mejorPuntuacion: number): { jugadores: Jugador[], presupuestoRestante: number } {
        const n = this.jugadoresDisponibles.length;

        if (actual === n) {
            const puntuacionActual = this.calcularPuntuacion(seleccion);
            if (puntuacionActual > mejorPuntuacion && presupuestoRestante >= 0) {
                mejorPuntuacion = puntuacionActual;
                mejorSeleccion = [...seleccion];
            }
            return { jugadores: mejorSeleccion, presupuestoRestante };
        }

        const jugadorActual = this.jugadoresDisponibles[actual];
        seleccion.push(jugadorActual);
        const resultadoConJugador = this.buscarCombinacion(actual + 1, seleccion, presupuestoRestante - jugadorActual.getValorUltimaJornada(), mejorSeleccion, mejorPuntuacion);
        mejorSeleccion = resultadoConJugador.jugadores;
        seleccion.pop();  

        const resultadoSinJugador = this.buscarCombinacion(actual + 1, seleccion, presupuestoRestante, mejorSeleccion, mejorPuntuacion);

        mejorPuntuacion = this.calcularPuntuacion(mejorSeleccion);

        return mejorPuntuacion > this.calcularPuntuacion(resultadoSinJugador.jugadores)
            ? { jugadores: mejorSeleccion, presupuestoRestante: presupuestoRestante - jugadorActual.getValorUltimaJornada() }
            : resultadoSinJugador;
    }

    private calcularPuntuacion(seleccion: Jugador[]): number {
        return seleccion.reduce((total, jugador) => total + jugador.getPuntuacionUltimaJornada(), 0);
    }
}
