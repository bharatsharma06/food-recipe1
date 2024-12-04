
let recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with a rich meat sauce.",
    rating: 4.5,
    ratingsCount: 10,
  },
];

// Function to display all recipes
function displayRecipes() {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    recipeContainer.innerHTML += `
      <div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <p>Rating: ${recipe.rating.toFixed(1)} (${recipe.ratingsCount} ratings)</p>
        <button onclick="rateRecipe(${recipe.id})">Rate this Recipe</button>
      </div>
    `;
  });
}

// Function to add a new recipe
function addRecipe() {
  const title = document.getElementById("newRecipeTitle").value;
  const description = document.getElementById("newRecipeDescription").value;

  if (title && description) {
    recipes.push({
      id: recipes.length + 1,
      title,
      description,
      rating: 0,
      ratingsCount: 0,
    });
    displayRecipes();
  } else {
    alert("Please provide a title and description for the recipe.");
  }
}

// Function to rate a recipe
function rateRecipe(recipeId) {
  const rating = parseFloat(prompt("Rate this recipe (1 to 5):"));

  if (rating >= 1 && rating <= 5) {
    const recipe = recipes.find((r) => r.id === recipeId);
    recipe.rating =
      (recipe.rating * recipe.ratingsCount + rating) /
      (recipe.ratingsCount + 1);
    recipe.ratingsCount += 1;
    displayRecipes();
  } else {
    alert("Please provide a valid rating between 1 and 5.");
  }
}

// Initialize display
