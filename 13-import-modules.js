// 13-import-modules.js


import { add, PI, Circle } from "./12-export-modules.js" // Import by name
import substract from "./12-export-modules.js" // Default import, the name does not matter. (Only one to import)


//functions
add(2,3)


// Properties
console.log(PI)


// Default import
console.log(substract(3, 6))


// Classes
let circle = new Circle(5)
console.log(circle.radius)
console.log(circle.area().toFixed(3))


// Modular project
import { MyImport } from "./directory/file.js"


