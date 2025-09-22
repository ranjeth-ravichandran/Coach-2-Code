const recipeList = document.querySelector("ul");

fetch('./recipes.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      data.forEach(element => {
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
        element.ingredients.forEach(ingredient => {
          const ingredientListElementTag = document.createElement("li");
          ingredientListElementTag.textContent = ingredient
          ingredientListTag.appendChild(ingredientListElementTag);
        })


        const stepsTitle = document.createElement("p");
        stepsTitle.textContent = "Steps"

        const stepListTag = document.createElement("ul");
        stepListTag.textContent = "Steps"
        element.steps.forEach(step => {
          const stepListElementTag = document.createElement("li");
          stepListElementTag.textContent = step;
          stepListTag.appendChild(stepListElementTag);

        })
        
        recipe.appendChild(titleTag)
        recipe.appendChild(timeTag)
        recipe.appendChild(cuisineTag)
        recipe.appendChild(ingredientsTitle)
        recipe.appendChild(ingredientListTag)
        recipe.appendChild(stepsTitle)
        recipe.appendChild(stepListTag)

        recipeList.appendChild(recipe)
      });

    })
    .catch(err => console.error(err));

