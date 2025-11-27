// 07-classes.js


class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")
console.log(person)
console.log(person2)


class DefaultPerson {

    constructor(name = "Default name", age = 0, alias = "No alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
} 

let person3 = new DefaultPerson("Lore", 3)
console.log(person3)


// Properties access
console.log(person3.alias)
person3.alias = "New alias"
console.log(person["alias"])


// Functions
class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("The person is walking")
    }

}

let person4 = new PersonWithMethod("Luli", 3, "Lulita")
person4.walk()


// Private properties
class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Yoana", 40, "Yan", 3423423523)

// console.log(person5.bank) // No access
// person5.bank = "new number" // No access


// Get & Set
class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }
    get bank() {
        return this.#bank
    }

}

person6 = new GetPerson("Brais", 37, "Moure", "IBAN2425425234")
console.log("new")
console.log(person6.name)
person6.bank = "new IBAN54654654"
console.log(person6.bank)


// Inheritance
class Animal {
    
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Generic sound")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("The dog runs")
    }

}

let myDog = new Dog("Cachi")
myDog.run()
myDog.sound()


class Fish extends Animal {

    constructor (name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("The fish swims")
    }

}

let myFish = new Fish("NameFish", 10)
myFish.swim()
myFish.sound()


// Static methods
class MathOperations {

    static sum(a,b) {
        return a + b
    }

}


// let myClass = new MathOperations()
console.log(MathOperations.sum(2,3))