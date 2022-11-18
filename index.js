/**
 * @param {number} num
 * @returns the factorial of the num parameter passed in
 */
function firstFactorial(num) {
  let factorial = 1
  for (let i = 1; i <= num; i++) factorial *= i
  return factorial
}

/**
 * @param {object} strArr - Array of two strings containing comma separated string number values ex/ ['1, 2, 3, 4', '5, 6, 7, 8']
 * @returns A string of the numbers that occur in both strings
 */
function findIntersection(strArr) {
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
 * @param {string} sen
 * @returns longest word in string provided
 */
function longestWord(sen) {
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
 * @description String must: be between 4 + 25 chars, start with a letter, contain only letters and numbers, and last char is not an underscore
 * @param {string} str
 * @returns true or false
 */
function usernameValidation(str) {
  const correctLength = str.length >= 4 && str.length <= 25
  const startsWithLetter = str[0].toLowerCase() !== str[0].toUpperCase()
  const containsCorrectChars =
    /^[a-zA-Z0-9_]*$/.test(str) && str[str.length - 1] !== '_'

  return correctLength && startsWithLetter && containsCorrectChars
}
