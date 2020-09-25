# ego

## Paso 1, Laravel.

Para los siguientes comandos debes estar situado en el directorio "/api".

`$ composer install`

Migrar base de datos y seeders

`$ php artisan migrate --seed`

Ejecutar servidor:

`php artisan serve --port=[port] --host=[ipaddress]` (Si nó especifica un puerto ni un host, los valores por defectos serán: 8000 y localhost)

¡Listo!

## Paso 2, React.
-----
**importante** Para que todo funcione se necesitan que hambos servidores funcionen en paralelo.
-----

Ahora debes estar situado en el directorio "/client".

`yarn` o `npm install`

Ahora solo queda ejecutar el servidor.

`yarn start` o `npm start`

¡Listo!

## Ya deberías correr "EGO"

Por defecto la URL del server es: **http://localhost:8000**
y la del cliente: **http://localhost:3000**



