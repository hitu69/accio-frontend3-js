//ques 1
// const object = {
//   message: 'Hello, World!',

//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };

// console.log(object.getMessage()); // output

// ques 2
// const obj = {
//   a: () => {
//     console.log(this);
//   },
//   b() {
//     console.log(this);
//   },
// };

// obj.a();
// obj.b();

//ques 3

// const object = {
//   who: 'shs',

//   greet() {
//     return `Hello, ${this.who}`;
//   },

//   farewell: () => {
//     return `Goodbye, ${this.who}`;
//   },
// };

// console.log(object.greet());
// console.log(object.farewell());

// ques 4

// 1. this is the global object in a function invocation

// var length = 4;

// function fn() {
//   console.log(this.length); //output
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(fn);

// ques 5

// var name = 'mmt';

// var myObject = {
//   name: 'myObject',
//   property: this.name,
//   regularFunction: function () {
//     return this.name;
//   },
//   arrowFunction: () => {
//     return this.name;
//   },
//   iife: (function () {
//     return this.name;
//   })(),
// };
// //iife ->
// console.log(this.name);
// console.log(myObject.name);
// console.log(myObject.property);
// console.log(myObject.iife);
// console.log(myObject.regularFunction());

var a = 'hi';
const sum = (a, b) => {
  console.log(this === window);
  this.myNumber = 20;
  return a + b;
};

sum(15, 16);
console.log(this);

console.log(window.myNumber);
