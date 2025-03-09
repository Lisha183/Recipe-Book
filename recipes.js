document.addEventListener('DOMContentLoaded', () => {
    const savedRecipesList = document.getElementById('saved-recipes-list');

    function loadSavedRecipes() {
        const savedRecipeIds = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        savedRecipesList.innerHTML = ''; // Clear previous content

        // Fetch recipe data (replace with your actual data source)
        const recipes = [
            { id: 1, title: "Oven-Roasted Asparagus", image: "a.jpeg", ingredients: ["Spaghetti", "Eggs", "Guanciale", "Pecorino Romano"], instructions: "...", rating: 4.5 },
            { id: 2, title: "Chocolate Chip Cookies", image: "images/cookies.jpg", ingredients: ["Flour", "Butter", "Sugar", "Chocolate Chips"], instructions: "...", rating: 4.8 },
        ]; // Replace with your data source

        savedRecipeIds.forEach(recipeId => {
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}" class="card-image">
                    <h3 class="card-title">${recipe.title}</h3>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                        <span class="rating-value">${recipe.rating}</span>
                    </div>
                    <a href="recipe-details.html?id=${recipe.id}" class="card-link">View Recipe</a>
                    <button class="delete-button" data-id="${recipe.id}">Delete</button>
                `;
                savedRecipesList.appendChild(card);
            }
        });

        // Add event listeners for delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                removeRecipe(recipeId);
                loadSavedRecipes(); // Reload the list
            });
        });
    }

    function removeRecipe(recipeId) {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        savedRecipes = savedRecipes.filter(id => id !== recipeId);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    }

    loadSavedRecipes();
});

const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const recipe = { name, ingredients, instructions };
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
    this.reset();
});

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${recipe.ingredients}</p>
            <p><strong>Instructions:</strong></p>
            <p>${recipe.instructions}</p>
            <button class="edit-button" onclick="editRecipe(${index})">Edit</button>
            <button class="delete-button" onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(li);
    });
}

function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;
    recipes.splice(index, 1);
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
}

window.onload = displayRecipes;
