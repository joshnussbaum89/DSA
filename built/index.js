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
    var finalInvestmentValue = principal *
        Math.pow(1 + rate / compoundingPeriods, compoundingPeriods * term);
    return +finalInvestmentValue.toFixed(2);
}
var letters = { a: [{ b: { c: 3 } }] };
var john = {
    profile: {
        name: { firstName: 'John', lastName: 'Doe' },
        age: 20,
        gender: 'Male',
    },
};
var jane = {
    profile: {
        age: 19,
        gender: 'Female',
    },
};
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
