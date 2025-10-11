#!/bin/bash

echo "Esperando a que Redis esté disponible..."
while ! nc -z redis 6379; do
  sleep 0.1
done
echo "Redis está disponible"

echo "Aplicando migraciones de Django..."
python manage.py migrate --noinput

echo "Iniciando servidor Django..."
exec "$@"