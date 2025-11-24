// objects-exercises.js


// 1. Create an object with 3 properties
let flower = {
    color: 'Pink',
    season: 'Spring',
    country: 'Chile'
}


// 2. Access and display its value
console.log(flower.color)


// 3. Add a new property
flower.owner = 'Cinthya'


// 4. Remove one of the first 3 properties
delete flower.country


// 5. Add a function and invoke it
flower.sleep = function() {
    console.log('The flower is sleeping')
}
flower.sleep()


// 6. Iterate over the object's properties
for (let key in flower) {
    console.log(`${key}: ${flower[key]}`)
}


// 7. Create a nested object
let cat = {
    name: 'Kitty',
    color: 'Brown',

    location: {
        country: 'Guatemala',
        city: 'San Jose Pinula'
    }
}


// 8. Access and display the values of the nested properties
console.log(cat.location.country)


// 9. Check if the two created objects are equal
console.log(cat == flower)


// 10. Check if two different properties are equal
console.log(cat.name == flower.color)
