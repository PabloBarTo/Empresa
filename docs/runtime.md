# Runtime

Debido a que estoy trabajando con TypeScript puedo utilizar varios runtimes como podrían ser Deno o Node.js.

Entre estos dos he decidido quedarme con Deno por diversas razones.
Aquí dejo algunas de las ventajas que presenta:

- Una de ellas es que Deno fue diseñado para que fuera seguro por defecto y requiere indicadores de permiso para acceder a los recursos del sistema, de esta manera es menos vulnerable a los ataques. En cambio Node.js tiene un modelo de seguridad menos restrictrivo y aunques mayor flexibilidad y facilidad de desarrollo también tiene más potencial para brechas de seguridad. 

- Deno ofrece compatibilidad nativa con TypeScript lo que permite escribir y ejecutar código sin la necesidad de herramientas o plugins adicionales. Por otro lado Node.js sí requiere herramientas y configuración adicionales.

- Deno utiliza importaciones basadas en URL, eliminando la necesidad de un gestor de paquetes independientes como npm. En cambio Node.js depende de npm y del archivo package.json para gestionar sus dependencias.
