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
 *
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
