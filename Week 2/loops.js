//Loops
// When accessing or editing data in large quantities in objects/arrays,
// loops make it easier to manipulate the data.
// Ideally loop through dataset with the same data type

const numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers)

console.log("For Loop using an Index")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log("For Each Loop")
for (number of numbers) {
    console.log(number)
}

console.log("For Each Loop with multiplication")
for (number of numbers) {
    console.log(number * 2)
}

console.log("For Each Loop for even numbers")
for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

console.log("For Each Loop adding to another list")
const evenNumbers = []
for (number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number * 2)
    }
}
console.log(evenNumbers)

// Array which is storing objects
console.log("Looping through an array with objects")
const employees = [
    {name: "John Doe", salary: 60000, department: "marketing"},
    {name: "Alice Cooper", salary: 75000, department: "engineering"},
    {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
]

console.log(employees.length) //Number of elements in the array

let total = 0
for (employee of employees) {
    total += employee.salary
}
let avg = total / employees.length
console.log(avg) // Average

//Employee which has greater salary than the average
for (employee of employees) {
    if (employee.salary > avg) {
        console.log(employee.name)
    }
}