'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    return this.name
}

var brandon = new Person('Brandon', 25);

let animal = {
    name: 'wuwuwu',
    getName: function() {
        return this.name
    }
}

brandon.__proto__ = animal


// console.log(brandon.getName())
// console.log(Person)
// console.log(Person.prototype)
// console.log(Object.getPrototypeOf(brandon))
// console.log(brandon.__proto__)
// console.log(brandon.constructor)
// console.log(Object.getPrototypeOf(brandon))

// let car = {
//     brand: 'a',
//     getBrand: function () {
//         console.log(this instanceof Object)
//         return this.brand
//     }
// }

let bike = {
    brand: 'b'
}

// let brand = car.getBrand.bind(bike)

// console.log(brand())

// console.log(car instanceof Object)

// function Car(brand) {
//     this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//     return this.brand;
// }

// let car = new Car('Honda');
// console.log(car.getBrand());

// console.log(bike.__proto__.constructor.getPrototypeOf(bike))

// function test(params) {
//     console.log(params)
// }

// console.log(typeof test)
// var personActions = {
//     getFullName() {
//       return this.firstName + ' ' + this.lastName;
//     },
//   };
  
// function createPerson(firstName, lastName) {
//     let person = Object.create(personActions)
//     person.firstName = firstName
//     person.lastName = lastName
//     return person;
// }

// var person1 = createPerson('john', 'pang')

// console.log(person1)

// let display = ({firstName: fname, lastName: lname}) => console.log(`${fname} ${lname}`);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// display(person);

class Person2 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

var person1 = new Person2('test')

console.log(person1._name)