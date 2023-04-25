/**
 * @param {number} num
 * @returns the factorial of the num parameter passed in
 */
function firstFactorial(num: number): number {
  let factorial = 1
  for (let i = 1; i <= num; i++) factorial *= i
  return factorial
}

/**
 * @param {object} strArr - Array of two strings containing comma separated string number values ex/ ['1, 2, 3, 4', '5, 6, 7, 8']
 * @returns A string of the numbers that occur in both strings
 */
function findIntersection(strArr: string[]): string | boolean {
  let arrayOne = strArr[0].split(', ')
  let arrayTwo = strArr[1].split(', ')

  let intersectedNumbers = arrayTwo
    .filter((num) => arrayOne.includes(num))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .join(',')

  return intersectedNumbers ? intersectedNumbers : false
}

/**
 * Determine the longest word from a parameter containing a string of words
 *
 * @param {string} sen
 * @returns longest word in string provided
 */
function longestWord(sen: string): string {
  // Sort and remove special chars
  const sorted = sen
    .split(' ')
    .map((str) => str.replace(/[^a-zA-Z0-9]/g, ''))
    .sort((a, b) => a.length - b.length)

  // IF only one word was submitted
  if (sorted.length === 1) return sorted[0]

  // IF another word length matches > return the first one
  const longest =
    sorted[sorted.length - 1].length === sorted[sorted.length - 2].length
      ? sorted[sorted.length - 2]
      : sorted[sorted.length - 1]

  return longest
}

/**
 * Determine if username passes validation
 *
 * @description String must: be between 4 + 25 chars, start with a letter, contain only letters and numbers, and last char is not an underscore
 * @param {string} str
 * @returns true or false
 */
function usernameValidation(str: string): boolean {
  const correctLength = str.length >= 4 && str.length <= 25
  const startsWithLetter = str[0].toLowerCase() !== str[0].toUpperCase()
  const containsCorrectChars =
    /^[a-zA-Z0-9_]*$/.test(str) && str[str.length - 1] !== '_'

  return correctLength && startsWithLetter && containsCorrectChars
}

/**
 * Recusive function to repeat a string 'num' number of times
 *
 * @param text
 * @param num
 * @returns repeated string
 */
function repetition(text: string, num: number): string {
  if (num <= 0) {
    return ''
  } else if (num === 1) {
    return text
  } else {
    return `${text}${repetition(text, num - 1)}`
  }
}

/**
 * Person class - compareAge method compares ages between Person classes
 */
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  compareAge(other: Person) {
    const myAge = this.age
    const theirAge = other.age

    if (theirAge > myAge) {
      return `${other.name} is older than me.`
    } else if (theirAge < myAge) {
      return `${other.name} is younger than me.`
    } else {
      return `${other.name} is the same age as me`
    }
  }
}

/**
 * @param arr Array of integers
 * @returns the absolute value of an array of negative and positive integers
 */
function getAbsSum(arr: number[]): number {
  return arr.map((num) => Math.abs(num)).reduce((a, b) => a + b, 0)
}

/**
 * Calculate compound interest over a specified term
 */
function compoundInterest(
  principal: number,
  term: number,
  rate: number,
  compoundingPeriods: number
): number {
  const finalInvestmentValue =
    principal *
    Math.pow(1 + rate / compoundingPeriods, compoundingPeriods * term)

  return +finalInvestmentValue.toFixed(2)
}

/**
 * Lodash _get method
 */
function get(
  objectParam: object,
  pathParam: string | string[],
  defaultValue?: string
) {
  let path = typeof pathParam === 'string' ? pathParam.split('.') : pathParam
  let object: any = objectParam

  for (let i = 0; i < path.length; i++) {
    if (!object) {
      object = defaultValue
      break
    }

    object = object[`${path[i]}`]
  }

  return object !== undefined ? object : defaultValue
}

/**
 * Returns array without duplicate values
 */
function uniqueArray(array: any[]) {
  // O(n^2)
  let nonDuplicateValues: any[] = []

  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i]

    if (!nonDuplicateValues.includes(currentItem)) {
      nonDuplicateValues.push(currentItem)
    }
  }

  return nonDuplicateValues

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
function $(selector: string) {
  const element = document.querySelector(selector) as HTMLElement

  return {
    css: function (property: any, value?: string) {
      // if no value is passed in, return current property value
      if (value === undefined) {
        // no matching elements
        if (element === null) {
          return undefined
        }

        const value = element.style[property]
        return value === '' ? undefined : value
      }

      // set property value
      if (element !== null) {
        element.style[property] = value
      }

      // return this for chaining
      return this
    },
  }
}

/**
 * Check if number is a perfect square
 * @param n number
 * @returns boolean
 */
function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n))
}

/**
 * Given an array of numbers, return an array with the sum of the positive numbers first, followed by the sum of the negative numbers.
 * @param input array of numbers
 * @returns [positiveNumberCount, negativeNumberSum]
 */
function countPositivesSumNegatives(input: any) {
  if (input === null || input.length === 0) return []

  const positiveNumberCount: number = input.filter(
    (num: number) => num > 0
  ).length

  const negativeNumberSum: number = input
    .filter((num: number) => num < 0)
    .reduce((a: number, b: number) => a + b, 0)

  return [positiveNumberCount, negativeNumberSum]
}

/**
 * Perform basic operation on two numbers
 */
function basicOp(operation: string, value1: number, value2: number): number {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
    default:
      return 0
  }
}

/**
 * Given an array, return the inverted value of numbers
 * @example [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
 */
function invert(array: number[]): number[] {
  return array.map((number) => -number)
}
