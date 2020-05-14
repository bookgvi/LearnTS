import { Tesla } from './Model/Tesla';
import { Person } from './Decorators/constructor';

const tesla: Tesla = new Tesla('S123', 'SUV', 12, 200);
// console.log(tesla.getInfo);

const tom = new Person('Tom')
console.log(tom.getName, tom.getAge);
const bob = new Person('Bob', 22)
console.log(bob.getName, bob.getAge, bob['newAge']);
