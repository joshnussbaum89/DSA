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
  const containsCorrectChars = /^[a-zA-Z0-9_]*$/.test(str) && str[str.length - 1] !== '_'

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
    principal * Math.pow(1 + rate / compoundingPeriods, compoundingPeriods * term)

  return +finalInvestmentValue.toFixed(2)
}

/**
 * Lodash _get method
 */
function get(objectParam: object, pathParam: string | string[], defaultValue?: string) {
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

  const positiveNumberCount: number = input.filter((num: number) => num > 0).length

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

/**
 * Given three numbers, determine if a triangle can be formed
 */
const isTriangle = (a: number, b: number, c: number): boolean => a + b > c && a + c > b && b + c > a

/**
 * Lodash _.chunk method
 */
function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  const chunked = []

  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }

  return chunked
}

/**
 * Recursive sum
 */
function sum(arr: Array<number>, n: number): number {
  if (n <= 0) {
    return 0
  } else {
    return sum(arr, n - 1) + arr[n - 1]
  }
}

/**
 * Create a phone number from array of numbers
 */
function createPhoneNumber(numbers: number[]): string {
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

  let phoneNumberMask = '(xxx) xxx-xxxx'

  numbers.forEach((num) => {
    phoneNumberMask = phoneNumberMask.replace('x', num.toString())
  })

  return phoneNumberMask
}

/**
 * Find and count duplicates in a string
 *
 * @param text string of alphanumeric characters
 * @return number of duplicate characters
 */
function duplicateCount(text: string): number {
  const allAvailableChars: Array<string> = []
  const arrayOfDuplicates: Array<string> = []
  let numberOfDuplicates = 0

  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i].toLowerCase()
    const duplicateDetected = allAvailableChars.includes(currentChar)
    const repeatedDuplicateDetected = !arrayOfDuplicates.includes(currentChar)

    if (duplicateDetected && repeatedDuplicateDetected) {
      arrayOfDuplicates.push(currentChar)
      numberOfDuplicates += 1
    }

    allAvailableChars.push(text[i])
  }

  return numberOfDuplicates
}

/**
 * Determine the longest unique character string possible from two strings
 */
const longest = (s1: string, s2: string) => {
  const createUniqueString = (str: string) => {
    let uniqueCharString = ''

    str.split('').forEach((char) => {
      if (!uniqueCharString.includes(char)) {
        uniqueCharString += char
      }
    })

    return uniqueCharString
  }

  return createUniqueString(`${s1}${s2}`).split('').sort().join('')
}

/**
 * Return the first non-consecutive number in an array
 */
function firstNonConsecutive(arr: number[]): null | number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1]
    }
  }
  return null
}

/**
 * Reverse a 'word' string
 * @param {string} word
 * @returns {string}
 */
function reverseWord(word: string): string {
  let reversedWord = ''

  for (let letter of word) {
    reversedWord = letter + reversedWord
  }

  return reversedWord
}

function isPalindrome(word: string): boolean {
  return word === reverseWord(word)
}

/**
 * Check if all words in an array are palindromes
 * @param {tring[]} words
 * @returns
 */
function checkAllPalindromes(words: string[]): boolean {
  for (let word of words) {
    if (isPalindrome(word) === false) {
      return false
    }
  }

  return true
}

/**
 * Check if a number is prime
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num: number): boolean {
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

/**
 * Given an array of numbers, print a staircase
 * @param {number[]} num
 * @returns {number[][] | boolean}
 */
function staircase(nums: number[]): number[][] | boolean {
  let step = 1
  let subsets = []

  while (nums.length > 0) {
    if (nums.length >= step) {
      subsets.push(nums.splice(0, step))
      step++
    } else {
      return false
    }
  }

  return subsets
}

/**
 * Given a 'name' argument, return a unique message depending on whether the name starts with 'R' or 'r'
 * @param {string} name
 * @returns {string}
 */
export function areYouPlayingBanjo(name: string): string {
  const firstLetter = name[0].toLowerCase()
  const regex = /[r]/i

  if (firstLetter.match(regex)) {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

class Kata {
  /**
   * Square every digit of a given number and concatenate them
   */
  static squareDigits(num: number): number {
    return parseInt(
      num
        .toString()
        .split('')
        .map((num) => parseInt(num) ** 2)
        .join('')
    )
  }
}
