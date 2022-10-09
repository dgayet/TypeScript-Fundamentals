"use strict";
exports.__esModule = true;
// declarar variables explicitando el tipo de dato 
var sport = 'football';
var id = 5;
var name = 'Danny';
name.toLowerCase();
console.log(name);
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
name = 'Anna';
// declarar variables con tipo de dato union
var age;
age = 26;
age = '26';
// referencias en TS
var point1 = { x: 1, y: 1 }; // objeto
var point2 = point1; // esto guarda una referencia de point1 en point2
point1.y = 100; // cambio point1.y de 1 a 100
console.log(point2.y); // cambio a 100. ambos apuntan al mismo espacio de memoria
// Arrays
var ids = [1, 2, 3, 4, 5];
var names = ['Danny', 'Anna', 'Bazza'];
var books = [
    { name: 'Pepe', author: 'Pepito' },
    { name: 'Sapiens', author: 'Wonka' }
];
var any_arr = ['hello', 1, true]; // any basically reverts TS to JS
ids.push(6);
var person = ['Danny', 1, true];
person[0] = 100;
var person1 = {
    name: 'Den',
    loc: 'Arg',
    isStudent: true,
    sayHi: function (name2) {
        return "Hi ".concat(name2, ", this is ").concat(person1.name);
    },
    sayBye: function (name2) { return "Bye ".concat(name2, ", ").concat(person1.name, " greets you"); }
};
console.log(person1.sayHi('Laura'));
console.log(person1.sayBye('Abel'));
// Functions basics
