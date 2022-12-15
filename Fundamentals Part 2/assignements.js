"use strict";

// ASSIGNEMENT 1 - Functions

/* 1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const portugal = describeCountry("Portugal", 10, "Lisboa");
console.log(portugal);

const japan = describeCountry("Japan", 126, "Tokyo");
console.log(japan);

const luxembourg = describeCountry("Luxembourg", "0,6", "Luxembourg");
console.log(luxembourg);
