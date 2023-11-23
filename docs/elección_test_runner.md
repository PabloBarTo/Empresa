# Elección test runner
Una vez ya hemos elegido tanto el gestor de tareas como el gestor de dependencias como el runtime tenemos que elegir ahora un test runner.

Para elegir el test runner he seguido los siguientes criterios:

- Principalmente debe ser compatible con Deno y TypeScript.
- Debe tener una comunidad activa.
- También debe tener un mantenimiento activo.

Siguiente estos criterios he encontrado los siguientes test runners:

## Deno test
Deno cuenta con un propio. Esta herramienta se puede utilizar para ejecutar pruebas unitarias y de integración en JavaScript o TypeScript. Cuenta con una comunidad activa y al tratarse de una funcionalidad del propio Deno el mantenimiento también es constante. [Deno test](https://docs.deno.com/runtime/manual/basics/testing/)

## Tape
Tape es un testing framework minimalista que fácil de aprender y de usar. Cuenta con una comunidad activa y tiene un buen mantenimiento. No cuenta con una amplia gama de características pero es perfecto para pequeños proyectos. [Tape](https://github.com/ljharb/tape)

## Ava
Ava es un testing framework minimalista que adopta nuevas funciones de lenguaje, tiene resultados de errores detallados y aislamiento de procesos. Al igual que los anteriores cuenta con una comunidad activa y se mantiene actualizado sin errores y la cantidad de características con las que cuenta son parecidas a las de Tape. [Ava](https://nightwatchjs.org/guide/third-party-test-runners/ava.html)

## Selección
Entre estos tres test runners he decidido quedarme con Deno test ya que para poder utilizar los otros dos es necesario instalar Node. Por tanto he decidido quedarme con este porque minimiza el número de módulos que me tengo que instalar y además al ser el propio que ofrece Deno es el menos problemas de compatibilidad puede ofrecer.

# Aserciones

## Assert
Assert es una biblioteca de aserciones compatible con deno, con una comunidad activa y un mantenimiento sostenible. [Assert](https://snyk.io/advisor/npm-package/assert)

## Chai
Chai es una biblioteca de aserciones específica de node.js pero que también es compatible con deno. Cuenta con una comunidad actica y también con un mantenimiento activo. [Chai](https://snyk.io/advisor/npm-package/chai)

## Selección
Me he decantado por assert ya que es el que recomienda el propio deno aunque son los dos muy parecidos.

## CLI

Deno test trae un CLI integrado, por tanto no va a ser necesario buscar ningún CLI adicional.
