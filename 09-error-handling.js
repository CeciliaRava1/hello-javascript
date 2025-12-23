// 09-error-handling.js

let myObject
/* This produces an exception
console.log(myObject.email)
*/

// try-catch
try {
    console.log(myObject.email)
    console.log("Finish")
} catch (error) {
    //console.log("An error has occurred", error.message)
}

// finally
/*
try {
    console.log(myObject.email)
} catch (error) {
    console.log("An error has occurred", error.message)
} finally {
    console.log("This code always execute")
}
    */


// throw
function sum(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Invalid values")
    }
    return a + b
}

try {
    console.log(sum(5, 10))
    console.log(sum("5", 10))
    console.log(sum(5, "10"))
    console.log(sum("5", "10"))
} catch (error) {
    console.log("An error has occurred", error.message)
}

