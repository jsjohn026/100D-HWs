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

// let number1 = 5;
// let number2 = 3;

// // // TODO: type your code here (and nowhere else!)

// let switcher
// switcher = number1
// number1 = number2
// number2 = switcher

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5
// console.log(switcher); 
// Add the necessary code to swap the values of variables number1 and number2.

// !!! tip

// This exercise has several valid solutions. You may use more than two variables to solve it.

// ____________________________________________

// CH 03 ADD CONDITIONS

// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const day = prompt("What day is it?");

// switch (day.toLowerCase()) {
//   case "monday":
//     console.log("Tomorrow is Tuesday");
//     break;
//   case "sunday":
//     console.log("Tomorrow is Monday");
//     break;
//   case "tuesday":
//     console.log("Tomorrow is Wednesday");
//     break;
//   case "wednesday":
//     console.log("Tomorrow is Thursday");
//     break;
//   case "thursday":
//     console.log("Tomorrow is Friday");
//     break;
//   case "friday":
//     console.log("Tomorrow is Saturday");
//     break;
//   case "saturday":
//     console.log("Tomorrow is Sunday");
//     break;
//   default:
//     console.log("That is not a valid day")  
// }

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

// const num1 = Number(prompt("Provide a number"));
// const num2 = Number(prompt("Provide another number"));

// if (num1 > num2) {
//   console.log("The first number is bigger.")
// } else if (num1 < num2) {
//   console.log("The second number is bigger.")
// } else if (num1 === num2) {
//   console.log("The numbers are equal.")
// } else {
//   console.log("That is not a valid number.")
// }

// Final values
// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

// Initial values	nb1 final value	nb2 final value	nb3 final value
// nb1=nb2=nb3=4			
// nb1=4,nb2=3,nb3=2			
// nb1=2,nb2=4,nb3=0			
// Check your predictions by executing the program.

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// const monthInteger = Number(prompt("Provide the number of a month:"));

// switch (monthInteger) {
//   case 1 || 3 || 5 || 7 || 8 || 10 || 12 :
//     console.log("There are 31 days in this month.");
//     break;
//   case 2 || 4 || 6 || 9 || 11 :
//     console.log("This month has 30 days or less.");
//     break;
//   default: 
//     console.log("This is not a valid month.");
// }

// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s should give 14h18m0s
// 6h59m59s should give 7h0m0s
// 23h59m59s should give 0h0m0s (midnight)

const inputTime = prompt("Provide the time in hours, minutes, and seconds:")
