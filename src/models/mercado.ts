import { Jugador } from "./jugador";

export class Mercado {
  readonly jugadores: Jugador[];

  constructor(jugadores: Jugador[]) {
    this.jugadores = jugadores;
  }
}
