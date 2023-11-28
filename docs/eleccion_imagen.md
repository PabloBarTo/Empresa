# Elección imagen de docker

## Criterios

Para la elección de la imagen seguiremos los siguientes criterios:

- La imagen que seleccionemos debe ser compatible con deno.
- También buscaremos que la imagen sea lo más ligera posible ya que hará que tengamos que cargar menos datos cada vez que iniciemos el contenedor.
- Debe ser segura y que cuente con un equipo que ante cualquier problema ofrezca una rápida solución mediante cualquier actualización.
- Puntuación dada en snyk Advisor ya que podremos saber datos como la popularidad y la valoración que le han dado muchas personas que lo hayan usado.

## Imágenes candidatas

Para la elección de las imágenes podemos optar por dos **opciones**:
- La primera opción sería instalar un sistema operativo y después instalar deno.
- La segunda opción sería instalar una imagen que ya cuente con deno instalado.

Siguiendo los criterios definidos previamente nos enfocaremos en la imagen que trae deno instalado.
Todas las opciones mencionadas incluyen deno, así que para elegir uno, los principal en lo que nos centraremos será en que sea lo más ligero posible.
La información sobre qué imágenes son compatibles con deno las he encontrado en [Imágenes compatibles con deno](https://hub.docker.com/r/denoland/deno)

[Debian](https://hub.docker.com/_/debian)
[CentOS](https://hub.docker.com/_/centos)
[Ubuntu](https://hub.docker.com/_/ubuntu)
[Alpine](https://hub.docker.com/_/alpine)

# Debian

Debian es una distribución de Linux compuesta íntegramente de software gratuito y de código abierto. Su tamaño es de 28.74 MB. Según snyk Advisor cuenta con una valoración de 4.86K estrellas y con 1B de descargas. [Debian](https://snyk.io/advisor/docker/debian)

# CentOS

CentOS es un sistema operativo de código abierto, basado en la distribución Red Hat Enterprise Linux. Su tamaño es de 73.15 MB. Según snyk Advisor cuenta con una valoración de 7.68K estrellas y con 1B de descargas. [CentOS](https://snyk.io/advisor/docker/centos)

# Ubuntu

Ubuntu es un sistema operativo Linux basado en Debian y basado en software libre. Su tamaño es de 26.01 MB. Según snyk Advisor cuenta con una valoración de 16.63K estrellas y con más de 8B de descargas. [Ubuntu snyk](https://snyk.io/advisor/docker/ubuntu)

# Alpine

Alpine es una distribución Linux ultraligera y orientada a la seguridad. Su tamaño es de 3.09 MB. Según snyk Advisor cuenta con una valoración de 10.47K estrellas y con más de 10B de descargas. [Alpine snyk](https://snyk.io/advisor/docker/alpine)

## Selección

Siguiendo la información dada en snyk Advisor los dos mejores valorados son Ubuntu y Alpine. Por tanto teniendo en cuenta esta valoración y los tamaños de cada uno nos quedaremos con Alpine, ya que es el más ligero.