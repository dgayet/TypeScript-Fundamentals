# Primeros Pasos en Typescript

## Instalacion

* Primero, instalar **Node** de manera global.
* Una vez instalado Node, instalar el **compilador de Typescript**, con el siguiente comando:

`npm i -g typescript`

(quizas es necesario correrlo con sudo)

ya podemos crear un archivo de typescript y compilarlo. Los archivos de typescript tienen extension '.ts'


## Compilación

Los archivos de Typescript se compilan en Javascript.

* Para compilar un archivo hay que correr el siguiente comando:

`tsc file`

Esto va a crear un archivo de Javascript con el mismo nombre.

* También se puede especificar un nombre para el archivo de salida, por ejemplo:

`tsc file.ts --outfile output-file.js`

* Para compilar un archivo automaticamente, cada vez que se hace un cambio, se agrega el **flag watch**:

`tsc file.ts -w`

* Typescript reporta los errores en el editor de texto, pero compila independientemente de si haya errores o no.

## Ejecución 

Para correr el programa, se ejecuta el siguiente comando sobre el archivo generado en javascript:

`node file.js`


## Archivo de configuración

El archivo de configuración tiene que estar en la raíz del proyecto. 

* Para crear el archivo de configuración:

`tsc --init`

Esto crea un archivo que se llama `tsconfig.json` en la raíz del proyecto.

Ejemplo de algunas cosas que se pueden poner en el archivo de configuración 

```json
{
    "compilerOptions": {
        ...
        /* Modules */
        "target": "es2016", // Change to "ES2015" to compile to ES6
        "rootDir": "./src", // Where to compile from
        "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
        
        /* JavaScript Support */
        "allowJs": true, // Allow JavaScript files to be compiled
        "checkJs": true, // Type check JavaScript files and report errors
        
        /* Emit */
        "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
         "removeComments": true, // Don't emit comments
    },
    "include": ["src"] // Ensure only files in src are compiled
}
```

Para compilar según el archivo de configuración: `tsc` o `tsc -w` para mirar los cambios

Si en vez se especifica el input file `tsc file`, se ignora el archivo de configuración.


[Volver al menú principal](../README.md)