"use strict";
/*
Objective
In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.
*/

function greeting(parameterVariable) {
  //This line prints "Hello, World!" to the console:
  console.log("Hello, World!");
  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  console.log(firstInteger + Number(secondInteger));

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

  console.log(firstDecimal + Number(secondDecimal));
  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  console.log(firstString + secondString);
}

function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * length + 2 * width;
  return perimeter;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//////////////////// more xexercises on Functions ///////////////////////////
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonas = [];

  for (var i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      vowels.push(s[i]);
    } else {
      consonas.push(s[i]);
    }
  }

  let concatArr = [...vowels, ...consonas];
  for (let element of concatArr) {
    console.log(element);
  }
}

let line = " ";
for (let count = 0; count < 8; count++) {
  line = line + "#";
  console.log(line);
}

let currentNumber = 0;
for (let count = 0; count < 100; count++) {
  currentNumber = currentNumber + 1;
  if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
    console.log("FizzBuzz");
  }
  if (currentNumber % 3 == 0) {
    console.log("Fizz");
  } else if (currentNumber % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(currentNumber);
  }
}
