// Working with object literals

// 1. Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson.

// {
//   key: value
// }
// function makePerson(name, age) {
//   const user = {};
//   user.name = name;
//   user.age = age;

//   return user;
// }

// var hitesh = makePerson('Hitesh', 21);
// console.log(hitesh.name);
// console.log(hitesh.age);

// 2. USING OBJECT.CREATE

// const obj = {
//   a: 1,
//   b: 2,
// };

// const x = Object.create(obj);

// console.log(x);
// console.log(x.a);

// Inside personStore object, create a property greet where the value is a function that logs "hello".

// const personStore = {
//   greet: () => {
//     console.log('hello');
//   },
// };

// personStore.greet();

// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

// function personFromPersonStore(name, age) {
//   const person = Object.create(personStore);
//   person.name = name;
//   person.age = age;

//   return person;
// }
// var hitesh = personFromPersonStore('Hitesh', 22);
// console.log(hitesh.name);
// console.log(hitesh.age);
// hitesh.greet();

// console.log(hitesh);

// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

// personStore.introduce = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// hitesh.introduce();

// 3. USING THE 'NEW' KEYWORD
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

// function PersonConstructor() {
//   this.greet = () => {
//     console.log('hello');
//   };
// }

//

// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

// function personFromConstructor(name, age) {
//   const person = new PersonConstructor();
//   // console.log(person);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// new and Object.create()
// new -> function constructor
// Object.create() -> an Object
// new -> all the inhereting methods are directly induced in the object
// Object.create() -> it sends the inhereting object properties in the prototype

// const hitesh = personFromConstructor('Hitesh', 22);
// console.log(hitesh);
// console.log(hitesh.name);
// console.log(hitesh.age);
// hitesh.greet();

// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

// PersonConstructor.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// hitesh.introduce();

// 4. USING ES6 CLASSES

// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.

// class PersonClass {
//   constructor(name) {
//     this.name = name;
//   }
//   greet = () => {
//     console.log('hello');
//   };
// }

// const person1 = new PersonClass('Hitesh');
// const person2 = new PersonClass('Abhilash');

// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method,DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.

// All developers are persons

// class DeveloperClass extends PersonClass {
//   constructor(name) {
//     super(name);
//     //super -> calls the constructor of the parents class
//   }
//   introduce = () => {
//     console.log(`Hello, World, my name is ${this.name}`);
//   };
// }

// var hitesh = new DeveloperClass('Hitesh');
// console.log(typeof hitesh);
// console.log(hitesh.name);
// hitesh.introduce();
// hitesh.greet();
