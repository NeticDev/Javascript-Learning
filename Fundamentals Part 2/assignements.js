"use strict";

// ASSIGNEMENT 1 - Functions

/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const portugal = describeCountry("Portugal", 10, "Lisboa");
console.log(portugal);

const japan = describeCountry("Japan", 126, "Tokyo");
console.log(japan);

const luxembourg = describeCountry("Luxembourg", "0,6", "Luxembourg");
console.log(luxembourg);
 */

// ASSIGNEMENT 2 - Function Declarations vs. Expressions

// Function Declaration
/* function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} million people, so its about ${percentage}% of the world population.`;
}

const country1 = percentageOfWorld1("Portugal", 11);
const country2 = percentageOfWorld1("China", 1441);
const country3 = percentageOfWorld1("Russia", 143);
console.log(country1);
console.log(country2);
console.log(country3);

// Function Expression
const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population} million people, so its about ${percentage}% of the world population.`;
};

percentageOfWorld2("Portugal", 11);
percentageOfWorld2("China", 1441);
percentageOfWorld2("Russia", 143);
console.log(country1);
console.log(country2);
console.log(country3);

// Arrow Functions
const percentageOfWorld3 = (country, population) =>
  `${country} has ${population} million people, so its about ${
    (population / 7900) * 100
  }% of the world population.`;

percentageOfWorld3("Portugal", 11);
percentageOfWorld3("China", 1441);
percentageOfWorld3("Russia", 143);
console.log(country1);
console.log(country2);
console.log(country3); */

/* // ASSIGNEMENT 3 - Functions Calling Other Functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);

  return `${country} has ${population} million people, so its about ${percentage}% of the world population.`;
}

console.log(describePopulation("Portugal", 11));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Russia", 143));
 */

/* // ASSIGNEMENT 4 - Introduction to Arrays
const populations = [11, 1441, 143, 331];

console.log(populations.length - 1 === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
 */

// ASSIGNEMENT 5 - Basic Array Operations(Methods)
/* const neighbours = ["Belgium", "France", "Germany"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop(neighbours);
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country!");
}

neighbours[neighbours.indexOf("Germany")] = "Republic of Sweden";
console.log(neighbours);
 */

// ASSIGNEMENT 6 - Introduction to Objects

/* const myCountry = {
  country: "Portugal",
  capital: "Lisboa",
  language: "Portuguese",
  population: 11,
  neighbours: ["Spain"],
}; */

// ASSIGNEMENT 7 - Dot vs. Bracket Notation

/* console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighnouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
 */
// ASSIGNEMENT 8 - Object Methods

/* const myCountry = {
  country: "Portugal",
  capital: "Lisboa",
  language: "Portuguese",
  population: 11,
  neighbours: ["Spain"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighnouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    const isIsland = this.neighbours.length < 1 ? true : false;
    return isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
 */

// ASSIGNEMENT 9 - Iteration: The for Loop

/* for (let num = 1; num <= 50; num++) {
  console.log(`Voter number ${num} is currently voting`);
}
 */

// ASSIGNEMENT 10 - Looping Arrays, Breaking and Continuing

/* function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [11, 1441, 143, 331];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

// comparing to previous assignement
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages, percentages2);
 */

// ASSIGNEMENT 11 - Looping Backwards and Loops in Loops
/* 
const listOfNeighbours = [
  ["Canada", "México", "USA"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let p = 0; p < listOfNeighbours[i].length; p++)
    console.log(`Neighbour: ${listOfNeighbours[i][p]}`);
 */