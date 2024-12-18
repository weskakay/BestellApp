function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star full">★</span>';
    }

    if (halfStar) {
        starsHTML += '<span class="star half">★</span>';
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star empty">☆</span>';
    }

    return starsHTML;
}