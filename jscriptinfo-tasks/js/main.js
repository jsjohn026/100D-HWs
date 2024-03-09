
// _______________________________________

// Javascript.info Variables:
// Working with variables

let admin
let name

name = "John"

admin = name
// alert(admin)

// Giving the right name

let ourPlanet = "Earth"
let currentUser = "Jasmine"

// Uppercase const?
// A: yes the birthday constant could be capitalized since it is hard coded. Age should not be uppercased since it is a function without a hardcoded value


// _______________________________________

// Javascript.info Functions:

// Is "else" required?
// A: no there is no difference because the execution is the same without the else

// Rewrite the function using '?' or '||'

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
  // return (age > 18) || confirm('Did parents allow you?')
}

// Function min(a, b)

function min(a,b) {
  return ( a < b ) ? a : b
  // if (a < b) {
  //   return a;
  // } else {
  //   return b;
  // }
}

//  Function pow(x,n)

function pow(x, n) {
  // return x ** n
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result
}

let x = prompt("What is x?", '')
let n = prompt("What is n?", '')

if (n < 1) {
  alert(`Power ${n} must be a positive integer `)
} else {
  alert(pow(x, n));
}

// _______________________________________

// Javascript.info Function Expressions:
// No tasks



// _______________________________________

// Javascript.info Arrow Functions:

function ask(question, yes, no) {
  if(confirm(question)) yes();
  else no();
}
// let ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
  "Do you agree?",
  () => { alert("You agreed.") },
  () => { alert("You canceled the execution.") }
)