const recipeList = document.querySelector("ul");

// 1. make a request that loads in the recipes from our own backend
// async -> similar to multithreading, tasks are worked separately from the other code
// CORS (Cross Origin Request ) ->
// npm i cors -> installs cors
// await -> async await for data to be fetched
// 2. Capture the response value
// 3. Turn it into JavaScript
// 4. Loop through each recipe
// 5. Create the html components for these recipes
// 6. Populate the text part using innerText
// 7. Append each recipe to the webpage

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("http://localhost:3000/recipes");
  const recipes = await response.json(); // Data saved as json so it should be retrieved as json
  console.log(recipes)

  for(const element of recipes) {
        let recipe = document.createElement("div");
        
        const titleTag = document.createElement("h3");
        titleTag.textContent = element.name;

        const timeTag = document.createElement("p");
        timeTag.textContent = element.time;

        const cuisineTag = document.createElement("p");
        cuisineTag.textContent = `Cuisine: ${element.cuisine}`

        const ingredientsTitle = document.createElement("p");
        ingredientsTitle.textContent = "Ingredients"

        const ingredientListTag = document.createElement("ul");
        for (const ingredient of element.ingredients) {
          const ingredientListElementTag = document.createElement("li");
          ingredientListElementTag.textContent = ingredient
          ingredientListTag.appendChild(ingredientListElementTag);
        }


        const stepsTitle = document.createElement("p");
        stepsTitle.textContent = "Steps"

        const stepListTag = document.createElement("ul");

        for (const step of element.steps) {
          const stepListElementTag = document.createElement("li");
          stepListElementTag.textContent = step;
          stepListTag.appendChild(stepListElementTag);
        }
        
        recipe.appendChild(titleTag)
        recipe.appendChild(timeTag)
        recipe.appendChild(cuisineTag)
        recipe.appendChild(ingredientsTitle)
        recipe.appendChild(ingredientListTag)
        recipe.appendChild(stepsTitle)
        recipe.appendChild(stepListTag)

        recipeList.appendChild(recipe)
  }

  const recipeForm = document.querySelector("form");
  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log(event.target.name.value)

    const newRecipe = {};
    newRecipe.name = event.target.name.value;
    newRecipe.cuisine = event.target.cuisine.value;
    newRecipe.time = event.target.time.value;
    
    const ingredientsText = event.target.ingredients.value;
    newRecipe.ingredients = ingredientsText.split(/\r?\n/); //Split the string into an array depending on the value given or even regex

    const stepsText = event.target.steps.value;
    newRecipe.steps = stepsText.split(/\r?\n/);

    //console.log(newRecipe)

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
    
  })

})

