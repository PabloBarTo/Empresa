# Fantasy
Soy un jugador de la liga fantasy que es un juego en el que tienes que formar una plantilla con once jugadores que obtienen su puntación en función del partido que jueguen con su equipo, es decir, de lo bien o mal que jueguen, y gana la persona que tenga más puntos al final de todas las jornadas. Para formar esa plantilla se dispone de un presupuesto que es limitado. Debido a esto cada semana no sé qué jugadores debo comprar para ser el que más puntos consiga cada jornada.

## Clase Equipo

La clase equipo representa la entidad de este proyecto. Aquí sería donde se encontraría la lógica de negocio principal del proyecto.

### Comprobación de sintaxis

Para realizar la comprobación de la sintaxis de esta entidad tendremos que ejecutar en la terminal la siguiente orden


```bash
dn check
```

Para realizar la comprobación de la selección de jugadores tendremos que ejecutar en la terminal el siguiente comando
```bash
dn test
```

Para construir la imagen ejecutamos el siguiente comando:
```bash
sudo docker build -t pablobarto/empresa .
```

Para ejecutar los tests en el contenedor usamos el siguiente comando:
```bash
docker run  -tv `pwd`:/app/test pablobarto/empresa
```

Para ver la imagen puedes seguir el siguiente enlace [Mi imagen](https://hub.docker.com/r/pablobarto/empresa)

## Claves de github

![Clave Github](./docs/clave_ssh.png)

## Correo y usuario

![Correo y usuario](./docs/datos.png)

## Mis datos

![Mis datos](./docs/yo.png)

## Historias de usuario

![Historias de usuario](./docs/historias_de_usuarios)

## Milestones

![Milestones](./docs/milestones)

## Runtime

![Runtime](./docs/runtime.md)

## Gestor de dependencias

![Gestor de dependencias](./docs/gestor_dependencias.md)

## Gestor de tareas

![Gestor de tareas](./docs/gestor_tareas.md)

## Gestor de test
![Gestor de test](./docs/elección_test_runner.md)

## Imagen
![Imagen](./docs/eleccion_imagen.md)