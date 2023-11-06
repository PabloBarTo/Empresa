# Runtime

Debido a que estoy trabajando con TypeScript puedo utilizar varios runtimes como podrían ser Deno, Node.js, Jitar o Nakama.

## Deno

Deno es un runtime basado en la v8 de Chrome, desarrollado en el lenguaje de programación Rust y que compite directamente con Node.js, tanto en funcionalidades como en casos de uso. urge para suplir una serie de defectos que en NodeJS, se habían acentuado con el paso del tiempo y el avance de las tecnologías. Algunos de estos defectos serían:
- Adaptación a los cambios del lenguaje compleja
- Gestión de las dependencias
- Módulos

## Node.js

Node.js es un entorno de tiempo de ejecución de JavaScript. Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. También aporta muchos beneficios y soluciona muchísimos problemas. Se ejecuta en el motor de tiempo de ejecución JavaScript V8. Utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente. Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP.

## Bun

Bun es un entorno de ejecución de JavaScript creado desde cero para servir a JavaScript. Está diseñado como un reemplazo directo de Node.js. Su diseño cuenta con tres objetivos principales. La velocidad, Bun se inicia rápidamente y se ejecuta de manera eficiente. Cuenta con un conjunto de APIs optimizadas para tareas comunes y también cuenta con un conjunto de herramientas completo para crear aplicaciones JavaScript.

## Selección

Entre estos he decidido quedarme con Deno por diversas razones:

### Ventajas de Deno frente a Node.js

- Una de ellas es que Deno fue diseñado para que fuera seguro por defecto y requiere indicadores de permiso para acceder a los recursos del sistema, de esta manera es menos vulnerable a los ataques. En cambio Node.js tiene un modelo de seguridad menos restrictrivo y aunques mayor flexibilidad y facilidad de desarrollo también tiene más potencial para brechas de seguridad. 

- Deno ofrece compatibilidad nativa con TypeScript lo que permite escribir y ejecutar código sin la necesidad de herramientas o plugins adicionales. Por otro lado Node.js sí requiere herramientas y configuración adicionales.

- Deno utiliza importaciones basadas en URL, eliminando la necesidad de un gestor de paquetes independientes como npm. En cambio Node.js depende de npm y del archivo package.json para gestionar sus dependencias.

### Ventajas de Deno frente a Bun

- Deno presenta una mayor seguridad que Bun.

- Deno está diseñado para ser más eficiente que Bun, además de que necesita menos recursos al no requerir la instalación de módulos nativos.
