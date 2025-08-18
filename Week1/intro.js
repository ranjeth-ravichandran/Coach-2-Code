console.log("Hello World")

// Values that do not change when the program is running.
// Using Const
// camelCase

const firstName = 'Ranjeth'
const lastName = "Ravichandran"
const fullname = firstName + lastName
let greeting = 'Hello'
greeting = 'hi there!'

console.log(`${greeting}, ${fullname}`)

/* 
String: Represents text (e.g., "Hello, world!").
Number: Represents numeric values (e.g., 42, 3.14).
Boolean: Represents true or false values (e.g., true, false).
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Object: Represents a collection of key-value pairs (e.g., { name: "John", age: 30 }).
Array: Represents an ordered list of values (e.g., [1, 2, 3, "apple"]). 
*/

console.log(3+4)
console.log(9-64)
console.log(5*4)
console.log(6/0)

// Null & Undefined
/* 
'undeﬁned' typically means that a variable has been declared but has not yet been assigned a value. It's JavaScript's default state for uninitialized variables. 

On the other hand, 'null' is an assignment value. It means a variable has been explicitly assigned the value of null, representing the intentional absence of a
value. 

Essentially, undeﬁned is JavaScript saying "no value has been given yet," while null is the
programmer saying "there is intentionally no value here." 
*/


// If-Statements

// === -> Checks if the values are equal / the same
console.log(4 === 2+2) //true
console.log(4 === 2+3) //false
console.log('apple' === 'apple') //true
console.log('apple' === 'orange') //false

// > - Greater than
console.log(5>4) //true
console.log(9>100) //false

// < - Less Than
console.log(99 < 100) //true
console.log(100 < 5) //false

// >= Greater than and Equal to & <= Less than and Equal to
console.log(100<100) //false
console.log(100 <= 100) //true
console.log(99 <= 100) // true


// If-Else Statements
const age = 18

if (age >= 18) {
    console.log("Allowed to enroll")
} else if (age <= 10) {
    console.log("Need to wait a few more years, sorry")
}
else {
    console.log("Need parental consent")
}

// Multiple Conditions using Logical operators AND &&, OR ||
const haveParentalConsent = true;

if (age >= 18) {
    console.log("Allowed to enroll")
} else if (age <= 18 && haveParentalConsent) {
    console.log("Allowed to enroll with parental consent")
}

if (age >= 18 || haveParentalConsent) {
    console.log("Can enroll")
}