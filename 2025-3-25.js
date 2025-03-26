function Person(name, age) {
    this.name = name;
    this.age = age;
}

var brandon = new Person('Brandon', 25);

console.log(Person)
console.log(Person.prototype)
console.log(Object.getPrototypeOf(brandon))
console.log(brandon.__proto__)