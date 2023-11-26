# Elección imagen de docker

## Criterios

Para la elección de la imagen seguiremos los siguientes criterios:

- La imagen que seleccionemos debe ser compatible con deno.
- También buscaremos que la imagen sea lo más ligera posible ya que eso ayudará en los tiempos de ejecución.
- Por último debe ser segura y que cuente con un equipo que ante cualquier problema ofrezca una rápida solución mediante cualquier actualización.

## Imagen candidatas

Para la elección de las imágenes podemos optar por dos **opciones**:
- La primera opción sería instalar un sistema operativo y después instalar deno.
- La segunda opción sería instalar una imagen que ya cuente con deno instalado.

Siguiendo los criterios definidos previamente nos enfocaremos en la imagen que trae deno instalado. Dentro de esta opción podemos elegir entre los siguientes SO.
Todas las opciones mencionadas incluyen deno, así que para elegir uno nos centraremos en que sea lo más ligero posible.

# Debian

Debian tiene un tamaño de 28.74 MB.

# CentOS

CentOS tiene un tamaño de 73.15 MB.
# Ubuntu

Ubuntu tiene un tamaño de 26.01 MB.

# Alpine

Alpine tiene un tamaño de 3.09 MB.

Por tanto teniendo en cuenta los tamaños de cada uno nos quedaremos con Alpine, ya que es el más ligero.