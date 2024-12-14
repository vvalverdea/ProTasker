#!/bin/bash

# Habilitar el modo de error
set -e

echo "Dirigiéndose al directorio del frontend..."
cd ./frontend/client

echo "Ejecutando npm run build..."
npm run build

echo "Regresando al directorio raíz..."
cd ../../backend

echo "Iniciando el servidor backend..."
node server.js
