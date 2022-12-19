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

/* const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1995, "Paulo"));
console.log(yearsUntilRetirement(1950, "Joe"));
 */

/* const friend1 = "SenpaiBot";
const friend2 = "Rui-Zi";
const friend3 = "Trainard";

const friends = ["SenpaiBot", "Rui-Zi", "Trainard"];
console.log(friends);

const y = new Array(1996, 1995, 1997, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Philipe";
console.log(friends);
// friends = ["Bob", "Maria"]; *Can't change all the array*

const firstName = "Paulo";
const paulo = [firstName, "Rodrigues", 2022 - 1995, "deliveryman", friends];
console.log(paulo);
console.log(paulo.length);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1995, 2000, 2005, 2003];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
 */
