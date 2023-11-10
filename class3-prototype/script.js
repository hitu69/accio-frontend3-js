// prototype

// why are we using prototypes
// you have an object
// obj.__proto__ = {} // prototypical inheritance

const obj = {
  city: 'Delhi',
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

obj.toString();

// __proto__

// we have an object
// -> we want to see what all extended properties (prototypes) it has

//__proto__ is a property of that Object that exposes the hiddeb prototype properties to us so that we can see those properties and change them

console.log(obj);

const obj2 = {};
console.log(obj2);

// if we have to find the prototype of an object,

console.log(obj.__proto__);
console.log(Object.prototype);

// let obj = new Object()

// prototype -> is for a function
// __proto__ -> is for object

console.log(typeof obj);
console.log(typeof Object);

console.log(obj.__proto__ === Object.prototype);
console.log(obj2.__proto__ === Object.prototype);

// the prototype of prototype of object is null.

console.log(obj.__proto__.__proto__);

// let arr = [1, 2, 3];

// console.log(arr);

console.log(obj.greet.__proto__);
console.log(Function.prototype);

console.log(typeof obj.greet.__proto__);

// practical

const obj3 = {
  firstName: 'Hitesh',
  lastName: 'Marwaha',

  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(obj3.getFullName.__proto__);
console.log(Function.prototype);

//

console.log(obj3.getFullName.__proto__ === Function.prototype);

console.log(obj3.getFullName.__proto__.__proto__);

console.log(obj3.getFullName.__proto__.__proto__.__proto__);

let arr = [1, 2, 3];

//Array.prototype -> is an object

//.proto -> this will be an proto of object

let object = {
  name: 'Hitesh',
  city: 'Delhi',
  getIntro: function () {
    console.log(this.name + ' from ' + this.city);
  },
};

let object2 = {
  name: 'Harry',
};

//
object2.__proto__ = object;

console.log(object2.city);

console.log(object.getIntro());
console.log(object2.getIntro());
