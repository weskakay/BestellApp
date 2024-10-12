// restaurant.js

// Aktuell ausgewähltes Restaurant
let selectedRestaurant = null;

// Restaurant-Datenbank
const restaurants = {
    italian: {
        name: "Italienisches Restaurant",
        fullName: "La Dolce Vita",
        image: "/assets/img/Restaurants/Italien.jpg",
        description: "Genießen Sie authentische italienische Küche mit frischen Zutaten und traditionellen Rezepten.",
        rating: 4.5,
        deliveryPrice: 2.50,
        dishes: {
            appetizers: [
                { name: "Bruschetta", price: 5.50, image: "/assets/img/Vorspeise/Bruschetta.jpg" },
                { name: "Caprese", price: 6.00, image: "/assets/img/Vorspeise/Caprese.jpg" },
                { name: "Antipasti", price: 8.00, image: "/assets/img/Vorspeise/Antipasti.jpg" }
            ],
            mains: [
                { name: "Margherita Pizza", price: 8.50, image: "/assets/img/Hauptgang/MargheritaPizza.jpeg" },
                { name: "Spaghetti Carbonara", price: 10.00, image: "/assets/img/Hauptgang/SpaghettiCarbonara.jpeg" },
                { name: "Lasagne", price: 11.50, image: "/assets/img/Hauptgang/Lasagne.jpg" }
            ],
            desserts: [
                { name: "Tiramisu", price: 5.00, image: "/assets/img/Desserts/Tiramisu.jpg" },
                { name: "Panna Cotta", price: 4.50, image: "/assets/img/Desserts/PannaCotta.jpg" },
                { name: "Gelato", price: 3.50, image: "/assets/img/Desserts/Gelato.jpg" }
            ]
        }
    },
    asian: {
        name: "Asiatisches Restaurant",
        fullName: "Sakura Garden",
        image: "/assets/img/Restaurants/Asien.jpg",
        description: "Erleben Sie die Vielfalt der asiatischen Küche mit exotischen Aromen und Gewürzen.",
        rating: 4.5,
        deliveryPrice: 3.00,
        dishes: {
            appetizers: [
                { name: "Frühlingsrollen", price: 4.50, image: "/assets/img/Vorspeise/Fruehlingsrollen.jpg" },
                { name: "Gyoza", price: 5.00, image: "/assets/img/Vorspeise/Gyoza.jpeg" },
                { name: "Miso Suppe", price: 3.50, image: "/assets/img/Vorspeise/MisoSuppe.jpeg" }
            ],
            mains: [
                { name: "Sushi Set", price: 12.00, image: "/assets/img/Hauptgang/SushiSet.jpeg" },
                { name: "Pad Thai", price: 9.50, image: "/assets/img/Hauptgang/PadThai.jpeg" },
                { name: "Rindfleisch Teriyaki", price: 11.00, image: "/assets/img/Hauptgang/RindfleischTeriyaki.jpeg" }
            ],
            desserts: [
                { name: "Mochi", price: 4.00, image: "/assets/img/Desserts/Mochi.jpeg" },
                { name: "Klebreis mit Mango", price: 5.50, image: "/assets/img/Desserts/KlebreisMango.jpg" },
                { name: "Sesamkugeln", price: 4.50, image: "/assets/img/Desserts/Sesamkugeln.jpg" }
            ]
        }
    },
    fusion: {
        name: "fusion",
        fullName: "La Fusion Restaurante",
        image: "/assets/img/Restaurants/Fusion.jpg",
        description: "Eine kreative Mischung aus verschiedenen Küchenstilen für ein einzigartiges Geschmackserlebnis.",
        rating: 5.0,
        deliveryPrice: 2.00,
        dishes: {
            appetizers: [
                { name: "Taco Bites", price: 6.00, image: "/assets/img/Vorspeise/TacoBites.jpg" },
                { name: "Süßkartoffel Pommes", price: 5.00, image: "/assets/img/Vorspeise/SüßkartoffelPommes.jpeg" },
                { name: "Tom Kha Gung", price: 7.50, image: "/assets/img/Vorspeise/tom_kha_gung.webp" }
            ],
            mains: [
                { name: "Kichererbsen Curry", price: 10.50, image: "/assets/img/Hauptgang/KichererbsenCurry.jpg" },
                { name: "Reef'n Beef Nudeln", price: 11.00, image: "/assets/img/Hauptgang/ReefnBeefNudeln.jpg" },
                { name: "Gegrilltes Lachsfilet", price: 13.50, image: "/assets/img/Hauptgang/GegrilltesLachsfilet.jpg" }
            ],
            desserts: [
                { name: "GebackeneBanane", price: 4.50, image: "/assets/img/Desserts/GebackeneBanane.jpg" },
                { name: "Affogato", price: 6.00, image: "/assets/img/Desserts/Affogato.webp" },
                { name: "Möhrenkuchen", price: 5.50, image: "/assets/img/Desserts/Möhrenkuchen.jpg" }
            ]
        }
    }
};

// Funktion zum Rendern der Restaurants
function renderRestaurants() {
    const restaurantSelection = document.querySelector('.restaurant-selection');
    restaurantSelection.innerHTML = ''; // Leeren des Containers

    Object.keys(restaurants).forEach(key => {
        const restaurant = restaurants[key];
        const restaurantElement = document.createElement('div');
        restaurantElement.className = 'restaurant';
        restaurantElement.id = key;
        restaurantElement.onclick = () => toggleRestaurant(key);

        // Erzeugen der Sternebewertung
        const starRating = generateStarRating(restaurant.rating);

        // Dynamisch das Bild und die Informationen hinzufügen
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

// Funktion zum Umschalten des ausgewählten Restaurants
function toggleRestaurant(restaurantKey) {
    console.log(`Restaurant ${restaurantKey} ausgewählt.`);

    // Überprüfen, ob der Container bereits existiert
    let menuContainer = document.querySelector(`#${restaurantKey}-menu`);

    if (selectedRestaurant === restaurantKey) {
        // Wenn dasselbe Restaurant ausgewählt wird, klappen wir es zu
        selectedRestaurant = null;
        if (menuContainer) {
            menuContainer.remove(); // Entfernt den vorhandenen Menücontainer
        }
        return;
    }

    if (selectedRestaurant && selectedRestaurant !== restaurantKey) {
        // Wenn ein anderes Restaurant ausgewählt ist und der Warenkorb nicht leer ist
        if (cart.length > 0) {
            const confirmSwitch = confirm("Sie haben bereits eine Bestellung im anderen Restaurant. Möchten Sie diese Bestellung abbrechen und eine neue beginnen?");
            if (!confirmSwitch) {
                // Wenn der Benutzer sich entscheidet, die Bestellung nicht abzubrechen
                return;
            } else {
                // Wenn der Benutzer sich entscheidet, die Bestellung abzubrechen
                cart = []; // Leere den Warenkorb
                renderCart(); // Aktualisiere den Warenkorb in der Ansicht
                calculateTotal(); // Berechne die Gesamtsumme neu
            }
        }

        // Entfernt den Menücontainer des vorherigen Restaurants
        let previousMenuContainer = document.querySelector(`#${selectedRestaurant}-menu`);
        if (previousMenuContainer) {
            previousMenuContainer.remove();
        }
    }

    selectedRestaurant = restaurantKey;
    
    // Erstelle einen neuen Container direkt unter dem Restaurant
    if (!menuContainer) {
        menuContainer = document.createElement('div');
        menuContainer.id = `${restaurantKey}-menu`;
        menuContainer.className = 'menu-container';
        document.getElementById(restaurantKey).after(menuContainer);
    }

    // Lade das Menü in den neu erstellten Container
    loadMenu(restaurantKey, menuContainer);

    // Smooth Scroll zu dem neu erstellten Menübereich
    menuContainer.scrollIntoView({ behavior: 'smooth' });
}

// Funktion zum Laden des Menüs eines Restaurants
function loadMenu(restaurantKey, container) {
    const restaurant = restaurants[restaurantKey];
    if (!restaurant) {
        console.error(`Restaurant ${restaurantKey} nicht gefunden.`);
        return;
    }

    container.innerHTML = `<h3>Gerichte von ${restaurant.name}</h3>`;
    console.log(`Gerichte von ${restaurant.name} werden geladen.`);

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
        section.id = categoryTitle.toLowerCase(); // Für die Navigation

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

// Hilfsfunktion zur Generierung der Sternebewertung
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

// Funktion zur Auswahl der Lieferung beim Laden der Seite
function selectDelivery() {
    toggleDelivery(true); // Standardmäßig Lieferung auswählen
}
