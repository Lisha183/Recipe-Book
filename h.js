function displayRating(card, rating) {
    const stars = card.querySelectorAll('.star');
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < stars.length; i++) {
        if (i < fullStars) {
            stars[i].textContent = '★'; // Filled star
        } else if (i === fullStars && hasHalfStar) {
            stars[i].textContent = '½'; // Half star (if needed)
        } else {
            stars[i].textContent = '☆'; // Empty star
        }
    }
}

// Example usage (assuming 'card' is a card element and 'recipe.rating' is the rating):
displayRating(card, recipe.rating);