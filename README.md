[![development](https://github.com/pabloecarranza/taskeep/actions/workflows/development.yml/badge.svg?branch=production)](https://github.com/pabloecarranza/taskeep/actions/workflows/development.yml)

# TASKEEP App

BASE DE DATOS: es una base de datos relacional creada en PostgreSQL con llaves foraneas (tablas intermedias) para almacenar todos los datos necesarios

BACKEND: El backend lo hago en NodeJS con ExpressJS y Sequelize como ORM para el manejo de la base de datos y JWT para el inicio de sesion

FRONTEND: inicializado con Vite para un mejor rendimiento eligiendo React como un marco principal y la interfaz de usuario de chakraUI como biblioteca de CSS. Para obtener datos del backend, elijo RTK Query para administrar datos en caché. Redux Toolkit para el estado global de la información.

TESTING: eh agregado de manera exitosa Test Unitarios con Vitest y React Testing library para todos los componentes como asi tambien a los customHooks, reducers y todas los consumos de API y flujos de Redux llegando a mas del 90% del coverage en testing

DESPLIGUE: la base de datos está en AWS en el servicio RDS, el backend disponible en Railway y el frontend está en Vercel
