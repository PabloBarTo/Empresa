# Gestor de tareas

## Criterios de elección

- Facilidad en el uso, ya que es algo con lo que vamos a estar trabajando y siempre es preferible trabajar con algo que se entiende y no es muy laborioso ya que a la larga nos ahorraremos tener problemas 
por no entender algo de su funcionalidad o de los propios errores que nos pueda dar el gestor.

- Que exista una documentación amplia y buena ya que en caso de que aparezcan problemas o dudas sobre su funcionamiento tengamos algo en lo que apoyarnos para resolver estas cuestiones que se nos puedan presentar.

- Que sea eficiente, es decir, que sea rápido y que no entorpezca el desarrollo del proyecto.


## Make
"Make" es un sistema de construcción y automatización de tareas que se utiliza comúnmente en el desarrollo de software. Utiliza un archivo llamado "Makefile" que es el núcleo del proyecto. En él se definen las tareas y las reglas que se desean automatizar. Aunque Make no está específicamente diseñado para JavaScript, es ampliamente utilizado en el desarrollo de software, y su enfoque basado en reglas lo convierte en un poderoso "task runner" para automatizar tareas en proyectos de programación. Su principal limitación es que su sintaxis puede resultar más compleja que las herramientas de "task runner" específicas de JavaScript.

## Drake
"Drake" es un sistema de automatización de tareas inspirado en Make que se utiliza para definir y ejecutar flujos de trabajo en el entorno de análisis de datos, especialmente en el lenguaje de programación R. Drake se utiliza para automatizar tareas relacionadas con la ciencia de datos y el análisis estadístico. En Drake se definen las tareas y flujos de trabajo en un archivo de configuración llamado "Drakefile." Drake se destaca en la gestión de dependencias. Si una tarea depende de la salida de otra tarea, Drake asegurará que se ejecuten en el orden correcto. Esto es especialmente útil en el análisis de datos, donde los resultados de una tarea a menudo dependen de los resultados de otras. Aunque no es una herramienta típica de "task runner" en el sentido tradicional, cumple una función similar en el ámbito del análisis de datos y la programación en R.

## Gulp
"Gulp¨" es un task runner basado en Node.js que es muy popular entre los desarrolladores de JavaScript y TypeScript. Es fácil de aprender y de usar y dispone de una gran cantidad de plugins disponibles. Gulp utiliza streams para procesar archivos, lo que lo hace muy eficiente. Además cuenta con una documentación completa y bien escrita

## Denosk
"Denosk" es un task runner para Deno inspirado en Gulp. Denosk tiene una sintaxis sencilla y fácil de entender, además cuenta con una gran cantidad de plugins disponibles para automatizar casi cualquier tarea. También utiliza streams para procesar archivos por lo que es muy eficiente. A todo esto también hay que sumarle que es extensible, es decir, que se pueden crear plugins para autimatizar tareas propias. Al igual que Gulp cuenta con una documnetación muy completa y bien escrita.

## Deno task
"Deno Task" es un módulo de Deno que permite ejecutar tareas de manera asincrónica. Sus principales características es que las tareas se ejecutan de forma asíncrona por lo que permite que el código principal continúe ejecutándose mientras las tareas se ejecuetan en segundo plano. También permite que las tareas se ejecuten en paralelo. Además es muy fácil de utilizar. A diferencia de los demás este si es específico para JavaScript y TypeScript.

## Moon
"Moon" es un framework ligero y flexible que permite a los desarrolladores crear aplicaciones con una interfaz de usuario atractiva y de alto rendimiento. Moon se puede utilizar para crear aplicaciones en cualquier plataforma, es también fácil de usar y también es extensible.

## Selección
De todos los task runners que he comentado aquí he decidido quedarme con Denosk debido a que es muy fácil de aprender a utilizarlo y ofrece muchas posibilidades distintas. Además que al tener una documentación tan buena es mucho más fácil de entender y de resolver cualquier problema que pueda tener.
