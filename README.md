# Guía de Ejecución — Aplicación Django con Docker y PostgreSQL
A continuación se detallan los pasos necesarios para construir, ejecutar y aplicar migraciones correctamente

## Requisitos Previos

Antes de iniciar, asegurese de tener instalados los siguientes componentes en su sistema:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Acceso a una terminal (Linux, macOS o WSL en Windows)

## Pasos para iniciar el contenedor
- docker-compose up --build -d

Este comando construirá la imagen según el Dockerfile y ejecutará en segundo plano

- docker-compose exec web python manage.py migrate

Este comando aplicará las migraciones existentes en el proyecto dentro del contenedor

- docker-compose exec web python manage.py createsuperuser

Este comando (opcional) nos sirve para crear un superusuario y acceder a la consola de administración

## Otros comandos útiles
- docker-compose logs -f

Para ver los logs de la aplicación en tiempo real

- docker-compose down

Para detener todos los contenedores al finalizar

