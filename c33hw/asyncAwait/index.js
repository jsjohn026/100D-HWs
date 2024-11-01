import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
  .then(res => res.json())
  .then(use => console.log('😛', user.title))
  .catch(err => console.error('😭', err))

console.log('🥪 Synchronous');

// // L1
// console.log('🥪 Synchronous 1');

// // L2
// setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// // L3
// Promise.resolve().then(_ => console.log('🍍 Promise'));

// // L4
// console.log('🥪 Synchronous 4');