// 10-console-methods.js


// log
console.log("Hello")


// error
console.error("This is an error message", new Error("Failed conection"))


// warn
console.warn("This is a warning")


// info
console.info("This is an information")


// table
let data = [
    ["Brais", 37],
    ["Sarah", 21],
]
console.table(data)

data = [
    { name: "Brais", age: 37 },
    { name: "Sarah", age: 21 },
]
console.table(data)


// group
console.group("User")
console.log("Name: Brais")
console.log("Age: 10")


// time
console.time('Execution time 1')
for(let i = 0; i < 10000; i++) {
    
}
console.timeEnd('Execution time 1')

console.time('Execution time 2')
for(let i = 0; i < 10000; i++) {
    
}
console.timeEnd('Execution time 2')


// assert
let age = 17
console.assert(age >= 18, 'The user must be adult')


// count
console.count('Click')
console.count('Click')
console.count('Click')
console.count('Click')
console.count('Click')
console.countReset('Click')


// trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace('Execution monitoring')  
}

funcA()


// clear
console.clear()