import { Jugador } from "./jugador";

/**
 * Plantilla del equipo
 */
class Plantilla {
    // Presupuesto del equipo
    presupuesto: number;
    // Jugadores del equipo
    plantilla: Jugador[];

    constructor(presupuesto: number = 100000000, plantilla: Jugador[] =[]) {
        this.presupuesto = presupuesto;
        this.plantilla = plantilla;
    }
}