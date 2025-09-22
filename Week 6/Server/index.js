const cors = require("cors");

const express = require("express");
const app = express();
const port = 3000;

app.use(cors()); // Enables CORS in the backend for simple demo

app.use(express.json());

/* const recipes = [
    {
        name: "Spaghetti Carbonara",
        time: "30 minutes",
        cuisine: "Italian",
        ingredients: [
            "200g spaghetti",
            "2 large eggs",
            "100g grated Parmesan cheese",
            "150g bacon, chopped",
            "2 cloves garlic, minced",
            "1/2 teaspoon black pepper",
            "Salt to taste"
        ],
        steps: [
            "Cook spaghetti according to package instructions.",
            "In a bowl, whisk eggs and grated Parmesan cheese.",
            "Cook bacon in a pan until crispy, then add minced garlic.",
            "Drain spaghetti and add it to the pan with bacon and garlic.",
            "Remove from heat, add the egg and cheese mixture, and toss quickly to coat the spaghetti.",
            "Season with black pepper and salt to taste.",
            "Serve immediately."
        ]
    },
    {
        name: "Chicken Tikka Masala",
        time: "1 hour",
        cuisine: "Indian",
        ingredients: [
            "500g chicken breast, cut into pieces",
            "200g yogurt",
            "400g tomato puree",
            "1 large onion, finely chopped",
            "3 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "1 tablespoon garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon coriander",
            "100ml cream",
            "2 tablespoons oil",
            "Salt to taste"
        ],
        steps: [
            "Marinate chicken in yogurt, garlic, ginger, and spices for 30 minutes.",
            "Heat oil in a pan and cook the marinated chicken until browned.",
            "Remove chicken and sauté chopped onions in the same pan.",
            "Add tomato puree, spices, and cook until the mixture thickens.",
            "Add the chicken back to the pan and simmer for 15 minutes.",
            "Stir in cream and cook for another 5 minutes.",
            "Serve with rice or naan."
        ]
    },
    {
        name: "Chocolate Chip Cookies",
        time: "25 minutes",
        cuisine: "American",
        ingredients: [
            "250g flour",
            "200g butter, softened",
            "150g sugar",
            "150g brown sugar",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "1 teaspoon baking soda",
            "1/2 teaspoon salt",
            "200g chocolate chips"
        ],
        steps: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, cream together butter, sugar, and brown sugar.",
            "Beat in eggs and vanilla extract.",
            "Mix in flour, baking soda, and salt.",
            "Fold in chocolate chips.",
            "Drop spoonfuls of dough onto a baking sheet.",
            "Bake for 10-12 minutes or until golden brown.",
            "Let cool before serving."
        ]
    }
]; */

const fs = require("fs");
const path = require("path");

const recipesFilePath = path.join(__dirname, "recipes.json");

app.get("/", (req, res) => {
    res.send("Hello World (Ranjeth R), This is the Home Page.")
})

app.get("/recipes", (req, res) => {
    // Read in JSON file to get the recipes.
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        // Read in File through filepath, encoding is added as security measure
        // err - > holds errors
        // data -> holds the data read in from the file

        // Parse JSON daa to be turned into plain Javascript
        const recipes = JSON.parse(data);
        res.json(recipes);
    })
});

app.post("/recipes", (req, res) => {

    console.log(req.body); // Can be seen in the server console of the data being in POST

    const newRecipe = req.body;
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        const recipes = JSON.parse(data);
        recipes.push(newRecipe);

        fs.writeFile(recipesFilePath, JSON.stringify(recipes), () => {});
    })

    res.send("Recipes added, storing your favourite dishes.")
});

app.listen(port, () => {
    console.log("Server is running on https://localhost:", port)
});
