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
for (let chessbordLine = 0; chessbordLine < 8; chessbordLine++) {
  if (chessbordLine % 2 === 1) {
    // chessbord lines #1
    let chessbordLineCharacter = " ";
    for (let count = 0; count < 8; count++) {
      if (count % 2 === 1) {
        chessbordLineCharacter = chessbordLineCharacter + " ";
      } else if (count % 2 === 0) {
        chessbordLineCharacter = chessbordLineCharacter + "#";
      }
    }
    ("/n");
    console.log(chessbordLineCharacter);
  } else if (chessbordLine % 2 === 0) {
    //chessbord lines #2
    let chessbordLineCharacter = " ";
    for (let count = 0; count < 8; count++) {
      if (count % 2 === 1) {
        chessbordLineCharacter = chessbordLineCharacter + "#";
      } else if (count % 2 === 0) {
        chessbordLineCharacter = chessbordLineCharacter + " ";
      }
    }
    ("/n");
    console.log(chessbordLineCharacter);
  }
}

const isEven = function (N) {
  if (N < 0) {
    return "??";
  }
  if (N === 0) {
    return true;
  } else if (N === 1) {
    return false;
  } else {
    return isEven(N - 2);
  }
};

function countBs(string) {
  let countedBs = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      countedBs++;
    }
  }
  return countedBs;
}
function countChar(string, char) {
  let countedCharacters = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      countedCharacters++;
    }
  }
  return countedCharacters;
}

// part one - range function
function range(firstInteger, lastInterger) {
  const rangeArray = [];
  for (let i = firstInteger; i <= lastInterger; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

// soln two  - calculating the sum of a number array
function sum(array) {
  let total = 0;
  for (
    let elementPosition = 0;
    elementPosition < array.length;
    elementPosition++
  ) {
    total = total + array[elementPosition];
  }
  return total;
}

// Modifying the range function by adding a third argument of step
function rangeStep(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step) array.push(i);
  } else {
    for (var i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function reverseArray(array) {
  const reversedArray = [];

  for (let counter = array.length - 1; counter >= 0; counter--) {
    reversedArray.push(array[counter]);
  }
  return reversedArray;
}

const reverseArrayInPlace = function (array) {
  const lastIndex = array.length - 1;

  for (
    let currentIndex = 0;
    currentIndex < Math.floor(array.length / 2);
    currentIndex++
  ) {
    const swappedIndex = lastIndex - currentIndex;
    const currentIndexElementHolder = array[currentIndex];

    array[currentIndex] = array[swappedIndex];
    array[swappedIndex] = currentIndexElementHolder;
  }
  return array;
};
