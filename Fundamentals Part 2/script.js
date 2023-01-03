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
/* 
const friends = ["SenpaiBot", "Rui-Zi", "Trainard"];

// Add Elements
const newLength = friends.push("DanyT");
console.log(friends);
console.log(newLength);

friends.unshift("Gabriel");
console.log(friends);

// Remove Elements
friends.pop(); // Last
console.log(friends);
const popped = friends.pop();
console.log(friends, popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Rui-Zi")); // Position of the element inside the array
console.log(friends.indexOf("SenpaiBot"));

console.log(friends.indexOf("DanyT")); // Element not in the array
console.log(friends.includes("SenpaiBot")); // True or false for elemnt inside array

if (friends.includes("SenpaiBot")) {
  console.log("You have a friend called SenpaiBot");
}
 */

/* const paulo = {
  firstName: "Paulo",
  lastName: "Rodrigues",
  age: 2022 - 1995,
  job: "deliveryman",
  friends: ["SenpaiBot", "Trainard", "Rui-Zi"],
};
console.log(paulo);

console.log(paulo.lastName); // Dot notation
console.log(paulo["lastName"]);

const nameKey = "Name";
console.log(paulo["first" + nameKey]); // Bracket notation
console.log(paulo["last" + nameKey]);

// console.log(paulo.'last' + nameKey); * Doesn't work with dot notation
const interestedIn = prompt(
  "What do you want to know about Paulo? Choose between firstName, lastName, age, job or friends."
);

if (paulo[interestedIn]) {
  console.log(paulo[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job or friends."
  );
}

paulo.location = "Portugal";
paulo["twitter"] = "@NeticDev";
console.log(paulo);

// Challenge
// "Paulo has 3 friends, and his best friend is called SenpaiBot"

console.log(
  `${paulo.firstName} has ${paulo.friends.length} friends and his best friend is called ${paulo.friends[0]}`
);
 */

/* const paulo = {
  firstName: "Paulo",
  lastName: "Rodrigues",
  birthYear: 1995,
  job: "deliveryman",
  friends: ["SenpaiBot", "Trainard", "Rui-Zi"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   //  console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(paulo.calcAge());

console.log(paulo.age);
console.log(paulo.age);
console.log(paulo.age);
// console.log(paulo["calcAge"](1995));

// Challenge
console.log(paulo.getSummary());
 */

/* console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️"); */

// for loop keeps running while condition is TRUE
/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
 */

/* const paulo = [
  "Paulo",
  "Rodrigues",
  2022 - 1995,
  "deliveryman",
  ["RodpaDev", "Trainard", "Rui-Zi"],
  true,
];

const types = [];

// console.log(pauloArray[0])
// console.log(pauloArray[1])
// console.log(pauloArray[2])
// console.log(pauloArray[3])
// console.log(pauloArray[4])
// pauloArray[5] does NOT exist

for (let i = 0; i < paulo.length; i++) {
  // Reading from paulo array
  console.log(paulo[i], typeof paulo[i]);

  // Filling types array
  // types[i] = typeof paulo[i];

  types.push(typeof paulo[i]);
}

console.log(types);

const years = [1995, 2012, 1974, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < paulo.length; i++) {
  if (typeof paulo[i] !== "string") continue;

  console.log(paulo[i], typeof paulo[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < paulo.length; i++) {
  if (typeof paulo[i] === "number") break;

  console.log(paulo[i], typeof paulo[i]);
}

 */


