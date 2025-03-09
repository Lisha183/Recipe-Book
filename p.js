// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const myRecipes = document.getElementById('my-recipes');
    const recipeDetails = document.getElementById('recipe-details');
    const saveButton = document.getElementById('save-recipe');
    const removeButton = document.getElementById('remove-recipe');
    // Sample recipes data
    const recipes = [
        {
            id: 1,
            title: 'Oven-Roasted Asparagus',
            image: 'a.jpeg',
            ingredients: ['Asparagus', 'Olive oil', 'Salt', 'Pepper'],
            instructions: 'Preheat oven. Toss asparagus with oil, salt, and pepper. Roast until tender.'
        },
        
        {
            id: 2,
            title: 'Chicken Salad',
            image: 'images/chicken-salad.jpg',
            ingredients: ['Chicken breast', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Salad dressing'],
            instructions: 'Grill chicken. Chop vegetables. Mix all ingredients with dressing and serve.'
        }
    ];

    // Function to display recipes on the home page
    function displayRecipes() {
        if (recipeList) {
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>${recipe.title}</h3>
                    <a href="recipe.html?id=${recipe.id}">View Recipe</a>
                `;
                recipeList.appendChild(card);
            });
        }
    }

    // Function to display recipe details
    function displayRecipeDetails() {
        if (recipeDetails) {
            const urlParams = new URLSearchParams(window.location.search);
            const recipeId = parseInt(urlParams.get('id'));
            const recipe = recipes.find(r => r.id === recipeId);

            if (recipe) {
                recipeDetails.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>Ingredients</h3>
                    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                    <h3>Instructions</h3>
                    <p>${recipe.instructions}</p
::contentReference[oaicite:0]{index=0}
                `;
            }   
                
          document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const myRecipes = document.getElementById('my-recipes');
    const recipeDetails = document.getElementById('recipe-details');
    const saveButton = document.getElementById('save-recipe');
    const removeButton = document.getElementById('remove-recipe');

    // Your Recipes Data (Replace with your actual data)
    const recipes = [
        {
            id: 1,
            title: 'Oven-Roasted Asparagus',
            image: 'images/a.jpeg', // Replace with your image path
            ingredients: ['Spaghetti', 'Eggs', 'Guanciale', 'Pecorino Romano', 'Black pepper'],
            instructions: 'Cook spaghetti al dente. While spaghetti cooks, whisk eggs with pecorino and black pepper. Sauté guanciale until crispy. Drain spaghetti, reserving some pasta water. Add spaghetti to guanciale, then remove from heat. Stir in egg mixture, adding pasta water as needed to create a creamy sauce. Serve immediately.'
        },
        {
            id: 2,
            title: 'Chocolate Chip Cookies',
            image: 'images/cookies.jpg', // Replace with your image path
            ingredients: ['Butter', 'Sugar', 'Brown sugar', 'Eggs', 'Vanilla extract', 'Flour', 'Baking soda', 'Salt', 'Chocolate chips'],
            instructions: 'Cream butter and sugars. Beat in eggs and vanilla. Mix in dry ingredients, then chocolate chips. Drop by spoonfuls onto a baking sheet. Bake until golden.'
        },
        {
            id: 3,
            title: 'Chicken Stir-Fry',
            image: 'images/stir-fry.jpg', // Replace with your image path
            ingredients: ['Chicken breast', 'Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Ginger', 'Garlic', 'Vegetable oil'],
            instructions: 'Cut chicken and vegetables. Sauté chicken, then add vegetables. Add soy sauce, ginger, and garlic. Cook until vegetables are tender-crisp. Serve hot.'
        },
        {
            id: 4,
            title: 'Guacamole',
            image: 'images/guacamole.jpg', // Replace with your image path
            ingredients: ['Avocados', 'Lime juice', 'Onion', 'Cilantro', 'Jalapeño', 'Salt'],
            instructions: 'Mash avocados with lime juice. Dice onion, cilantro, and jalapeño. Mix all ingredients and season with salt. Serve with chips.'
        },
        {
          id: 5,
          title: 'Tomato Soup',
          image: 'images/tomato-soup.jpg',
          ingredients: ['Canned tomatoes', 'Onion', 'Garlic', 'Vegetable broth', 'Basil', 'Olive oil', 'Salt', 'Pepper'],
          instructions: 'Sauté onion and garlic in olive oil. Add tomatoes and vegetable broth. Simmer, then blend until smooth. Season with basil, salt, and pepper. Serve hot.'
        },
        {
          id: 6,
          title: 'Lemon Herb Roasted Chicken',
          image: 'images/lemon-chicken.jpg',
          ingredients: ['Whole chicken', 'Lemons', 'Rosemary', 'Thyme', 'Garlic', 'Olive oil', 'Salt', 'Pepper'],
          instructions: 'Preheat oven. Stuff chicken with lemons, rosemary, thyme, and garlic. Rub with olive oil, salt, and pepper. Roast until cooked through.'
        }
    ];

    // Function to display recipes on the home page
    function displayRecipes() {
        if (recipeList) {
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>${recipe.title}</h3>
                    <a href="recipe.html?id=${recipe.id}">View Recipe</a>
                `;
                recipeList.appendChild(card);
            });
        }
    }

    // Function to display recipe details
    function displayRecipeDetails() {
        if (recipeDetails) {
            const urlParams = new URLSearchParams(window.location.search);
            const recipeId = parseInt(urlParams.get('id'));
            const recipe = recipes.find(r => r.id === recipeId);

            if (recipe) {
                recipeDetails.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>Ingredients</h3>
                    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                    <h3>Instructions</h3>
                    <p>${recipe.instructions}</p>
                `;
            }
        }
    }

    displayRecipes();
    displayRecipeDetails();
});  