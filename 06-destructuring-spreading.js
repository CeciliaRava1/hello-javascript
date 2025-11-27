// destructuring-spreading.js


// 1. Use destructuring to extract the first two elements of an array
let myArray = [ 1, 2, 3]
let [ myValue0, myValue1 ] = myArray
console.log(myValue0, myValue1)


// 2. Use destructuring on an array and assign a default value to a variable
let [ myValue3 = "default"] = myArray
console.log(myValue3)


// 3. Use destructuring to extract two properties from an object
let person = {
    name: "Ludmila",
    surname: "Gonzalez",
    age: 19
}

let {age, name} = person
console.log(age, name)


// 4. Use destructuring to extract two properties from an object and assign them to new variables with different names
let {name: name1, age: age1} = person
console.log(age1, name1)


// 5. Use destructuring to extract two properties from a nested object
let animal = {
    type: "Cat",
    location: {
        country: "Finlandia",
        city: "Helsinki"
    }
}

let {type, location: {country}} = animal
console.log(type, country)


// 6. Use spread to combine two arrays into a new one
let myArray0 = [ "a", "b", "c" ]
let myArray1 = [ ...myArray, myArray0 ]
console.log(myArray1)


// 7. Use spread to create a copy of an array
let myArray2 = [ ...myArray]
console.log(myArray2)


// 8. Use spread to combine two objects into a new one
let newObject = { ...person, ...animal } 
console.log(newObject)


// 9. Use spread to create a copy of an object
console.log("New exercise")
let copyObject = { ...animal}
console.log(copyObject)


// 10. Combine destructuring and spread
let myNewArray = [ 1, 2, 3]
let [ myNewValue0, myNewValue1 ] = myArray
console.log(myValue0, myValue1)

myArray = [ ...myNewArray]
console.log(myArray)