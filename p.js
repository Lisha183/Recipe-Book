  
//          document.addEventListener('DOMContentLoaded', () => {
//     const recipeList = document.getElementById('recipe-list');
//     const myRecipes = document.getElementById('my-recipes');
//     const recipeDetails = document.getElementById('recipe-details');
//     const saveButton = document.getElementById('save-recipe');
//     const removeButton = document.getElementById('remove-recipe');

//     // Your Recipes Data (Replace with your actual data)
//     const recipes = [
//         {
//             id: 1,
//             title: 'Oven-Roasted Asparagus',
//             image: 'images/a.jpeg', // Replace with your image path
//             ingredients: ['Spaghetti', 'Eggs', 'Guanciale', 'Pecorino Romano', 'Black pepper'],
//             instructions: 'Cook spaghetti al dente. While spaghetti cooks, whisk eggs with pecorino and black pepper. Sauté guanciale until crispy. Drain spaghetti, reserving some pasta water. Add spaghetti to guanciale, then remove from heat. Stir in egg mixture, adding pasta water as needed to create a creamy sauce. Serve immediately.'
//         },
//         {
//             id: 2,
//             title: 'Chocolate Chip Cookies',
//             image: 'images/cookies.jpg', // Replace with your image path
//             ingredients: ['Butter', 'Sugar', 'Brown sugar', 'Eggs', 'Vanilla extract', 'Flour', 'Baking soda', 'Salt', 'Chocolate chips'],
//             instructions: 'Cream butter and sugars. Beat in eggs and vanilla. Mix in dry ingredients, then chocolate chips. Drop by spoonfuls onto a baking sheet. Bake until golden.'
//         },
//         {
//             id: 3,
//             title: 'Chicken Stir-Fry',
//             image: 'images/stir-fry.jpg', // Replace with your image path
//             ingredients: ['Chicken breast', 'Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Ginger', 'Garlic', 'Vegetable oil'],
//             instructions: 'Cut chicken and vegetables. Sauté chicken, then add vegetables. Add soy sauce, ginger, and garlic. Cook until vegetables are tender-crisp. Serve hot.'
//         },
//         {
//             id: 4,
//             title: 'Guacamole',
//             image: 'images/guacamole.jpg', // Replace with your image path
//             ingredients: ['Avocados', 'Lime juice', 'Onion', 'Cilantro', 'Jalapeño', 'Salt'],
//             instructions: 'Mash avocados with lime juice. Dice onion, cilantro, and jalapeño. Mix all ingredients and season with salt. Serve with chips.'
//         },
//         {
//           id: 5,
//           title: 'Tomato Soup',
//           image: 'images/tomato-soup.jpg',
//           ingredients: ['Canned tomatoes', 'Onion', 'Garlic', 'Vegetable broth', 'Basil', 'Olive oil', 'Salt', 'Pepper'],
//           instructions: 'Sauté onion and garlic in olive oil. Add tomatoes and vegetable broth. Simmer, then blend until smooth. Season with basil, salt, and pepper. Serve hot.'
//         },
//         {
//           id: 6,
//           title: 'Lemon Herb Roasted Chicken',
//           image: 'images/lemon-chicken.jpg',
//           ingredients: ['Whole chicken', 'Lemons', 'Rosemary', 'Thyme', 'Garlic', 'Olive oil', 'Salt', 'Pepper'],
//           instructions: 'Preheat oven. Stuff chicken with lemons, rosemary, thyme, and garlic. Rub with olive oil, salt, and pepper. Roast until cooked through.'
//         }
//     ];

//     // Function to display recipes on the home page
//     function displayRecipes() {
//         if (recipeList) {
//             recipes.forEach(recipe => {
//                 const card = document.createElement('div');
//                 card.className = 'recipe-card';
//                 card.innerHTML = `
//                     <img src="${recipe.image}" alt="${recipe.title}">
//                     <h3>${recipe.title}</h3>
//                     <a href="recipe.html?id=${recipe.id}">View Recipe</a>
//                 `;
//                 recipeList.appendChild(card);
//             });
//         }
//     }

//     // Function to display recipe details
//     function displayRecipeDetails() {
//         if (recipeDetails) {
//             const urlParams = new URLSearchParams(window.location.search);
//             const recipeId = parseInt(urlParams.get('id'));
//             const recipe = recipes.find(r => r.id === recipeId);

//             if (recipe) {
//                 recipeDetails.innerHTML = `
//                     <h2>${recipe.title}</h2>
//                     <img src="${recipe.image}" alt="${recipe.title}">
//                     <h3>Ingredients</h3>
//                     <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
//                     <h3>Instructions</h3>
//                     <p>${recipe.instructions}</p>
//                 `;
//             }
//         }
//     }

//     displayRecipes();
//     displayRecipeDetails();
// });  

// document.addEventListener('DOMContentLoaded', () => {
//     const recipeList = document.getElementById('recipe-list');
//     const myRecipes = document.getElementById('my-recipes');
//     const recipeDetails = document.getElementById('recipe-details');
//     const recipeForm = document.getElementById('recipe-form'); // Added for personal recipes
//     const savedRecipesList = document.getElementById('saved-recipes-list'); //added for personal recipes

//     // Combined recipe data
//     let recipes = [
//         { id: 1, title: 'Oven-Roasted Asparagus', image: 'a.jpeg', ingredients: ['Asparagus', 'Olive oil', 'Salt', 'Pepper'], instructions: 'Preheat oven. Toss asparagus with oil, salt, and pepper. Roast until tender.' },
//         { id: 2, title: 'Chile Relleno Casserole', image: 'chile-relleno-recipe-450x450.jpg', ingredients: ['Chicken breast', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Salad dressing'], instructions: 'Grill chicken. Chop vegetables. Mix all ingredients with dressing and serve.' },
    //     { id: 3, title: 'White Chicken Chili Recipe', image: 'White-chicken-chili-recipe-450x450.jpg', ingredients: ['Spaghetti', 'Eggs', 'Guanciale', 'Pecorino Romano', 'Black pepper'], instructions: 'Cook spaghetti al dente. While spaghetti cooks, whisk eggs with pecorino and black pepper. Sauté guanciale until crispy. Drain spaghetti, reserving some pasta water. Add spaghetti to guanciale, then remove from heat. Stir in egg mixture, adding pasta water as needed to create a creamy sauce. Serve immediately.' },
    //     { id: 4, title: 'Vegeterian Chili', image: ' Vegetarian-chili-recipe-450x450.jpg', ingredients: ['Butter', 'Sugar', 'Brown sugar', 'Eggs', 'Vanilla extract', 'Flour', 'Baking soda', 'Salt', 'Chocolate chips'], instructions: 'Cream butter and sugars. Beat in eggs and vanilla. Mix in dry ingredients, then chocolate chips. Drop by spoonfuls onto a baking sheet. Bake until golden.' },
    //     { id: 5, title: 'Turkey Chili', image: 'Turkey-chili-recipe-450x450.jpg ', ingredients: ['Chicken breast', 'Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Ginger', 'Garlic', 'Vegetable oil'], instructions: 'Cut chicken and vegetables. Sauté chicken, then add vegetables. Add soy sauce, ginger, and garlic. Cook until vegetables are tender-crisp. Serve hot.' },
    //     { id: 6, title: ' ', image: 'images/guacamole.jpg', ingredients: ['Avocados', 'Lime juice', 'Onion', 'Cilantro', 'Jalapeño', 'Salt'], instructions: 'Mash avocados with lime juice. Dice onion, cilantro, and jalapeño. Mix all ingredients and season with salt. Serve with chips.' },
       
    // ];

    // // Function to display recipes on the home page
    // function displayRecipes() {
    //     if (recipeList) {
    //         recipeList.innerHTML = ''; // Clear existing cards
    //         recipes.forEach(recipe => {
    //             const card = document.createElement('div');
    //             card.className = 'recipe-card';
    //             card.innerHTML = `
    //                 <img src="${recipe.image}" alt="${recipe.title}">
    //                 <h3>${recipe.title}</h3>
    //                 <a href="recipes.html?id=${recipe.id}">View Recipe</a>
    //             `;
    //             recipeList.appendChild(card);
    //         });
    //     }
    // }

    // // Function to display recipe details
    // function displayRecipeDetails() {
    //     if (recipeDetails) {
    //         const urlParams = new URLSearchParams(window.location.search);
    //         const recipeId = parseInt(urlParams.get('id'));
    //         const recipe = recipes.find(r => r.id === recipeId);

    //         if (recipe) {
    //             recipeDetails.innerHTML = `
    //                 <h2>${recipe.title}</h2>
    //                 <img src="${recipe.image}" alt="${recipe.title}">
    //                 <h3>Ingredients</h3>
    //                 <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
    //                 <h3>Instructions</h3>
    //                 <p>${recipe.instructions}</p>
    //             `;
    //         }
    //     }
    // }
    // //Personal recipes
    // function displayPersonalRecipes(){
    //     if(savedRecipesList){
    //         let personalRecipes = JSON.parse(localStorage.getItem('personalRecipes')) || [];
    //         savedRecipesList.innerHTML = '';

    //         personalRecipes.forEach((recipe, index)=>{
    //             const li = document.createElement('li');
    //             li.innerHTML = `${recipe.name} <button class="edit-button" data-index="${index}">Edit</button> <button class="delete-button" data-index="${index}">Delete</button>`;
    //             savedRecipesList.appendChild(li);
    //         });
    //     }
    // }
    // function savePersonalRecipes(recipes){
    //     localStorage.setItem('personalRecipes', JSON.stringify(recipes));
//     }

//     if(recipeForm){
//         recipeForm.addEventListener('submit', (e)=>{
//             e.preventDefault();
//             const name = document.getElementById('name').value;
//             const ingredients = document.getElementById('ingredients').value;
//             const instructions = document.getElementById('instructions').value;
//             let personalRecipes = JSON.parse(localStorage.getItem('personalRecipes')) || [];

//             personalRecipes.push({name, ingredients, instructions});
//             savePersonalRecipes(personalRecipes);
//             displayPersonalRecipes();
//             recipeForm.reset();
//         });
//     }

//     if(savedRecipesList){
//         savedRecipesList.addEventListener('click', (e)=>{
//             if(e.target.classList.contains('delete-button')){
//                 let index = parseInt(e.target.dataset.index);
//                 let personalRecipes = JSON.parse(localStorage.getItem('personalRecipes')) || [];
//                 personalRecipes.splice(index,1);
//                 savePersonalRecipes(personalRecipes);
//                 displayPersonalRecipes();
//             }
//         });
//     }

//     displayRecipes();
//     displayRecipeDetails();
//     displayPersonalRecipes();
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // ... (your existing code) ...

//     function getSavedRecipes() {
//         return JSON.parse(localStorage.getItem('savedRecipes')) || [];
//     }

//     function saveRecipes(recipes) {
//         localStorage.setItem('savedRecipes', JSON.stringify(recipes));
//     }

//     function saveRecipe(recipeId) {
//         const recipe = recipes.find(r => r.id === recipeId);
//         if (!recipe) return;

//         let savedRecipes = getSavedRecipes();
//         const isAlreadySaved = savedRecipes.some(r => r.id === recipe.id);

//         if (!isAlreadySaved) {
//             savedRecipes.push(recipe);
//             saveRecipes(savedRecipes);
//             window.location.href = 'personal.html'; // Redirect
//         } else {
//             alert("Recipe already saved!");
//         }
//     }

//     //update the html to use the saved recipe id.
//     if(document.URL.includes("recipes.html")){
//         const urlParams = new URLSearchParams(window.location.search);
//         const recipeId = parseInt(urlParams.get('id'));
//         if(recipeId){
//             const saveButton = document.getElementById('save-recipe');
//             if(saveButton){
//                 saveButton.addEventListener("click", ()=>{
//                     saveRecipe(recipeId);
//                 })
//             }
//         }
//     }

//     function displaySavedRecipes() {
//         if (myRecipes) {
//             myRecipes.innerHTML = '';
//             const savedRecipes = getSavedRecipes();
//             savedRecipes.forEach(recipe => {
//                 const recipeDiv = document.createElement('div');
//                 recipeDiv.innerHTML = `
//                     <h3>${recipe.title}</h3>
//                     <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
//                     <p>Instructions: ${recipe.instructions}</p>
//                     <button class="edit-button" data-id="${recipe.id}">Edit</button>
//                     <button class="delete-button" data-id="${recipe.id}">Delete</button>
//                 `;
//                 myRecipes.appendChild(recipeDiv);
//             });
//         }
//     }

//     function deleteRecipe(recipeId) {
//         let savedRecipes = getSavedRecipes();
//         savedRecipes = savedRecipes.filter(r => r.id !== recipeId);
//         saveRecipes(savedRecipes);
//         displaySavedRecipes();
//     }

//     if (myRecipes) {
//         myRecipes.addEventListener('click', (e) => {
//             if (e.target.classList.contains('delete-button')) {
//                 const recipeId = parseInt(e.target.dataset.id);
//                 deleteRecipe(recipeId);
//             }
//         });
//         displaySavedRecipes();
//     }

//     // ... (your existing code) ...
// });

// saveButton.addEventListener('click', () => {

//     const urlParams = new URLSearchParams(window.location.search);
//     const recipeId = parseInt(urlParams.get('id'));
//     const recipe = recipes.find(r => r.id === recipeId);

//     if (recipe) {
//         let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//         if (!savedRecipes.some(r => r.id === recipe.id)) {
//             savedRecipes.push(recipe);
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//             alert('Recipe saved successfully!');
//         } else {
//             alert('Recipe is already saved.');
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const myRecipesContainer = document.getElementById('my-recipes');
//     let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

//     function renderRecipes() {
//         myRecipesContainer.innerHTML = '';
//         savedRecipes.forEach((recipe, index) => {
//             const recipeCard = document.createElement('div');
//             recipeCard.className = 'recipe-card';
//             recipeCard.innerHTML = `
//                 <img src="${recipe.image}" alt="${recipe.title}">
//                 <h3 contenteditable="true">${recipe.title}</h3>
//                 <p contenteditable="true">${recipe.ingredients.join(', ')}</p>
//                 <p contenteditable="true">${recipe.instructions}</p>
//                 <button class="save-edit" data-index="${index}">Save Changes</button>
//                 <button class="delete-recipe" data-index="${index}">Delete Recipe</button>
//             `;
//             myRecipesContainer.appendChild(recipeCard);
//         });
//     }

//     renderRecipes();

//     myRecipesContainer.addEventListener('click', (e) => {
//         if (e.target.classList.contains('delete-recipe')) {
//             const index = e.target.getAttribute('data-index');
//             savedRecipes.splice(index, 1);
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//             renderRecipes();
//         } else if (e.target.classList.contains('save-edit')) {
//             const index = e.target.getAttribute('data-index');
//             const recipeCard = e.target.parentElement;
//             const updatedRecipe = {
//                 ...savedRecipes[index],
//                 title: recipeCard.querySelector('h3').innerText,
//                 ingredients: recipeCard.querySelector('p:nth-of-type(1)').innerText.split(', '),
//                 instructions: recipeCard.querySelector('p:nth-of-type(2)').innerText
//             };
//             savedRecipes[index] = updatedRecipe;
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//             alert('Recipe updated successfully!');
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing code) ...

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
                    <button id="save-recipe" class="btn btn-primary mt-3">Save Recipe</button>
                `;

                const saveButton = document.getElementById('save-recipe');
                if (saveButton) {
                    saveButton.addEventListener('click', () => saveFullRecipe(recipeId));
                }
            }
        }
    }

    function saveFullRecipe(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
            let savedRecipes = JSON.parse(localStorage.getItem('savedFullRecipes')) || [];
            savedRecipes.push(recipe);
            localStorage.setItem('savedFullRecipes', JSON.stringify(savedRecipes));
            window.location.href = 'personal.html';
        }
    }

    function displaySavedFullRecipes() {
        const savedFullRecipes = JSON.parse(localStorage.getItem('savedFullRecipes')) || [];
        savedRecipesList.innerHTML = '';
        savedFullRecipes.forEach(recipe => {
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
                <p><strong>Ingredients:</strong></p>
                <p>${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong></p>
                <p>${recipe.instructions}</p>
                <button class="edit-button" data-id="${recipe.id}">Edit</button>
                <button class="delete-button" data-id="${recipe.id}">Delete</button>
            `;
            savedRecipesList.appendChild(card);
        });

        attachEditListeners(savedRecipesList);
        attachDeleteListeners(savedRecipesList);
    }

    function removeFullRecipe(recipeId) {
        let savedFullRecipes = JSON.parse(localStorage.getItem('savedFullRecipes')) || [];
        savedFullRecipes = savedFullRecipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem('savedFullRecipes', JSON.stringify(savedFullRecipes));
        displaySavedFullRecipes();
    }

    function editFullRecipe(recipeId) {
        const recipe = JSON.parse(localStorage.getItem('savedFullRecipes')).find(recipe => recipe.id === recipeId);
        if (recipe) {
            document.getElementById('name').value = recipe.title;
            document.getElementById('ingredients').value = recipe.ingredients.join('\n');
            document.getElementById('instructions').value = recipe.instructions;
            removeFullRecipe(recipeId);
            displaySavedFullRecipes();
        }
    }

    function attachEditListeners(container) {
        container.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                editFullRecipe(recipeId);
            });
        });
    }

    function attachDeleteListeners(container) {
        container.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', () => {
                const recipeId = parseInt(button.dataset.id);
                removeFullRecipe(recipeId);
            });
        });
    }

    //update the loadSavedRecipes function name.
    loadSavedRecipes = displaySavedFullRecipes;

    displayRecipeDetails();
    displaySavedFullRecipes();
});
