import { Jugador } from "./jugador";


class Plantilla {
    presupuesto: number;
    plantilla: Jugador[];

    constructor(presupuesto: number = 100000000, plantilla: Jugador[] =[]) {
        this.presupuesto = presupuesto;
        this.plantilla = plantilla;
    }
}