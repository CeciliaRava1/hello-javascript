// 11-console-exercises.js


// 1. Create a function that uses error correctly
function sum(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        console.log(a + b)
    } else {
        console.error('The values must be integers')
    }
}

sum(1, 'b')


// 2. Create a function that uses warn correctly
let classArray = []

function classmates(name, classArray) {

    classArray.push(name)
    
    if (name == name.toUpperCase()) {
        console.warn('You have blockMayus activated!')
    }
    
    console.log(classArray)
}
classmates('ROCIO', classArray)
classmates('rocio', classArray)


// 4. Use table
let data = [
    ["Brais", 37, 'red', 'tree'],
    ["Sarah", 21, 'blue'],
]
console.table(data)


// 5. Use group
console.group('Girl')
console.log('Name: Luciana')
console.log('Age: 21')


// 6. Use time
console.time('Execution time')
let i = 0

while (i < 5) {
    i++
}

console.timeEnd('Execution time')


// 7. Validate with assert if a number is positive
i = -2
console.assert(i > 0, 'The number is minor than zero')


// 8. Use count
console.count('Click')


// 9. Use clear
console.clear()