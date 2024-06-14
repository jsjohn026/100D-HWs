// CH 01 321 CODE:
// Write a program that displays your name and age. Here's the result for mine.

// Expected execution result

// console.log("Jasmine");
// console.log(44);

// Minimalistic calculator
// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);

// Values prediction
// Observe the following program and try to predict the values it displays.

// console.log(4 + 5);
// 9
// console.log("4 + 5");
// "4 + 5"
// console.log("4" + "5");
// "45"
// Check your prediction by executing it.
// ____________________________________________

// CH 02 PLAY WITH VARIABLES
// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
// const firstName = prompt("What is your first name?")
// const lastName = prompt("What is your last name?")
// alert(`Welcome ${firstName} ${lastName}!`)

// Final values
// Observe the following program and try to predict the final values of its variables.

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b; 
// const d = a * b + b; 
// const e = a * (b + b); 
// const f = a * b / a; 
// const g = b / a * a; 
// const c = a + b * b; (102)
// const d = a * b + b; (30)
// const e = a * (b + b); (40)
// const f = a * b / a; (10)
// const g = b / a * a; (10)
// console.log(a, b, c, d, e, f, g);
// Check your prediction by executing it.

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
// const rawPrice = Number(prompt("What is the raw price?"))
// const finalPrice = rawPrice + (rawPrice * .206)
// alert(`The final price is $${finalPrice}.`)

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// !!! info
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

// const temperature = Number(prompt("What is a temperature in Celsius?"))
// const convertedTemperature = (temperature * 9/5) + 32
// document.querySelector('span').innerText = `The converted temperature is ${convertedTemperature} F.`


// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// // TODO: type your code here (and nowhere else!)

let switcher
switcher = number1
number1 = number2
number2 = switcher

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// console.log(switcher); 
// Add the necessary code to swap the values of variables number1 and number2.

// !!! tip

// This exercise has several valid solutions. You may use more than two variables to solve it.

