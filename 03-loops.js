// 03-loops.js

// For
// for (let i = 0; i < 5; i++) {
//     console.log(`Hello! ${i}`)
// }

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Element ${numbers[i]}`)
// }

// // While
// let i = 0
// while (i < 5) {
//     console.log(`Hola ${i}`)
//     i++
// }

// Do while
i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// For of
myArray = [1, 2, 3, 4]
mySet = new Set(["Cat", "Dog", "Fox", "Garfield"])
myMap = new Map([
    ["Name", "Cat"],
    ["Age", 21],
])

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

myString = "Hello Javascript!"
for (let value of myString) {
    console.log(value)
}
