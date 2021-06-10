console.log("TS File");

// Core Types

/*
  1. Number
  2. String
  3. Boolean  
*/

const number1 = 4.5;
const number2 = 5;

function add(num1: number, num2: number) {
  return num1 + num2;
}

const firstName = "Paul";
const lastName = "Brats";
const printResult = true;

function getFullName(first: string, last: string, printResult: boolean) {
  if (printResult) console.log(first + " " + last);
  else return first + " " + last;
}

const result = add(number1, number2);
console.log(result);

getFullName(firstName, lastName, printResult);

// 4. Object Types
const person = {
  name: "Paul",
  age: 40,
  nickname: "The Greatest"
}

person.nickname = "The Greatest";
console.log(person.nickname)

// 5. Array Types
const myArray1 = ["alpha", "beta", "delta"];
const myArray2 = [1,2,3];
const myArray3 = [{id: 1, value: "hello"},{id: 2, value: "goodbye"}]

let personArray: {
  name: string;
  age: number;
}[] = [];

personArray.push({name: "Paul", age: 40})

for (const person of personArray) {
  console.log(person.age, person.name, "PERSON");
}

console.log(personArray)

// 6. Tuples Types [1,2]
const tupleExample: [number, string] = [1, "red"]

// 7. Enums Type
enum EnumExample { ADMIN, READ_ONLY, AUTHOR};
console.log(EnumExample)

