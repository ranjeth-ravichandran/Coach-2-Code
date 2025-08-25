//Objects
// Helps with complex data structures
// When multiple different variables are describing an item,
// Objects are useful to link these variables to a location.

// stored in key:value, pairs
// keys are always strings
// value can be any data type

const employee = {
    firstName: "Jhon",
    lastName: "Doe",
    jobTtitle: "Project Manager",
    salary: 60000,
    currentProjects: ["Facebook, Amazon, Ebay, Instagram"]
};

console.log(employee["lastName"]) // Accessing value through the string value of the key
console.log(employee.lastName) // Accessing value through dot notation

employee.lastName = "R" //Editing a value in an object using the key
console.log(employee.lastName)

//Based on the values datatypes different methods can be worked on it
console.log(employee.salary * 1.2)
console.log(employee.firstName.toUpperCase())
console.log(employee.currentProjects[0])


console.log(Object.keys(employee)) // Getting the keys of an object
console.log(Object.values(employee)) // Getting the Values of an object


