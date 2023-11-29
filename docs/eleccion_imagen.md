# Elección imagen de docker

## Criterios

Para la elección de la imagen seguiremos los siguientes criterios:

- La imagen que seleccionemos debe ser compatible con deno.
- También buscaremos que la imagen sea lo más ligera posible ya que eso significará que se reduce el número de herramientas instaladas que no serán usadas.
- Debe ser segura y que cuente con un equipo que ante cualquier problema ofrezca una rápida solución mediante cualquier actualización.

## Imágenes candidatas

Para la elección de las imágenes podemos optar por dos **opciones**:
- La primera opción sería instalar un sistema operativo y después instalar deno.
- La segunda opción sería instalar una imagen que ya cuente con deno instalado.

Siguiendo los criterios definidos previamente nos enfocaremos en la imagen que trae deno instalado.
Todas las opciones mencionadas incluyen deno, así que para elegir uno, los principal en lo que nos centraremos será en que sea lo más ligero posible.
Las imágenes que son compatibles con deno y están publicadas en Dockerhub son [Imágenes compatibles con deno](https://hub.docker.com/r/denoland/deno)

# Debian

[Debian](https://hub.docker.com/layers/denoland/deno/debian-1.38.0/images/sha256-7f20f22c661b237715dfa3e6aab1298a31608814c5097d3e8f1446fcfffe0915?context=explore) es una distribución de Linux compuesta íntegramente de software gratuito y de código abierto. Su tamaño es de 28.74 MB.
# CentOS

[CentOS](https://hub.docker.com/layers/denoland/deno/centos-1.11.4/images/sha256-13227d7c903a540d70c8db83a82a22766fcd28f3cc92ad932ec17662bda9f71d?context=explore) es un sistema operativo de código abierto, basado en la distribución Red Hat Enterprise Linux. Su tamaño es de 73.15 MB. 

# Ubuntu

[Ubuntu](https://hub.docker.com/layers/denoland/deno/ubuntu-1.11.5/images/sha256-068f4e1cea23914add77745131fa0d24e01b4776353b5e572456a6a00e5e8110?context=explore) es un sistema operativo Linux basado en Debian y basado en software libre. Su tamaño es de 26.01 MB.

# Alpine

[Alpine](https://hub.docker.com/layers/denoland/deno/alpine/images/sha256-4861cf3a58f0b71d5130de5c100e88057d60ea7a2ca8565f68b14471acd3c6ce) es una distribución Linux ultraligera y orientada a la seguridad. Su tamaño es de 3.09 MB.

## Selección

Siguiendo los criterios definidos arriba elegiré Alpine ya que es el que tiene menor tamaño.