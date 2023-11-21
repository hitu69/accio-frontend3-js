// console.log('start');

// setTimeout(function cb() {
//   console.log('in');
// }, 0);

// console.log('end');

// let value = 1;

// function doSomething(callbackFn) {
//     callbackFn();
// }

// doSomething(function cb() {
//   value = 2;
// });

// console.log(value);

let value = 1;

function doSomething(callbackFn) {
  setTimeout(function cb2() {
    callbackFn();
  }, 0);
}

doSomething(function cb() {
  value = 2;
});

console.log(value);
