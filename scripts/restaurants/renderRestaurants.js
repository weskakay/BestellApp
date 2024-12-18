function renderRestaurants() {
    const restaurantSelection = document.querySelector('.restaurant-selection');
    restaurantSelection.innerHTML = '';

    Object.keys(restaurants).forEach(key => {
        const restaurant = restaurants[key];
        const restaurantElement = document.createElement('div');
        restaurantElement.className = 'restaurant';
        restaurantElement.id = key;
        restaurantElement.onclick = () => toggleRestaurant(key);
        const starRating = generateStarRating(restaurant.rating);
        restaurantElement.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.fullName}">
            <div class="restaurant-info">
                <h3>${restaurant.fullName}</h3>
                <div class="restaurant-rating">
                    ${starRating} (${restaurant.rating} von 5)
                </div>
                <p>${restaurant.description}</p>
                <p>Lieferkosten: ${restaurant.deliveryPrice.toFixed(2)} €</p>
            </div>
        `;

        restaurantSelection.appendChild(restaurantElement);
    });
}