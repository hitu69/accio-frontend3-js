// this
// call, apply, bind

// const obj = {
//   firstName: 'Hitesh',
//   lastName: 'Marwaha',
// };

// function fullName(city, country) {
//   // console.log(this);
//   return (
//     this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country
//   );
// }

// const obj2 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// // console.log(fullName('Delhi', 'India'));

// //call

// const x = fullName.call(obj2, 'Texas', 'USA');
// console.log(x);

// //apply

// console.log(fullName.apply(obj2, ['Texas', 'USA']));

// // bind

// // console.log(fullName.bind(obj2, 'Texas', 'USA')());

// const func = fullName.bind(obj2, 'Texas', 'USA');

// console.log(func);

// console.log(func());

// var a = 1;

// console.log(this);

// console.log(this === window);

// const obj = {
//   x: function () {
//     console.log(this === window);
//   },
// };

// obj.x();

// ques 1
// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24)());

// const a = sayHi.bind(person, 24);
// a()

// sayHi.bind(person, 24)()

//ques 2
// const age = 10;

// var person = {
//   name: 'Piyush',
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2));
// console.log(person.getAge.apply(person2));
// console.log(person.getAge.bind(person2));

//ques 3

// var status = 'global';

// setTimeout(() => {
//   const status = 'outside object';

//   const data = {
//     status: 'inside object',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // inside object

console.log(data.getStatus.call(this));
// }, 0);

var array = [1, 2];

var elements = [3, 4, 5];

// concatenate both the arrays

// apply

// we need a method to apply it to

// we need a reference

// we neegs the arguments/elements

// array.push(elements[0]);
// array.push(elements[1]);
// array.push(elements[2]);

//array.push -> method

// array.push.apply(array, elements);

//call
// array.push.call(array, ...elements);

// console.log(array);
