/* 
THE SUM OF A RANGE
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

// Your code here.
// function range(start, end) {
//   let allNums = [];
//   for (let i = start; i <= end; i++) {
//     allNums.push(i)
//   }

//   return allNums;
// }

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]    
//   }
//   return sum;
// }

// function range(start, end, step = 1) {
//   let allNums = [start];
//   if (step < 0) {
//     for (let i = start; i > end; i--) {
//       allNums.push(i + step)
//     }
//   } else {
//     for (let i = start; i < end; i++) {
//       allNums.push(i + step)
//     }
//   }

//   return allNums;
// }

// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55


/* 
REVERSING AN ARRAY
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// Your code here.

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
// _________________________
*/

/*
Reversing an array

For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

// Your code here.

function reverseArray(arr) {
  let reversed = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    reversed.unshift(arr[i])
  }
  return reversed
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i <= Math.floor(arr.length/2); i++) {
    let element = arr[i]
    arr[i] = arr[ arr.length - i - 1]
    arr[arr.length - i - 1] = element
  }
  return arr
}

// let myArray = ["A", "B", "C"];
// console.log(reverseArray(myArray));
// → ["C", "B", "A"];
// console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
// 
// 
// 
// 
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]