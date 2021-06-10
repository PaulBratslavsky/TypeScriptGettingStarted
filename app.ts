console.log("TS File");

// Core Types

/*
  1. Number
  2. String
  3. Boolean  
*/

const number1 = 4.5
const number2 = 5
 
function add(num1: number, num2: number) {
  return num1 + num2
}

const firstName = 'Paul'
const lastName = "Brats"
 
function getFullName(first: string, last: string) {
  return first + " " + last
}

const result = add(number1,number2)
console.log(result)

const fullName = getFullName(firstName,lastName)
console.log(fullName)