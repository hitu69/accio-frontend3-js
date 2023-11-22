// ques 1

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log('end');

// first we run synchronous code
// then we run asynchronous code

//ques 2

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log('end');

//ques 3

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log('end');

// ques 4

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// // states -> pending, resolved, rejected
// promise1.then((res) => {
//   console.log(2);
// });

// console.log('end');

// ques 5
// console.log('start');

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success');
//   });

// console.log('middle');

// fn().then((res) => {
//   console.log(res);
// });

// console.log('end');

// ques 6

// console.log('start');

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });
// console.log('end');

// higher priority task -> microtask queue (Promise)
// lower priority task -> callback queue (setTimout)

// ques 7

// console.log('start');

// setTimeout(() => {
//   console.log('setTimeout');
// });

// Promise.resolve().then(() => {
//   console.log('resolve');
// });

// console.log('end');

// ques 8

// const promise = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log('timerStart');
//     resolve('success');
//     console.log('timerEnd');
//   }, 0);

//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// ques 9

// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log('timer2');
// }, 0);

// ques 10

// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//   });
// }, 4);

// const timer2 = setTimeout(() => {
//   console.log('timer2');
// }, 0);
