// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject

'use strict';

// let promise = new Promise((fulfill, reject) => {
//   fulfill('SECRET VALUE');
// });

// let promise1 = Promise.resolve('SECRET VALUE');
// promise1.then(console.log);

let promise2 = Promise.reject(new Error('SECRET VALUE'));
promise2.catch(console.log);


// console.log('MAIN PROGRAM');