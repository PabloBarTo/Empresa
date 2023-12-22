import { Jugador } from "./jugador";

/**
 * Clase que representa el mercado de fichajes
 */
export class Mercado {
  // Jugadores de la liga
  readonly jugadores: Jugador[];

  constructor(jugadores: Jugador[]) {
    this.jugadores = jugadores;
  }
}
