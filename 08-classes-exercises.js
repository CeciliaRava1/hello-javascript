// 08-classes-exercises.js


// 1. Create a class that accepts two properties
class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

}

let myPerson = new Person("Lucia", 23)
console.log(myPerson)


// 2. Add a method to the class that uses the properties
class Person1 {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    presentation() {
        return `Hi! My name is ${this.name} and Im ${this.age} years old`
    }

}


// 3. Show the property values and invoke the function
let myPerson1 = new Person1("Lucia", 23)
console.log(myPerson1.presentation())


// 4. Add a static method to the first class
class Person2 {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static greetings() {
        return "Hello!"
    }

}


// 5. Use the static method
console.log(Person2.greetings())


// 6. Create a class that uses inheritance
class Student extends Person {

    constructor(name, age, schoolName) {
        super(name, age)
        this.schoolName = schoolName
    }

}

let myStudent = new Student("Paolo", 13, "School One")
console.log(myStudent)


// 7. Create a class that uses getters and setters
class Student1 extends Person {

    constructor(name, age, schoolName) {
        super(name, age)
        this.schoolName = schoolName
        this._name = name;
    }

    get name() {
        return this.name
    }

    set name(name) {
        this._name = name
    }

}

let myStudent1 = new Student1("Paolo", 13, "School One")
myStudent1.name = "new name"
console.log(myStudent1)


// 8. Modify the class with getters and setters to use private properties

// 9. Use the get and set and show their values

// 10. Override a method of a class that uses inheritance