// 03-loops.js

// NOTE: Explore different loop syntaxes to solve the exercises

// 1. Create a loop that prints the numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    //console.log(i)
}

// 2. Create a loop that sums all numbers from 1 to 100 and displays the result
let i = 1
while (i <= 100) {
    //console.log(i)
    i++
}

// 3. Create a loop that prints all even numbers between 1 and 50
// Even: 0,2,4... Odd: 1,3,5...
//console.log("Even numbers")
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        //console.log(i)
    }
}

// 4. Given an array of names, use a loop to print each name to the console
let arrayNames = ["Laura", "Ludmila", "Carlos", "Juan"]
for (value of arrayNames) {
    //console.log(value)
}

// 5. Write a loop that counts the number of vowels in a string
let amountVowels = 0
let myString = "murcielago"
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
// console.log(`Amount of vowels ${amountVowels}`)

// 6. Given an array of numbers, use a loop to multiply all numbers and show the product
// let numbers = [1, 2, 3, 4, 5, 6]
// let multiplyNumbers = 1
// for (let i = 0; i < numbers.length; i++) {
//     multiplyNumbers *= numbers[i]
// }
// //console.log(multiplyNumbers)

// 7. Write a loop that prints the multiplication table of 5
i = 1
while (i <= 10) {
    result = 5 * i
    //console.log(`5 x ${i} = ${result}`)
    i++
}

// 8. Use a loop to reverse a string REVIEW!
myString = "My World"
let newString = ""
for (let i = myString.length; i > 1; i--) {
    newString += myString[i]
}

// console.log(newString)

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence
let a = 0
let b = 1
let c = 0
console.log(a)
console.log(b)

for (let i = 0; i <= 7; i++) {
    c = a + b
    console.log(c)
    a = b
    b = c
}

// 10. Given an array of numbers, use a loop to create a new array that contains only the numbers greater than 10
let numbers = [1, 22, 3, 34, 15, 6, 50]
let greaterThan10 = []
count = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        greaterThan10.push(numbers[i])
    }
}
console.log(greaterThan10)
