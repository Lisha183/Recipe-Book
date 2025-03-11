

document.addEventListener('DOMContentLoaded', () => {
    const savedRecipesList = document.getElementById('saved-recipes-list');
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    function loadSavedRecipes() {
        savedRecipesList.innerHTML = ''; // Clear previous content

        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.innerHTML = `
                <img src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.title}" class="card-image">
                <h3 class="card-title">${recipe.title}</h3>
                <div class="rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">☆</span>
                    <span class="rating-value">${recipe.rating || 4.0}</span>
                </div>
                <a href="recipe-details.html?id=${recipe.id}" class="card-link">View Recipe</a>
                <button class="delete-button" data-id="${recipe.id}">Delete</button>
            `;
            savedRecipesList.appendChild(card);
        });

        // Add event listeners for delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                removeRecipe(recipeId);
                loadSavedRecipes(); // Reload the list
                displayRecipes();
            });
        });
    }

    function removeRecipe(recipeId) {
        recipes = recipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function displayRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong></p>
                <p>${recipe.ingredients}</p>
                <p><strong>Instructions:</strong></p>
                <p>${recipe.instructions}</p>
                <button class="edit-button" onclick="editRecipe(${recipe.id})">Edit</button>
                <button class="delete-button" onclick="deleteRecipe(${recipe.id})">Delete</button>
            `;
            recipeList.appendChild(li);
        });
    }

    function editRecipe(recipeId) {
        const recipe = recipes.find(recipe => recipe.id === recipeId);
        if (recipe) {
            document.getElementById('name').value = recipe.title;
            document.getElementById('ingredients').value = recipe.ingredients;
            document.getElementById('instructions').value = recipe.instructions;
            removeRecipe(recipeId);
            displayRecipes();
        }
    }

    function deleteRecipe(recipeId) {
        removeRecipe(recipeId);
        displayRecipes();
    }

    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const ingredients = document.getElementById('ingredients').value;
            const instructions = document.getElementById('instructions').value;
            const recipe = {
                id: Date.now(),
                title: name,
                ingredients: ingredients,
                instructions: instructions
            };
            recipes.push(recipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            displayRecipes();
            loadSavedRecipes();
            this.reset();
        });
    }

    displayRecipes();
    loadSavedRecipes();
});

document.addEventListener('DOMContentLoaded', () => {
    const savedRecipesList = document.getElementById('saved-recipes-list');
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    function loadSavedRecipes() {
        savedRecipesList.innerHTML = '';

        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.innerHTML = `
                <img src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.title}" class="card-image">
                <h3 class="card-title">${recipe.title}</h3>
                <div class="rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">☆</span>
                    <span class="rating-value">${recipe.rating || 4.0}</span>
                </div>
                <a href="recipe-details.html?id=${recipe.id}" class="card-link">View Recipe</a>
                <button class="delete-button" data-id="${recipe.id}">Delete</button>
            `;
            savedRecipesList.appendChild(card);
        });

        attachDeleteListeners(savedRecipesList);
    }

    function removeRecipe(recipeId) {
        recipes = recipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function displayRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong></p>
                <p>${recipe.ingredients}</p>
                <p><strong>Instructions:</strong></p>
                <p>${recipe.instructions}</p>
                <button class="edit-button" data-id="${recipe.id}">Edit</button>
                <button class="delete-button" data-id="${recipe.id}">Delete</button>
            `;
            recipeList.appendChild(li);
        });
        attachEditListeners(recipeList);
        attachDeleteListeners(recipeList);
    }

    function editRecipe(recipeId) {
        const recipe = recipes.find(recipe => recipe.id === recipeId);
        if (recipe) {
            document.getElementById('name').value = recipe.title;
            document.getElementById('ingredients').value = recipe.ingredients;
            document.getElementById('instructions').value = recipe.instructions;
            removeRecipe(recipeId);
            displayRecipes();
            loadSavedRecipes();
        }
    }

    function deleteRecipe(recipeId) {
        removeRecipe(recipeId);
        displayRecipes();
        loadSavedRecipes();
    }

    function attachEditListeners(container) {
        container.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                editRecipe(recipeId);
            });
        });
    }

    function attachDeleteListeners(container) {
        container.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                deleteRecipe(recipeId);
            });
        });
    }

    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const ingredients = document.getElementById('ingredients').value;
            const instructions = document.getElementById('instructions').value;
            const recipe = {
                id: Date.now(),
                title: name,
                ingredients: ingredients,
                instructions: instructions
            };
            recipes.push(recipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            displayRecipes();
            loadSavedRecipes();
            this.reset();
        });
    }

    displayRecipes();
    loadSavedRecipes();
});