import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { Mercado } from '../src/mercado.ts';
import { Jugador } from '../src/jugador.ts';

const jugadoresData = [
    {
        "nombre": "Bellingham",
        "puntuacionPorJornada": [20, 16, 15, 17],
        "valor_por_jornada": [80000000, 80000000, 80000000, 80000000]
    },
    {
        "nombre": "Kubo",
        "puntuacionPorJornada": [15, 12, 14, 10],
        "valor_por_jornada": [60000000, 60000000, 60000000, 60000000]
    },
    {
        "nombre": "Gavi",
        "puntuacionPorJornada": [10, 9, 15, 10],
        "valor_por_jornada": [40000000, 40000000, 40000000, 40000000]
    }
];

const jugadores = jugadoresData.map(jugadorData => new Jugador(jugadorData.nombre, jugadorData.puntuacionPorJornada, jugadorData.valor_por_jornada));

Deno.test("seleccionarJugadoresMaxPuntos debería devolver jugadores y presupuesto restante correctos", () => {
  const mercado = new Mercado(jugadores);

  const presupuestoMaximo = 100000000;
  const resultadoSeleccion = mercado.seleccionarJugadoresMaxPuntos(presupuestoMaximo);

  // Modificamos la prueba para verificar la relación media de los jugadores seleccionados
  const nombresEsperados = resultadoSeleccion.jugadores.map(jugador => jugador.nombre);
  assertEquals(nombresEsperados, ["Kubo", "Gavi"]);

  // Opcionalmente, puedes agregar una aserción sobre el presupuesto restante si lo deseas
  assert(resultadoSeleccion.presupuestoRestante < presupuestoMaximo);
});