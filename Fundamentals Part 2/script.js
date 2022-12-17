"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can driver :D");

// ** Reserved words **
// const interface = "Audio";
// const private = 534;
// const if = 23; */
/* 
function logger() {
  console.log("My name is Paulo");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
 */

/* // FUNCTION DECLARATION (you can call the function after declaring the variable)
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1995);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1995);

console.log(age1, age2);
 */

/* // ARROW FUNCTION
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1995, "Paulo"));
console.log(yearsUntilRetirement(1990, "Luís"));
 */

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */