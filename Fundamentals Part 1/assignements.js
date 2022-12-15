/* // ASSIGNEMENT 1 - Values and variables
let country = "Portugal";
let continent = "Europe";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);
 */

/* // ASSIGNEMENT 2 - Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
 */

/* // ASSIGNEMENT 3 - let, const and var
language = "Portuguese";
const country = "Portugal";
const continent = "Europe";
const isIsland = false;
// isIsland = false; // Bug!!!
 */

/* // ASSIGNEMENT 4 - Basic Operators
let popPortugal = 10;
console.log(popPortugal / 2);
popPortugal++;
console.log(popPortugal);
const popFinland = 6;
console.log(popPortugal > popFinland);
const averagePop = 33;
console.log(popPortugal < averagePop);

const country = "Portugal";
const continent = "Europe";
const language = "Portuguese";
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  popPortugal +
  " millions people speak " +
  language;
console.log(description); */

/* // ASSIGNEMENT 5 - Strings and Template Literals
const popPortugal = 10;
const country = "Portugal";
const continent = "Europe";
const language = "Portuguese";
const description = `'${country} is in ${continent}, and its ${
  popPortugal + 1
} million people speak ${language}'`;
console.log(description); */

/* // ASSIGNEMENT 6 - Taking Decisions: if / else Statements
const country = "Portugal";
const popPortugal = 10;
if (popPortugal > 33) {
  console.log(`'${country}'s population is above average'`);
} else {
  console.log(
    `'${country}'s population is ${33 - popPortugal} million below average'`
  );
} */

/* // ASSIGNEMENT 7 - Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 */

/* // ASSIGNEMENT 8 - Equality Operators: == or ===

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
 */

/* // ASSIGNEMENT 9 - Logical Operators

const language = "portuguese";
const population = 10;
const isIsland = false;
const country = "Portugal";

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
 */

/* // ASSIGNEMENT 10 - The switch Statement
const language = "mandarin";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
 */

/* // ASSIGNEMENT 11 - The Conditional (Ternary) Operator

const population = 11;
const country = "Portugal";
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
 */

