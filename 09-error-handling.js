// 09-error-handling.js

// 1. Catch an exception using try-catch
function rainbowColors(color) {
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    let upperColors = []

    for (let i = 0; i < colors.length; i++) {
    upperColors.push(colors[i].toUpperCase())
    }

    if (colors.includes(color)) {
        console.log("The color is in the rainbow")
    } else if (upperColors.includes(color)) {
        throw new upperError ("The color is wrote in upperCase", color)
    } else {
        throw new Error ("The color is not in the rainbow")
    }
}

try {
    rainbowColors("hello")
} catch (error) {
    console.log("An error has occurred: ", error.message)
}


// 2. Catch an exception using try-catch and finally
try {
    rainbowColors("hello")
} catch (error) {
    console.log("An error has occurred: ", error.message)
} finally {
    console.log("Maybe you can try again! :)")
}


// 3. Create a custom exception
class upperError extends Error {
    constructor(message, value) {
        super(message)
        this.value = value
    }

    printValue() {
        console.log(this.value)
    }
}


// 4. Throw a custom exception
try {
    console.log(rainbowColors("RED"))
} catch (error) {
    console.log("An personalizated error has occurred: ", error.message)
    error.printValue()
}


/*
5. Throw multiple exceptions according to defined logic
Error 1: Color in uppercase
Error 2: Color is not in the rainbow
*/
try {
    //console.log(rainbowColors("RED"))
    console.log(rainbowColors("hello"))
} catch (error) {
    console.log("An personalizated error has occurred: ", error.message)
}


// 6. Create a loop that attempts to convert each value to float and captures and shows the errors
function valuesToFloat() {
    let values = [2, 3, 4, "hello"]
    let floatValues = []

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] == Number) {
            floatValues.push(parseFloat(values[i]))
        } else {
            throw new Error ("The value is not a number")
        }
    }
}

try {
    valuesToFloat()
} catch (error) {
    console.log("An error has occurred: ", error.message)
}


// 7. Create a function that checks if an object has a specific property and throws a custom exception
console.log("new code")

class Animal {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
}

let myAnimal = new Animal("Lulu", 2, "Dog")

function hasProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        console.log(`${myAnimal.name} has the property ${property}`)
    } else {
        throw new Error ("Animal has not that property")
    }
}


try {
    hasProperty(myAnimal, "names")
} catch (error) {
    console.log("An error has occurred: ", error.message)
}