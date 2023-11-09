import { Jugador } from "./jugador";


class Equipo {
    private presupuesto: number;
    private plantilla: Jugador[];

    constructor(presupuesto: number = 100000000, plantilla: Jugador[] =[]) {
        this.presupuesto = presupuesto;
        this.plantilla = plantilla;
    }

    getPresupuesto(): number {
        return this.presupuesto;
    }

    getPlantilla(): Jugador[] {
        return this.plantilla;
    }
}
