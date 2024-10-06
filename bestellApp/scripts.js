let cart = [];
let selectedRestaurant = null;
const minOrderValue = 10;
const deliveryFee = 3.99;
let deliverySelected = true; // Standardmäßig auf Lieferung gesetzt
// Datenbank der Restaurants und SpeisenLasagne
const restaurants = {
    italian: {
        name: "Italienisches Restaurant",
        image: "/assets/img/Restaurants/Italien.jpg",
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
        image: "/assets/img/Restaurants/Asien.jpg",
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
        name: "Fusion Restaurant",
        image: "/assets/img/Restaurants/Fusion.jpg",
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

function renderRestaurants() {
    const restaurantSelection = document.querySelector('.restaurant-selection');

    Object.keys(restaurants).forEach(key => {
        const restaurant = restaurants[key];
        const restaurantElement = document.createElement('div');
        restaurantElement.className = 'restaurant';
        restaurantElement.id = key;
        restaurantElement.onclick = () => toggleRestaurant(key);

        // Dynamisch das Bild und den Namen hinzufügen
        restaurantElement.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
        `;

        restaurantSelection.appendChild(restaurantElement);
    });
}

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

// Beim Laden der Seite Restaurants rendern
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
    selectDelivery(); // Setze standardmäßig auf Lieferung
    }
);

function addToCart(restaurantKey, category, dishName, price) {
    console.log(`Gericht ${dishName} wird zum Warenkorb hinzugefügt.`);
    const existingItemIndex = cart.findIndex(item => item.name === dishName && item.restaurant === restaurantKey);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ restaurant: restaurantKey, category, name: dishName, price, quantity: 1 });
    }
    renderCart();
    calculateTotal();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span class="cart-item-quantity">${item.quantity}x</span>
            <span class="cart-item-name">${item.name}</span>
            <div class="cart-item-controls">
                <button onclick="changeQuantity(${index}, 'increase')">+</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${index}, 'decrease')">-</button>
                <button onclick="removeItem(${index})">🗑️</button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
}

function changeQuantity(index, action) {
    if (action === 'increase') {
        cart[index].quantity += 1;
    } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeItem(index);
    }
    renderCart();
    calculateTotal();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
    calculateTotal();
}

function calculateTotal() {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;

    // Berechne Lieferkosten nur, wenn Lieferung ausgewählt ist
    if (deliverySelected) {
        total += deliveryFee;
        document.getElementById('delivery-cost').innerText = `${deliveryFee.toFixed(2)} €`;
    } else {
        document.getElementById('delivery-cost').innerText = `0,00 €`;
    }

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    if (total < minOrderValue) {
        orderBtn.disabled = true;
        orderBtn.classList.remove('active'); // Entferne den aktiven Stil
        orderMessage.innerText = "Bitte den Mindestbestellwert beachten.";
        orderMessage.style.display = 'block'; // Zeigt die Nachricht an
    } else {
        orderBtn.disabled = false;
        orderBtn.classList.add('active'); // Füge den aktiven Stil hinzu
        orderMessage.innerText = "";
        orderMessage.style.display = 'none'; // Versteckt die Nachricht
    }
}

function placeOrder() {
    alert("Danke für Ihre Bestellung! Ihre Bestellung wird bearbeitet.");
    cart = [];
    renderCart();
    calculateTotal();
}

function toggleFooterLinks() {
    const footerLinksContent = document.getElementById('footer-links-content');
    const pageContent = document.getElementById('page-content');
    
    if (footerLinksContent.style.display === 'none' || footerLinksContent.style.display === '') {
        footerLinksContent.style.display = 'flex';
        footerLinksContent.scrollIntoView({ behavior: 'smooth' }); // Smooth Scroll zum Footer
    } else {
        footerLinksContent.style.display = 'none';
        pageContent.style.display = 'none'; // Versteckt die Seite, wenn die Liste zugeklappt wird
    }
}

function showPage(event, pageId) {
    event.preventDefault();  // Verhindert das Standardverhalten, das das Scrollen nach oben verursacht
    const pageContent = document.getElementById('page-content');
    let content = '';

    switch (pageId) {
        case 'kundenservice':
            content = `
                <h2>Kundenservice</h2>
                <div id="chat-container">
                    <div id="chat-window">
                        <div id="chat-messages"></div>
                    </div>
                    <form id="chat-form">
                        <input type="text" id="chat-input" placeholder="Ihre Nachricht..." autocomplete="off" required>
                        <button type="submit">Senden</button>
                    </form>
                </div>
            `;
            break;
        case 'geschaeftEmpfehlen':
            content = `<h2>Ein Geschäft empfehlen</h2><p>Hier können Sie ein Geschäft empfehlen...</p>`;
            break;
        case 'geschaeftAnmelden':
            content = `<h2>Ein Geschäft anmelden</h2><p>Hier können Sie Ihr Geschäft anmelden...</p>`;
            break;
        case 'fahrerWerden':
            content = `<h2>Fahrer*in werden</h2><p>Hier erfahren Sie, wie Sie Fahrer*in werden können...</p>`;
            break;
        case 'jobs':
            content = `<h2>Jobs</h2><p>Hier finden Sie Informationen zu offenen Stellen...</p>`;
            break;
        case 'stempelkarten':
            content = `<h2>Stempelkarten</h2><p>Hier finden Sie Informationen zu Stempelkarten...</p>`;
            break;
        case 'agb':
            content = `<h2>AGB</h2><p>Hier finden Sie unsere Allgemeinen Geschäftsbedingungen...</p>`;
            break;
        case 'datenschutz':
            content = `<h2>Datenschutzerklärung</h2><p>Hier finden Sie unsere Datenschutzerklärung...</p>`;
            break;
        case 'impressum':
            content = `<h2>Impressum</h2><p>Hier finden Sie unser Impressum...</p>`;
            break;
        case 'cookies':
            content = `<h2>Verwendung von Cookies</h2><p>Hier erfahren Sie mehr über unsere Verwendung von Cookies...</p>`;
            break;
    }

    pageContent.innerHTML = content;
    pageContent.style.display = 'block';

    // Initialisieren des Chatbots nur für die Kundenservice-Seite
    if (pageId === 'kundenservice') {
        initializeChatbot();
    }
    
    // Sicherstellen, dass die Seite unten bleibt
    pageContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function initializeChatbot() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Vordefinierte Antworten für die Demonstration
    const responses = {
        "bestellung": "Um Ihre Bestellung einzusehen, klicken Sie bitte auf 'Warenkorb'.",
        "hilfe": "Wie kann ich Ihnen helfen?",
        "lieferzeit": "Die aktuelle Lieferzeit beträgt ca. 30 Minuten.",
        "danke": "Gern geschehen! Wenn Sie weitere Fragen haben, bin ich für Sie da.",
        "hallo": "Hallo! Wie kann ich Ihnen heute helfen?",
        // Weitere Schlüsselwörter und Antworten können hinzugefügt werden
    };

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        // Anzeige der Benutzer-Nachricht
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user');
        userMessageElement.innerText = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Scrollen zum Ende
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Eingabe leeren
        chatInput.value = '';

        // Simulation der Bot-Antwort
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('message', 'bot');

            // Einfache Schlüsselwort-basierte Antwort
            let botResponse = "Es tut mir leid, ich verstehe Ihre Anfrage nicht. Bitte versuchen Sie es anders zu formulieren.";
            for (let keyword in responses) {
                if (userMessage.toLowerCase().includes(keyword)) {
                    botResponse = responses[keyword];
                    break;
                }
            }

            botMessageElement.innerText = botResponse;
            chatMessages.appendChild(botMessageElement);

            // Scrollen zum Ende
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000); // Simulierte Verzögerung
    });
}


// Entfernen oder auskommentieren Sie diesen Code
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     document.getElementById('form-message').innerText = "Ein Ticket wurde eröffnet. Wir bearbeiten Ihr Anliegen.";
// });




