/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Paulo");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let paulo_maria = "PM";
let $function = 27;

let person = "paulo";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Paulo");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job1;

var job = "programmer";
job = "teacher";

lastName = "Rodrigues";
console.log(lastName); */

/* // Math operators
const now = 2022;
const agePaulo = now - 1995;
const ageMaria = now - 2005;
console.log(agePaulo, ageMaria);

console.log(agePaulo * 2, agePaulo / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Paulo";
const lastName = "Rodrigues";
console.log(firstName + " " + lastName);

// Assignement operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 100
x --; // x= x - 1 = 99
console.log(x);

// Comparison operators
console.log(agePaulo > ageMaria); // >, <, >=, <=
console.log(ageMaria >= 18);

const isFullAge = ageMaria >= 18;

console.log(now - 1991 > now - 2020); */

/* const now = 2022;
const agePaulo = now - 1995;
const ageMaria = now - 2005;

console.log(now - 1991 > now - 2020);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (agePaulo + ageMaria) / 2;
console.log(agePaulo, ageMaria, averageAge);
 */

/* const firstName = "Paulo";
const job = "teacher";
const birthYear = 1995;
const year = 2022;

const paulo =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(paulo);

const pauloNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(pauloNew);

console.log(`Just a regular string...`);

// Multiple lines string
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`); */

/* // DECISIONS
const age = 15;

if (age >= 18) {
  console.log("Maria can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Maria is too young. Wait another ${yearsLeft} years :)`);
}

// THIS IS CALLED A CONTROL STRUCTURE
 if() {

} else {

} 

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

/* // Type Conversion
const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Paulo"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coersion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" / "2");

let n = '1' + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // 10
 */

// 5 falsy values: 0, '', undefined, null, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Paulo"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Dont't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} */

/* const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 24 === 23 --> FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 9 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
 */

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//  console.log("Sarah is able to drive!");
// } else {
//  console.log("Someone else should drive...");
//  }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
 */

/* const day = "tuesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
} */

/* const age = 27;
//age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
 */

