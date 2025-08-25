console.log("Hello World")

// Objects
// hasmaps, maps, dictionary
// key value pairs
/* 
const employee = {
    key:value,
    key:value,
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
} */

/* Arrays -> List of elements */
/* [] -> List/ Arrays syntax */
/* Good for storing similar/Same data types together */
/* index -> index number which links to an element in the array */

const ingredients = ["Chicken", "Butter", "Salt", "Pepper"];
console.log(ingredients)

var index = 0
console.log(`index number: ${index}, value: ${ingredients[index]}`)

ingredients[0] = "TOFU" //Changing a value in an array
console.log(`index number: ${index}, value: ${ingredients[index]}`)

ingredients.push("Burger") //Adds an item in the array at the end
console.log(ingredients)

let lastIngredient = ingredients.pop() //Removes the last element in the array and returns the value
console.log(ingredients)
console.log(`Last Ingredient: ${lastIngredient}`)


