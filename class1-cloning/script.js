// deep copying/ cloning -> literally copying the values

// shallow copying -> passing the reference

const obj = {
  firstName: 'Hitesh',
  lastName: 'Marwaha',
  mother: {
    firstName: 'Simran',
    lastName: 'Marwaha',
  },
};

// spread operator

// const shallowObj = { a: 1, ...obj };

// console.log(shallowObj);

// console.log(obj === shallowObj);
// console.log(obj.firstName === shallowObj.firstName);
// console.log(obj.mother === shallowObj.mother);

// shallowObj.firstName = 'Hitu'; // not changed
// shallowObj.mother.firstName = 'Sim'; // changed

// console.log(shallowObj);

// console.log(obj);

// assign method

// const copyObj = Object.assign({ a: '1' }, obj);

// console.log(copyObj);

// How to make a deep copy

//1. using json
// console.log('original', obj);

// console.log(JSON.stringify(obj));

// const jsonObj = JSON.parse(JSON.stringify(obj));

// JSON.stringify -> it converts js object to json
// JSON.parse -> it converts/parses the json to js object

// console.log('deep copy', jsonObj);

// jsonObj.firstName = 'Hitu';
// jsonObj.mother.firstName = 'Sim';

//2. structured clone

const deepCopy = structuredClone(obj);
console.log('deepcopy', deepCopy);
deepCopy.mother.firstName = 'Sim';
console.log('original object', obj);
obj.lastName = 'SIj';
// console.log(obj.mother === deepCopy.mother);

// const newObj = {
//   greet: function () {
//     console.log('greet');
//   },
// };

let oldObj = {
  a: 10,
  b: 100,
  c: {
    thif: {
      v: 420,
    },
  },
};
// function deepCopy(c) {
//   let type = typeof c;
//   if (type !== 'object' || !c) return c;
//   let arr = Object.entries(c);
//   let arrDeepCopy = arr.map((key) => [key[0], deepCopy(key[1])]);
//   return Object.fromEntries(arrDeepCopy);
// }

// let newObj = deepCopy(oldObj);
// console.log(oldObj);
// console.log(newObj);
// // newObj.c.thif  =2222;

// if (oldObj.c.thif === newObj.c.thif) {
//   console.log('same memory ref');
// } else {
//   console.log('diferent memory ref');
// }
