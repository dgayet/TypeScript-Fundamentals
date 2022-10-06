export {}; // esto me ayuda a que no haya conflictos con variables declaradas en otros archivos cualquiera

// declarar variables explicitando el tipo de dato 
let sport: string = 'football';
let id: number = 5;

let name = 'Danny';
name.toLowerCase();
console.log(name);

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);

name = 'Anna';

// declarar variables con tipo de dato union
let age: string | number;
age = 26;
age = '26';

// referencias en TS
let point1 = {x:1, y:1}; // objeto
let point2 = point1 // esto guarda una referencia de point1 en point2

point1.y = 100; // cambio point1.y de 1 a 100
console.log(point2.y); // cambio a 100. ambos apuntan al mismo espacio de memoria

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Danny', 'Anna', 'Bazza'];

let books: object[] = [
    {name: 'Pepe', author: 'Pepito'},
    {name: 'Sapiens', author: 'Wonka'}
];

let any_arr: any[] = ['hello', 1, true] // any basically reverts TS to JS

ids.push(6);

let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;


// Objects and Interfaces
interface Person {
    name: string;
    loc: string;
    isStudent: boolean;

    sayHi(name2: string): string;
    sayBye: (name2: string) => string;
}

let person1: Person = {
    name: 'Den',
    loc: 'Arg',
    isStudent: true,

    sayHi: function (name2: string) {
        return `Hi ${name2}, this is ${person1.name}`;
    },
    sayBye: (name2: string) => `Bye ${name2}, ${person1.name} greets you`,
};

console.log(person1.sayHi('Laura'));
console.log(person1.sayBye('Abel'));
