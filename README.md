# Guía de Ejecución — Aplicación Django, NextJs y Redis con Docker
A continuación se detallan los pasos necesarios para construir, ejecutar y visualizar la base de datos correctamente

## Clonar el repositorio

Clonar desde git el repositorio en su computadora

## Iniciar el contenedor

- docker-compose up --build

Este comando construirá la imagen según el docker-compose.yml, posteriormente dirigirse a **localhost:3000** para poder utilizar la aplicación

## Visualizar la base de datos en Redis

- docker-compose exec redis redis-cli

Ejecutar el comando anterior en el directorio principal del proyecto para poder acceder a Redis y visualizar los datos.
Ejecutar **_KEYS *_** dentro de RedisClient para poder ver la información almacenada en Redis

## Detener la aplicación

- docker-compose down

Para detener todos los contenedores al finalizar
