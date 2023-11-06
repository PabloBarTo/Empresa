# Gestor de tareas

## Criterios de elección

- Que ofrezca muchas posibilidades y sea extensible.

- Que se actualice con frecuencia.

- Que el gestor de tareas elegido garantice seguridad.

## Make
"Make" es un sistema de construcción y automatización de tareas que se utiliza comúnmente en el desarrollo de software. Utiliza un archivo llamado "Makefile" que es el núcleo del proyecto. En él se definen las tareas y las reglas que se desean automatizar. Aunque Make no está específicamente diseñado para JavaScript, es ampliamente utilizado en el desarrollo de software, y su enfoque basado en reglas lo convierte en un poderoso "task runner" para automatizar tareas en proyectos de programación. Su principal limitación es que su sintaxis puede resultar más compleja que las herramientas de "task runner" específicas de JavaScript. Make es extensible, ofrece una amplia gama de funciones y opciones, lo que le permite realizar una amplia gama de tareas. Se actualiza con frecuencia para corregir errores y añadir nuevas funciones y además es un software seguro. Sin embargo puede ser algo complejo de aprender a utilizar.

## Drake
"Drake" es un sistema de automatización de tareas inspirado en Make que se utiliza para definir y ejecutar flujos de trabajo en el entorno de análisis de datos, especialmente en el lenguaje de programación R. Drake se utiliza para automatizar tareas relacionadas con la ciencia de datos y el análisis estadístico. En Drake se definen las tareas y flujos de trabajo en un archivo de configuración llamado "Drakefile." Drake se destaca en la gestión de dependencias. Si una tarea depende de la salida de otra tarea, Drake asegurará que se ejecuten en el orden correcto. Esto es especialmente útil en el análisis de datos, donde los resultados de una tarea a menudo dependen de los resultados de otras. Aunque no es una herramienta típica de "task runner" en el sentido tradicional, cumple una función similar en el ámbito del análisis de datos y la programación en R. Al igual que Make, Drake también es seguro y se mantiene actualizado pero es menos extensible que Make.

## Denosk
"Denosk" es un task runner para Deno inspirado en Gulp. Denosk tiene una sintaxis sencilla y fácil de entender, además cuenta con una gran cantidad de plugins disponibles para automatizar casi cualquier tarea. También utiliza streams para procesar archivos por lo que es muy eficiente. A todo esto también hay que sumarle que es extensible, es decir, que se pueden crear plugins para autimatizar tareas propias. Cuenta con una documentación muy completa y bien escrita. Denosk también es seguro, además, al estar en desarrollo se mantiene muy actualizado y cuenta con una gran amplia gama de funciones contando además con programación de tareas.

## Deno task
"Deno Task" es un módulo de Deno que permite ejecutar tareas de manera asincrónica. Sus principales características es que las tareas se ejecutan de forma asíncrona por lo que permite que el código principal continúe ejecutándose mientras las tareas se ejecuetan en segundo plano. También permite que las tareas se ejecuten en paralelo. Además es muy fácil de utilizar. A diferencia de los demás este si es específico para JavaScript y TypeScript.

## Moon
"Moon" es un framework ligero y flexible que permite a los desarrolladores crear aplicaciones con una interfaz de usuario atractiva y de alto rendimiento. Moon se puede utilizar para crear aplicaciones en cualquier plataforma, es también fácil de usar y también es extensible. Moon también es seguro y se mantiene actualizado. Sin embargo no es tan extensible como los demás.

## Selección
De todos los task runners que he comentado siguiendo los criterios que he comentado al principio los dos mejores serían Make y Denosk. Entre estos dos he decidido quedarme con Denosk debido a que al estar en desarrollo tiene actualizaciones más frecuentemente y además de las posibilidades que pueda ofrecer Make también cuenta con programación de tareas.
