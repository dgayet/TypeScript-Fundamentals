# Node.js
[Volver al menú principal](../README.md)

Node.js es un entorno de *ejecución* para la capa de servidor basado en Javascript. Es lo que posibilita que programas en Javascript puedan ser ejecutados fuera de un browser.

Características principales:

* Event driven --> non-blocking
* Single threaded arch
* Escalable
* Cross-platform


## Modules

Los módulos son librerías que pueden utilizarse en una aplicación Node.js para incluir un set de funciones.

Para incluir un módulo se utiliza la función `require()`.

Algunos de los módulos más conocidos son:

* `http`: para crear servers http 
* `util`: funciones varias
* `fs`: para hacer file processing
* `url`: url parsing
* `querystring`
* `stream`: para manejar streaming data
* `zlib`: comprimir y descomprimir archivos

## Console

Es un módulo que se utiliza para debuggear que es similar a la consola de Javscript de los browsers. 
Imprime mensajes hacia stdout y stderr.

Ejemplo de utilización:

```js
console.log('hello world');
```

## Cluster
Módulo que permite el multi-threading creando child-processes.


## Global
Los objetos Global están disponibles en todos los modulos. Son funciones, modulos, strings, etc. Algunos son:

* `__dirname`: nombre del directorio de la aplicación
* `__filename`: nombre de la aplicación
* `require`: se usa para importar modulos, archivos locales, y JSON

[Volver al menú principal](../README.md)

