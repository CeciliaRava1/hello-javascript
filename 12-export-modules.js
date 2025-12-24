// 12-export-modules.js


// functions
export function add(a, b) {
    return a + b
}

console.log(add(5, 10))


// Properties
export const PI = 3.1416


// Default export
export default function substract(a, b) {
    return a - b
}


// Classes
export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}