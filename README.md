# ego

## Paso 1, Laravel [Requerido].

Para los siguientes comandos debes estar situado en el directorio "/api".

`$ composer install`

Migrar base de datos y seeders

`$ php artisan migrate --seed`

Ejecutar servidor:

`php artisan serve --port=8000 --host=localhost` (el cliente utiliza el puerto 8000 sobre el localhost)

¡Listo!

## Paso 2, React (Opcional).

Puede acceder directamente a https://alantoledo007.github.io/ego o continuar con los pasos de instalación.

**importante: Es deploy es de React, para poder correrlo correctamente necesitará instalar y correr un servidor local
con Laravel (paso 1). **

continuando con la instalación del cliente (React)...

Debes estar situado en el directorio "/client".

`yarn` o `npm install`

Ahora solo queda ejecutar el servidor.

`yarn start` o `npm start`

¡Listo!

## Ya deberías correr "EGO"

Url del server: **http://localhost:8000**
y la del cliente: **http://localhost:3000/ego/** o **https://alantoledo007.github.io/ego/**



