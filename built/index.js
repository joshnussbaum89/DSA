"use strict";
/**
 * @param {number} num
 * @returns the factorial of the num parameter passed in
 */
function firstFactorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++)
        factorial *= i;
    return factorial;
}
/**
 * @param {object} strArr - Array of two strings containing comma separated string number values ex/ ['1, 2, 3, 4', '5, 6, 7, 8']
 * @returns A string of the numbers that occur in both strings
 */
function findIntersection(strArr) {
    var arrayOne = strArr[0].split(', ');
    var arrayTwo = strArr[1].split(', ');
    var intersectedNumbers = arrayTwo
        .filter(function (num) { return arrayOne.includes(num); })
        .sort(function (a, b) { return parseInt(a) - parseInt(b); })
        .join(',');
    return intersectedNumbers ? intersectedNumbers : false;
}
/**
 * Determine the longest word from a parameter containing a string of words
 *
 * @param {string} sen
 * @returns longest word in string provided
 */
function longestWord(sen) {
    // Sort and remove special chars
    var sorted = sen
        .split(' ')
        .map(function (str) { return str.replace(/[^a-zA-Z0-9]/g, ''); })
        .sort(function (a, b) { return a.length - b.length; });
    // IF only one word was submitted
    if (sorted.length === 1)
        return sorted[0];
    // IF another word length matches > return the first one
    var longest = sorted[sorted.length - 1].length === sorted[sorted.length - 2].length
        ? sorted[sorted.length - 2]
        : sorted[sorted.length - 1];
    return longest;
}
/**
 * Determine if username passes validation
 *
 * @description String must: be between 4 + 25 chars, start with a letter, contain only letters and numbers, and last char is not an underscore
 * @param {string} str
 * @returns true or false
 */
function usernameValidation(str) {
    var correctLength = str.length >= 4 && str.length <= 25;
    var startsWithLetter = str[0].toLowerCase() !== str[0].toUpperCase();
    var containsCorrectChars = /^[a-zA-Z0-9_]*$/.test(str) && str[str.length - 1] !== '_';
    return correctLength && startsWithLetter && containsCorrectChars;
}
/**
 * Recusive function to repeat a string 'num' number of times
 *
 * @param text
 * @param num
 * @returns repeated string
 */
function repetition(text, num) {
    if (num <= 0) {
        return '';
    }
    else if (num === 1) {
        return text;
    }
    else {
        return "".concat(text).concat(repetition(text, num - 1));
    }
}
/**
 * Person class - compareAge method compares ages between Person classes
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.compareAge = function (other) {
        var myAge = this.age;
        var theirAge = other.age;
        if (theirAge > myAge) {
            return "".concat(other.name, " is older than me.");
        }
        else if (theirAge < myAge) {
            return "".concat(other.name, " is younger than me.");
        }
        else {
            return "".concat(other.name, " is the same age as me");
        }
    };
    return Person;
}());
/**
 * @param arr Array of integers
 * @returns the absolute value of an array of negative and positive integers
 */
function getAbsSum(arr) {
    return arr.map(function (num) { return Math.abs(num); }).reduce(function (a, b) { return a + b; }, 0);
}
/**
 * Calculate compound interest over a specified term
 */
function compoundInterest(principal, term, rate, compoundingPeriods) {
    var finalInvestmentValue = principal * Math.pow(1 + rate / compoundingPeriods, compoundingPeriods * term);
    return +finalInvestmentValue.toFixed(2);
}
/**
 * Lodash _get method
 */
function get(objectParam, pathParam, defaultValue) {
    var path = typeof pathParam === 'string' ? pathParam.split('.') : pathParam;
    var object = objectParam;
    for (var i = 0; i < path.length; i++) {
        if (!object) {
            object = defaultValue;
            break;
        }
        object = object["".concat(path[i])];
    }
    return object !== undefined ? object : defaultValue;
}
/**
 * Returns array without duplicate values
 */
function uniqueArray(array) {
    // O(n^2)
    var nonDuplicateValues = [];
    for (var i = 0; i < array.length; i++) {
        var currentItem = array[i];
        if (!nonDuplicateValues.includes(currentItem)) {
            nonDuplicateValues.push(currentItem);
        }
    }
    return nonDuplicateValues;
    // OR this - O(n)
    // return Array.from(new Set(array));
}
/**
 *
 * jQuery .css() method
 *
 @example $('h1').css('color', 'red') // sets h1 color to red
          $('h1').css('color', 'red').css('fontSize', '12px') // sets h1 color to red and font size to 12px
          $('h1').css('color') // 'red'
 **/
function $(selector) {
    var element = document.querySelector(selector);
    return {
        css: function (property, value) {
            // if no value is passed in, return current property value
            if (value === undefined) {
                // no matching elements
                if (element === null) {
                    return undefined;
                }
                var value_1 = element.style[property];
                return value_1 === '' ? undefined : value_1;
            }
            // set property value
            if (element !== null) {
                element.style[property] = value;
            }
            // return this for chaining
            return this;
        },
    };
}
/**
 * Check if number is a perfect square
 * @param n number
 * @returns boolean
 */
function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}
/**
 * Given an array of numbers, return an array with the sum of the positive numbers first, followed by the sum of the negative numbers.
 * @param input array of numbers
 * @returns [positiveNumberCount, negativeNumberSum]
 */
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
        return [];
    var positiveNumberCount = input.filter(function (num) { return num > 0; }).length;
    var negativeNumberSum = input
        .filter(function (num) { return num < 0; })
        .reduce(function (a, b) { return a + b; }, 0);
    return [positiveNumberCount, negativeNumberSum];
}
/**
 * Perform basic operation on two numbers
 */
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
/**
 * Given an array, return the inverted value of numbers
 * @example [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
 */
function invert(array) {
    return array.map(function (number) { return -number; });
}
/**
 * Given three numbers, determine if a triangle can be formed
 */
var isTriangle = function (a, b, c) { return a + b > c && a + c > b && b + c > a; };
/**
 * Lodash _.chunk method
 */
function chunk(array, size) {
    if (size === void 0) { size = 1; }
    var chunked = [];
    for (var i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}
/**
 * Recursive sum
 */
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
/**
 * Create a phone number from array of numbers
 */
function createPhoneNumber(numbers) {
    // const finalChars: string[] = []
    // numbers
    //   .map((number) => number.toString())
    //   .forEach((number, index) => {
    //     if (index === 0) finalChars.push('(')
    //     if (index === 3) finalChars.push(') ')
    //     if (index === 6) finalChars.push('-')
    //     finalChars.push(number)
    //   })
    // return finalChars.join('')
    // OR
    var phoneNumberMask = '(xxx) xxx-xxxx';
    numbers.forEach(function (num) {
        phoneNumberMask = phoneNumberMask.replace('x', num.toString());
    });
    return phoneNumberMask;
}
/**
 * Find and count duplicates in a string
 *
 * @param text string of alphanumeric characters
 * @return number of duplicate characters
 */
function duplicateCount(text) {
    var allAvailableChars = [];
    var arrayOfDuplicates = [];
    var numberOfDuplicates = 0;
    for (var i = 0; i < text.length; i++) {
        var currentChar = text[i].toLowerCase();
        var duplicateDetected = allAvailableChars.includes(currentChar);
        var repeatedDuplicateDetected = !arrayOfDuplicates.includes(currentChar);
        if (duplicateDetected && repeatedDuplicateDetected) {
            arrayOfDuplicates.push(currentChar);
            numberOfDuplicates += 1;
        }
        allAvailableChars.push(text[i]);
    }
    return numberOfDuplicates;
}
/**
 * Determine the longest unique character string possible from two strings
 */
var longest = function (s1, s2) {
    var createUniqueString = function (str) {
        var uniqueCharString = '';
        str.split('').forEach(function (char) {
            if (!uniqueCharString.includes(char)) {
                uniqueCharString += char;
            }
        });
        return uniqueCharString;
    };
    return createUniqueString("".concat(s1).concat(s2)).split('').sort().join('');
};
