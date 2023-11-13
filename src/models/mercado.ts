import { Jugador } from "./jugador";

export class Mercado {
  private readonly jugadores: Jugador[];

  constructor(jugadores: Jugador[]) {
    this.jugadores = jugadores;
  }

  getJugadores(): Jugador[] {
    return this.jugadores;
  }
}
