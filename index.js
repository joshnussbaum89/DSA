/**
 * @param {number} num
 * @returns the factorial of the num parameter passed in
 */
function firstFactorial(num) {
  let factorial = 1
  for (let i = 1; i <= num; i++) factorial *= i
  return factorial
}
