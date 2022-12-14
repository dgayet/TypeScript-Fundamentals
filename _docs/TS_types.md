# Tipos de datos
[Volver al menú principal](../README.md)

## Primitive

*Los tipos primitivos son 7 tipos de datos:

    * string
    * number
    * bigint
    * boolean 
    * undefined
    * null
    * symbol

No son objetos.
Son inmutables (tipado estatico).

 >> En Javascript todos los valores primitivos (salvo null y undefined) tienen objetos equivalentes que son wrappers de los primitivos. Son `String`, `Number`, `BigInt`, `Boolean`, `Symbol`. Estos wrappers dan los metodos para que los primitivos puedan ser manipulados.

* Podemos setear el tipo de datos que queremos que una variable tenga, agregando `: type`, por ejemplo:

`let id: number = 5;`


## Union

* Los tipos de datos pueden ser **uniones**, esto es, a una variable se le puede asignar más de un tipo:

```ts
let age: string | number;
age = 26;
age = '26'; 
```

## Reference

En JS casi todo es un objeto. Las strings, numbers y booleans se pueden definir como objetos si se utiliza el keyword `new`:

```js
let firstname = new String('Danny');
console.log(firstname);
```

Los objetos funcionan por referencia, por ejemplo:

```ts
// referencias en TS
let point1 = {x:1, y:1}; // objeto
let point2 = point1 // esto guarda una referencia de point1 en point2

point1.y = 100; // cambio point1.y de 1 a 100
console.log(point2.y); // cambio a 100. ambos apuntan al mismo espacio de memoria
```

## Arrays

* sintaxis: `let ids: number[] = [1, 2, 3, 4, 5];`.

* Pueden definirse con: 
    * único tipo, en cuyo caso definimos: `let arr: number[] = [ ... ]`
    * tipo union: `let arr: (string | number | boolean | object)[] = [ ... ]`
    * con tipo cualquiera (basicamente revierte TS a JS): `let arr: any = [ ... ]`

### Tuple

Es un tipo particular de array que tiene **tamaño fijo y tipos de datos conocidos**. Son más estrictos que los arrays regulares.

```ts
let person: [string, number, boolean] = ['Danny', 1, true];
```

En este caso, `person[1]` solo puede ser una string, `person[2]` un numero, y `person[3]` un boolean.


## Objects

Los objetos se declaran entre corchetes (`{}`) y tienen que tener las propiedades y tipos de datos correctos.

```ts
// declaro una VARIABLE llamada person con un objeto especifico
let person: {
    name: string;
    location: string;
    isStudent: boolean;
}

// se le asigna con los tipos de datos correctos y propiedades necesarias.
person = {
    name: 'Danny',
    location: 'UK',
    isStudent: true;
}

person = {
    name: 'john',
    location: 'US',
} // error: falta isStudent

/// puedo asignar particularmente de la siguiente manera:
person.isStudent = false;
```

### Signature

La firma de un objeto se define con `interface`. Es como definir una clase.

```ts
interface Person {
    name: string;
    loc: string;
    isStudent: boolean;
}

let person1: Person = {
    name: 'Den',
    loc: 'Arg',
    isStudent: true,
};
```

* Se pueden declarar propiedades funciones (metodos?) con firmas de [funciones](./TS_functions.md). Se puede usar sintaxis de Javascript (`sayHi`) o ES6 arrow functions (`sayBye`):

```ts
interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Den'));
console.log(sayStuff.sayBye('Den'));
```

## Type Aliases

Se utilizan para reducir la duplicación de código, son similares a las `interface`.

```ts
type StringOrNumber = string | number

type PersonObject = {
    name: string;
    id: StringOrNumber
}
```

### Interfaces vs Type Aliases

## The DOM and type casting

## Classes

La sintaxis es de la siguiente manera:

```ts
class Person {
    // attributes
    name: string;
    age: number;
    isStudent: boolean;

    // methods
    constructor(n: string, a: number, s: boolean) {
        this.name = n;
        this.age = a;
        this.isStudent = s;
    }

    sayHello() {
        return 'Hi, my name is ${this.name} and I am ${this.age} years old'
    }
}

const person1 = new Person('Den', 24, true);
console.log(person1.sayHello());
```

A las propiedades de una clase se le pueden agregar modificadores:

* `readonly`: la propiedad es inmutable, solo se puede leer
* `private`: solo se puede acceder/modificar dentro de la clase
* `protected`: las pueden acceder/modificar la clase y sus subclases
* `public`: se pueden acceder y modificar en cualquier lugar


### composición de clases

Se puede utilizar el modificador `extends`, de la siguiente manera:

```ts
class Programmer extends Person {
    programmingLanguages: string[];

    constructor(
    name: string,
    isCool: boolean,
    email: string,
    pets: number,
    pL: string[]
  ) {
    // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
    super(name, isCool, email, pets);
    this.programmingLanguages = pL;
  }
}
```

### interfaces en clases


[Volver al menú principal](../README.md)
