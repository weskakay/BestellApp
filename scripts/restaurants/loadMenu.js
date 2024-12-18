function loadMenu(restaurantKey, container) {
    const restaurant = restaurants[restaurantKey];
    if (!restaurant) {
        return;
    }

    container.innerHTML = `<h3>Gerichte von ${restaurant.name}</h3>`;

    for (const [category, dishes] of Object.entries(restaurant.dishes)) {
        let categoryTitle = '';
        switch (category) {
            case 'appetizers':
                categoryTitle = 'Vorspeisen';
                break;
            case 'mains':
                categoryTitle = 'Hauptgerichte';
                break;
            case 'desserts':
                categoryTitle = 'Desserts';
                break;
        }

        let section = document.createElement('div');
        section.classList.add('dish-category');
        section.id = categoryTitle.toLowerCase();

        section.innerHTML = `<h4>${categoryTitle}</h4>`;

        let dishItems = document.createElement('div');
        dishItems.classList.add('dish-items');

        dishes.forEach(dish => {
            let dishElement = document.createElement('div');
            dishElement.classList.add('dish-item');
            dishElement.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <span>${dish.name} - ${dish.price.toFixed(2)} €</span>
                <button onclick="addToCart('${restaurantKey}', '${category}', '${dish.name}', ${dish.price})">+</button>
            `;
            dishItems.appendChild(dishElement);
        });

        section.appendChild(dishItems);
        container.appendChild(section);
    }
}
