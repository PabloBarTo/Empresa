# Runtime

Debido a que estoy trabajando con TypeScript puedo utilizar varios runtimes como podrían ser Deno, Node.js, Jitar o Nakama.

## Deno

Deno es un runtime basado en la v8 de Chrome, desarrollado en el lenguaje de programación Rust y que compite directamente con Node.js, tanto en funcionalidades como en casos de uso. urge para suplir una serie de defectos que en NodeJS, se habían acentuado con el paso del tiempo y el avance de las tecnologías. Algunos de estos defectos serían:
- Adaptación a los cambios del lenguaje compleja
- Gestión de las dependencias
- Módulos

## Node.js

Node.js es un entorno de tiempo de ejecución de JavaScript. Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. También aporta muchos beneficios y soluciona muchísimos problemas. Se ejecuta en el motor de tiempo de ejecución JavaScript V8. Utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente. Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP. 

## Jitar

Jitar es un runtime distribuido para JavaScript y TypeScript que automatiza la comunicación de extremo a extremo para sus aplicaciones. Puede llamar a sus funciones del servidor directamente, Jitar se encarga del resto. A diferencia de cualquier solución similar a un marco, no hay rastro de Jitar en el código de la aplicación.

## Nakama

Nakama es un framework de juegos multijugador en línea que admite TypeScript. Es un runtime completo que incluye un servidor de juegos, un sistema de chat, un sistema de economía y un sistema de logros. Nakama está diseñado para ser seguro por defecto. El framework utiliza una serie de mecanismos de seguridad, como autenticación, autorización y cifrado, para proteger los datos de los usuarios. Nakama admite TypeScript y JavaScript. Nakama es una buena opción para el desarrollo de juegos multijugador en línea. El framework es seguro, compatible y rico en características.

## Selección

Entre estos he decidido quedarme con Deno por diversas razones:

### Ventajas de Deno frente a Node.js

- Una de ellas es que Deno fue diseñado para que fuera seguro por defecto y requiere indicadores de permiso para acceder a los recursos del sistema, de esta manera es menos vulnerable a los ataques. En cambio Node.js tiene un modelo de seguridad menos restrictrivo y aunques mayor flexibilidad y facilidad de desarrollo también tiene más potencial para brechas de seguridad. 

- Deno ofrece compatibilidad nativa con TypeScript lo que permite escribir y ejecutar código sin la necesidad de herramientas o plugins adicionales. Por otro lado Node.js sí requiere herramientas y configuración adicionales.

- Deno utiliza importaciones basadas en URL, eliminando la necesidad de un gestor de paquetes independientes como npm. En cambio Node.js depende de npm y del archivo package.json para gestionar sus dependencias.

### Ventajas de Deno frente a Jitar

- Deno está más actualizado que Jitar ya que está construido sobre la última versión de V8.

- Deno es más escalable ya que Jitar sería menos escalable en el caso de tratarse de aplicaciones con alto tráfico.

- Jitar podría ser algo difícil de aprender. En cambio Deno sí es bastante fácil de aprender cómo usarlo.

### Ventajas de Deno frente a Nakama

- Deno presenta una mayor seguridad que Nakama.

- Deno al estar construido sobre la última versión de V8 también está más actualizado que Nakama.

- Deno es más fácil de aprender a usar que Nakama.

- Deno presenta mayor compatibilidad con TypeScript que Nakama.

