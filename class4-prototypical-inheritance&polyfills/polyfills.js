console.log('polyfills');

//

// let arr = [1, 2, 3];

// console.log(arr.map((item) => item));

//map -> prototype -> Array.prototype

// if(!Array.prototype.map){
//   Array.prototype.map = function(){

//   }
// }

// map
// filter
// reduce

//map

// let arr = [1, 2, 3];

// declare a polyfill for map method

// Array.prototype.map2 = function (callbackFn) {
//   console.log(this);

//   let ans = [];

//   for (let i = 0; i < this.length; i++) {
//     ans.push(callbackFn(this[i]));
//   }

//   return ans;
// };

// const newArr = arr.map2((item) => item * 3);
// console.log(newArr);

// const newArr = arr.map((item) => item * 2);
// console.log(newArr);

// for filter

// let arr = [2, 4, 5];

// Array.prototype.filter2 = function (callbackFn) {
//   console.log(this);

//   let ans = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callbackFn(this[i])) {
//       ans.push(this[i]);
//     }
//   }
//   return ans;
// };

// const newArr = arr.filter2((item) => item % 2 == 0);
// console.log(newArr);
// const newArr = arr.filter((item) => item % 2 == 0);
// console.log(newArr);

// reduce

// let arr = [1, 2, 3];
let arr = [];

Array.prototype.reduce2 = function (callbackFn, initialValue = 0) {
  console.log(this);

  let ans = initialValue;

  for (let i = 0; i < this.length; i++) {
    ans = callbackFn(ans, this[i]);
  }

  return ans;
};

// const sum = arr.reduce(
//   (accumulator, current_value) => accumulator + current_value,
//   0
// );
const sum = arr.reduce2((acc, cur) => acc + cur, 10);

console.log(sum);
