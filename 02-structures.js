// 02-structures.js

// 1. Create an array that stores five animals
let animalsArray = ["Cat", "Dog", "Fox", "Bird", "Wolf"]

// 2. Add two more. One at the beginning and one at the end
animalsArray[0] = "Snake"
animalsArray.push("Elephant")

// 3. Remove the one in third position
animalsArray.splice(2, 1)

// 4. Create a Set that stores five books
let booksSet = new Set([
    "The lord of the rings",
    "Moby Dick",
    "Animal farm",
    "Pride and prejudice",
    "Robinson Crusoe",
])

// 5. Add two more. One of them repeated
booksSet.add("Moby Dick")
booksSet.add("The catcher in the rye")

// 6. Remove a specific one of your choice
booksSet.delete("Animal farm")

// 7. Create a Map that associates the month number to its name
let monthsMap = new Map([
    ["01", "January"],
    ["02", "February"],
    ["03", "March"],
    ["04", "April"],
    ["05", "May"],
    ["06", "June"],
    ["07", "July"],
    ["08", "August"],
    ["09", "September"],
    ["10", "October"],
    ["11", "November"],
    ["12", "December"],
])

// 8. Check if month number 5 exists in the map and print its value
console.log(monthsMap.has("05"))
console.log(monthsMap.get("05"))

// 9. Add to the map a key with an array that stores the summer months
let summerMonths = new Array("June", "July", "August", "September")
monthsMap.set("Summer months: ", summerMonths)
console.log(monthsMap)

// 10. Create an Array, transform it into a Set, and store it in a Map
let myNewArray = [1, 2, 3, 4]
myNewArray = new Set(myNewArray)
let myNewMap = new Map()
myNewMap.set("Array to set", myNewArray)

console.log(myNewArray)
console.log(myNewMap)
