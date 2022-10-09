# Functions
[Volver al menú principal](../README.md)

Hay dos tipos de sintaxis para declarar funciones:

* JS Style (pero también se puede especificar el tipo de dato): 

```js
function circle(diam: number): string {
    return 'The circumference is' + Math.PI * diam;
}
```

donde `function` denota que se está declarando una función, `circle` es el nombre de la función, `diam: number` refiere al argumento `diam` con tipo de dato `number` y `string` se refiere al tipo de dato de retorno.

* ES6 arrow function:

```ts
const circle = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};
```
Con esta notación no es necesario explicitar que `circle` es una función, sino que TS lo infiere. Lo mismo sucede con el tipo de dato de retorno, entonces se puede declarar la función de las siguientes maneras:

```ts
// Using explicit typing 
const circle: Function = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle = (diam: number) => {
  return 'The circumference is ' + Math.PI * diam;
};
```

Los argumentos opcionales se denotan con un `?`, por ejemplo:

```ts
const func : function = (x: number, y: number, z?: number) => {
    //body
}
```




[Volver al menú principal](../README.md)
