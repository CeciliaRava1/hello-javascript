// 01-strings.js

// 1. Concatenate two text strings
myName = "Guillermo"
mySurname = "Varela"
myCompleteName = myName + " " + mySurname
console.log(myCompleteName)

// 2. Show the length of a text string
console.log(myName.length)

// 3. Show the first and last character of a string
// console.log(myName[0] + myName[-1])
console.log(myName[0])
console.log(myName[myName.length - 1])

// 4. Convert a string to uppercase and lowercase
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// 5. Create a multi-line string
multiString = `This is a very
beautiful
multiline string`
console.log(multiString)

// 6. Interpolate the value of a variable into a string
myNumber = 8
myNumber = myNumber.toString()
console.log(typeof myNumber)

// 7. Replace all whitespace in a string with hyphens
multiString = multiString.replaceAll(" ", "-")
console.log(multiString)

// 8. Check whether a string contains a specific word
console.log(multiString.includes("is"))

// 9. Check whether two strings are equal
console.log("true" == "True")
