"use strict";

// ------------------ CHALLENGE #1

/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins.`);
  }
}

// Test 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Test 2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

 */

// -------------------- CHALLENGE #2

/* const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
 */

// -------------------- CHALLENGE #3

/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

mark.calcBMI();
john.calcBMI();

mark.BMI > john.BMI
  ? console.log(
      `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}).`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.BMI} is higher than ${mark.fullName}'s BMI (${mark.BMI}).`
    ); */

// -------------------- CHALLENGE #4

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++)
  tips.push(calcTip(bills[i])), totals.push(calcTip(bills[i]) + bills[i]);

console.log(bills, tips, totals);

//  const calcAverage = (arr, items) => arr / items;

// let sum = 0;
// let sum2 = 0;

// for (let i = 0; i < 10; i++) {
//   sum += bills[i];
//   sum2 += totals[i];
// } 


// console.log(calcAverage(sum, bills.length));
// console.log(calcAverage(sum2, totals.length));



const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(totals));
 */