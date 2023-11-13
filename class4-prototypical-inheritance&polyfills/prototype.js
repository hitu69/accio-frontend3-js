// console.log('hi');

// __proto__
// its a hidden property for every object
// to access the prototype of that object

// const o = {
//   a: 1,
//   b: 2,

//   __proto__: {
//     b: 3,
//     c: 4,

//     __proto__: {
//       d: 5,
//     },
//   },
// };

// console.log(o);

// console.log(o.a); // 1
// console.log(o.b); // 2,3
// console.log(o.c); //4

// console.log(o.d);

// {a:1,b:2} --> {b:3,c:4} -> {d:5} -> Object.prototype -> null

// Inheriting methods/functions

const parent = {
  value: 1,
  method() {
    return this.value;
  },
};

console.log(parent.method());

const child = {
  __proto__: parent,
};

console.log(child);

// console.log(child.method());

child.value = 3;

console.log(child);

console.log(child.method());
console.log(parent.method());
