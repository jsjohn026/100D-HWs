// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

const musketeers = [ "Athos", "Porthos", "Aramis" ]

// Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
  // console.log(musketeers[i])
}

// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan")
// console.log(musketeers)

// Shows each array element using the forEach() method.

musketeers.forEach(musketeer => {
  // console.log(musketeer)
});

// Remove poor Aramis.
musketeers.splice(2, 1)
// Shows each array element using a for-of loop.

for ( const musketeer of musketeers) {
  console.log(musketeer)
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];


// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];


// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".