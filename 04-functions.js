// 04-functions.js

// 1. Create a function that receives two numbers and returns their sum
function sum(a, b) {
    result = a + b
    console.log(result)
}

sum(1, 2)

// 2. Create a function that receives an array of numbers and returns the largest of them
let numbers = [1, 34, 456, 2345, 0]

function largestNumber(arrayOfNumbers) {
    largestNumber = arrayOfNumbers[0]

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > largestNumber) {
            largestNumber = arrayOfNumbers[i]
        }
    }

    console.log(largestNumber)
}

largestNumber(numbers)

// 3. Create a function that receives a string and returns the number of vowels it contains
function numberOfVowels(myString) {
    let amountVowels = 0

    for (value of myString) {
        if (
            value == "a" ||
            value == "e" ||
            value == "i" ||
            value == "o" ||
            value == "u"
        ) {
            amountVowels++
        }
    }
    console.log(amountVowels)
}

numberOfVowels("murcielagoo")

// 4. Create a function that receives an array of strings and returns a new array with the strings in uppercase
function toUppercase(arrayOfStrings) {
    let upperArray = []

    for (let i = 0; i < arrayOfStrings.length; i++) {
        toUpper = arrayOfStrings[i].toUpperCase()
        upperArray.push(toUpper)
    }
    console.log(upperArray)
}

let myArray = ["hello", "bye", "carrotcake"]
toUppercase(myArray)

// 5. Create a function that receives a number and returns true if it is prime, and false otherwise
function isPrime(number) {
    let counter = 1
    let amountOfDivisors = 0

    while (counter <= number) {
        if (number % counter == 0) {
            amountOfDivisors++
        }
        counter++
    }

    if (amountOfDivisors == 2) {
        console.log(`The number ${number} is prime`)
    } else {
        console.log(`The number ${number} is not prime`)
    }
}

isPrime(9)
isPrime(13)

// 6. Create a function that receives two arrays and returns a new array that contains the elements common to both
function commonElements(firstArray, secondArray) {
    let common = []

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] == secondArray[j]) {
                common.push(firstArray[i])
            }
        }
    }
    console.log(common)
}

let firstArray = [1, 2, 3, 4, 5]
let secondArray = [1, 2, 4, 6, 8, 10]
commonElements(firstArray, secondArray)

// 7. Create a function that receives an array of numbers and returns the sum of all even numbers (0, 2, 4)
function sumEvenNumbers(numbers) {
    let sumEven = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            sumEven += numbers[i]
        }
    }
    console.log(sumEven)
}

myArray = [2, 3, 4, 6]
sumEvenNumbers(myArray)

// 8. Create a function that receives an array of numbers and returns a new array with each number squared
function squaredNumber(numbers) {
    let squaredNumbers = []
    let squared = 0

    for (let i = 0; i < numbers.length; i++) {
        squared = numbers[i] ** 2
        squaredNumbers.push(squared)
    }
    console.log(squaredNumbers)
}

console.log(myArray)
squaredNumber(myArray)

// 9. Create a function that receives a string and returns the same string with the words in reverse order
function reverseString(myString) {
    let newString = ""

    for (let i = myString.length - 1; i >= 0; i--) {
        newString += myString[i]
        console.log(myString[i])
    }
    console.log(newString)
}

reverseString("Milanesitas")

// 10. Create a function that calculates the factorial of a given number
function factorial(number) {
    let factorialNum = 1

    for (let i = 1; i < number; i++) {
        factorialNum += factorialNum * i
    }
    console.log(factorialNum)
}

factorial(10)
