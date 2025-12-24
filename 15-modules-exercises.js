// 15-modules-exercises.js


// 1. Export a function
export function sum(a, b) {
    return a = b
}

// 2. Export a constant
export const NAME = 'Nikola'


// 3. Export a class
export class Animal {
    constructor(name) {
        this.name = name
    }
}

// 4. Export a function, a constant and a class by default (if allowed)
export default function substract(a, b) {
    return a - b
}
