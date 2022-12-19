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