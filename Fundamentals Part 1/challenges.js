/* // Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

GOOD LUCK � */

//---------------------------------------------------------------------------

/* // DATA 1:
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// DATA 2:
weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
 */

/* //////////////////////////////////////////////////////////////////////
// Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK � */

/* // DATA 1:
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}

// DATA 2:
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark < bmiJohn;

if (markHigherBMI) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's(${bmiMark})!`);
} else {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}
// I decided to write the code in two ways. 1st one using operator(>) and second onde using the variable (markHigherBMI)
 */

/*  //////////////////////////////////////////////////////////////////////
// Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK  */

// DATA 1
/* const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas) {
  console.log("Dolphins are the winners!");
} else if (averageDolphins < averageKoalas) {
  console.log("Koalas are the winners!");
} else if (averageDolphins === averageKoalas) {
  console.log("There is a draw!");
} */

// DATA BONUS 1
/* const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, averageKoalas); */

// DATA BONUS 2
/* const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins are the winners!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Koalas are the winners!");
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log("There is a draw!");
} else {
  console.log("No one wins the trophy. :(");
}
 */

/* //////////////////////////////////////////////////////////////////////
// Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

GOOD LUCK �
 */

/* const bill = 275;
// const bill = 40;
// const bill = 430;
let tip;

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2)
  } and the total value ${bill + tip}.`
);
 */