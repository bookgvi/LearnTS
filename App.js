"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tesla_1 = require("./Model/Tesla");

var constructor_1 = require("./Decorators/constructor");
var tesla = new Tesla_1.Tesla('S123', 'SUV', 12, 200);
// console.log(tesla.getInfo);
var tom = new constructor_1.Person('Tom');
console.log(tom.getName, tom.getAge);
var bob = new constructor_1.Person('Bob', 22);
console.log(bob.getName, bob.getAge, bob['newAge']);
