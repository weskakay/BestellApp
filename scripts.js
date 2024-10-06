let cart = [];
let selectedRestaurant = null;
const minOrderValue = 10;
const deliveryFee = 3.99;
let deliverySelected = true; // Standardmäßig auf Lieferung gesetzt
// Datenbank der Restaurants und SpeisenLasagne
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
// This feature creates a visual representation of the star rating.
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
    let deliveryCost = 0;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    if (deliverySelected) {
        // Überprüfen, ob ein Restaurant ausgewählt ist
        if (selectedRestaurant && restaurants[selectedRestaurant]) {
            // Hole die Liefergebühr des ausgewählten Restaurants
            deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
            total += deliveryCost;
            document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;
        } else {
            // Falls kein Restaurant ausgewählt ist, setzen Sie die Lieferkosten auf 0
            document.getElementById('delivery-cost').innerText = `0,00 €`;
            orderMessage.innerText = "Bitte wählen Sie ein Restaurant aus.";
            orderMessage.style.display = 'block'; // Zeigt die Nachricht an
            orderBtn.disabled = true;
            orderBtn.classList.remove('active');
            return; // Beenden Sie die Funktion, da kein gültiges Restaurant ausgewählt ist
        }
    } else {
        document.getElementById('delivery-cost').innerText = `0,00 €`;
    }

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    // Überprüfen Sie, ob der Mindestbestellwert erreicht ist
    if (total < minOrderValue) {
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
        orderMessage.innerText = `Der Mindestbestellwert beträgt ${minOrderValue.toFixed(2)} €.`;
        orderMessage.style.display = 'block';
    } else {
        orderBtn.disabled = false;
        orderBtn.classList.add('active');
        orderMessage.innerText = "";
        orderMessage.style.display = 'none';
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
            content = `
                <h2>Ein Geschäft empfehlen</h2>
                <p>Empfehlen Sie uns ein Geschäft, das wir in unser Angebot aufnehmen sollen:</p>
                <form id="recommend-form">
                    <label for="store-name">Name des Geschäfts:</label>
                    <input type="text" id="store-name" name="store-name" required>
                    <label for="store-address">Adresse:</label>
                    <input type="text" id="store-address" name="store-address" required>
                    <label for="store-contact">Kontaktinformationen:</label>
                    <input type="text" id="store-contact" name="store-contact" required>
                    <button type="submit">Absenden</button>
                </form>
                <div id="recommend-message"></div>
            `;
            break;
        case 'geschaeftAnmelden':
            content = `
                <h2>Ein Geschäft anmelden</h2>
                <p>Melden Sie Ihr Geschäft an, um Teil unserer Plattform zu werden:</p>
                <form id="register-form">
                    <label for="business-name">Geschäftsname:</label>
                    <input type="text" id="business-name" name="business-name" required>
                    <label for="owner-name">Inhaber*in:</label>
                    <input type="text" id="owner-name" name="owner-name" required>
                    <label for="business-address">Adresse:</label>
                    <input type="text" id="business-address" name="business-address" required>
                    <label for="business-email">E-Mail:</label>
                    <input type="email" id="business-email" name="business-email" required>
                    <label for="business-phone">Telefonnummer:</label>
                    <input type="tel" id="business-phone" name="business-phone" required>
                    <button type="submit">Anmelden</button>
                </form>
                <div id="register-message"></div>
            `;
            break;
        case 'fahrerWerden':
            content = `
                <h2>Fahrer*in werden</h2>
                <p>Werden Sie Teil unseres Teams und liefern Sie Freude direkt an die Tür unserer Kunden!</p>
                <form id="driver-form">
                    <label for="applicant-name">Ihr Name:</label>
                    <input type="text" id="applicant-name" name="applicant-name" required>
                    <label for="applicant-email">E-Mail:</label>
                    <input type="email" id="applicant-email" name="applicant-email" required>
                    <label for="applicant-phone">Telefonnummer:</label>
                    <input type="tel" id="applicant-phone" name="applicant-phone" required>
                    <label for="availability">Verfügbarkeit:</label>
                    <textarea id="availability" name="availability" required></textarea>
                    <button type="submit">Bewerben</button>
                </form>
                <div id="driver-message"></div>
            `;
            break;
        case 'jobs':
            content = `
                <div class="jobs-section">
                    <h2>Jobs</h2>
                    <p>Entdecken Sie spannende Karrieremöglichkeiten bei uns:</p>
                    <ul>
                        <li><strong>Kundenservice-Mitarbeiter*in</strong> - <a href="#" onclick="applyJob(event,'Kundenservice')">Jetzt bewerben</a></li>
                        <li><strong>Marketing-Spezialist*in</strong> - <a href="#" onclick="applyJob(event,'Marketing')">Jetzt bewerben</a></li>
                        <li><strong>Software-Entwickler*in</strong> - <a href="#" onclick="applyJob(event,'Entwicklung')">Jetzt bewerben</a></li>
                    </ul>
                    <div id="job-message"></div>
                </div>
            `;
            break;
        case 'stempelkarten':
            content = `
                <h2>Stempelkarten</h2>
                <p>Sammeln Sie Stempel bei jeder Bestellung und erhalten Sie exklusive Rabatte!</p>
                <p>Aktueller Stempelstand: <span id="stamp-count">0</span> von 10</p>
                <progress id="stamp-progress" value="0" max="10"></progress>
            `;
            break;
        case 'agb':
            content = `
                <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
                <p>Hier finden Sie unsere Allgemeinen Geschäftsbedingungen:</p>
                <div class="legal-text">
                    <!-- AGB-Inhalt -->
                    <!-- Datenschutz -->
                </div>
            `;
            break;
        case 'datenschutz':
            content = `
                <h2>Datenschutzerklärung</h2>
                <p>Erfahren Sie, wie wir mit Ihren Daten umgehen:</p>
                <div class="legal-text">
                    <!-- Datenschutzerklärung-Inhalt -->
                </div>
            `;
            break;
        case 'impressum':
            content = `
                <h2>Impressum</h2>
                <div class="legal-text">
                    <!-- Impressum-Inhalt -->
                    <p><strong> BestellApp GmbH - Developer Akademie </strong><br>
                    Tassilopl. 25<br> 
                    81541 München<br>
                    Deutschland</p>

                    <p><strong>Vertreten durch:</strong> Kay Weska</p>
                    <p><strong>Registereintrag:</strong><br>
                        Eintragung im Handelsregister.<br>
                        Registergericht: Amtsgericht Musterstadt<br>
                        Registernummer: HRB 12345
                    </p>

                    <p><strong>Umsatzsteuer-ID:</strong><br>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
                    </p>


                    <p><strong>Kontakt:</strong><br>
                        Telefon: 0815/08150815<br>
                        E-Mail: <a href='mailto:weskakay@gmail.com'>info@bestellapp.com</a>
                    </p>
                    <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
                        Kay Weska<br>
                        Anschrift wie oben</p>

                    <p><strong>Streitschlichtung</strong><br>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.<br>
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                    <p>Stand: Oktober 2024</p>
                </div>
            `;
            break;
        case 'cookies':
            content = `
                <h2>Verwendung von Cookies</h2>
                <p>Informationen über unsere Verwendung von Cookies:</p>
                <div class="legal-text">
                    <!-- Cookies-Informationen -->
                </div>
            `;
            break;
    }

    pageContent.innerHTML = content;
    pageContent.style.display = 'block';

    // Initialisieren des Chatbots nur für die Kundenservice-Seite
    if (pageId === 'kundenservice') {
        initializeChatbot();
    } else if (pageId === 'geschaeftEmpfehlen') {
        initializeRecommendForm();
    } else if (pageId === 'geschaeftAnmelden') {
        initializeRegisterForm();
    } else if (pageId === 'fahrerWerden') {
        initializeDriverForm();
    } else if (pageId === 'jobs') {
        initializeJobApplications();
    }
    // Sicherstellen, dass die Seite unten bleibt
    pageContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
// Chatbot
function initializeChatbot() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const responses = {
        "bestellung": "Um Ihre Bestellung einzusehen, klicken Sie bitte auf 'Warenkorb'.",
        "bestellungen": "Sie können Ihre aktuellen und vergangenen Bestellungen im 'Warenkorb' einsehen.",
        "hilfe": "Wie kann ich Ihnen helfen?",
        "lieferzeit": "⏰ Die aktuelle Lieferzeit beträgt ca. 30 Minuten.",
        "verspätung": "Wir entschuldigen uns für die Verzögerung. Ihre Bestellung wird so schnell wie möglich geliefert.",
        "restaurant": "Um welches Restaurant handelt es sich?",
        "italienisch": "Welche Informationen benötigen Sie zum italienischen Restaurant?",
        "asiatisch": "Welche Informationen benötigen Sie zum asiatischen Restaurant?",
        "fusion": "Welche Informationen benötigen Sie zum Fusion Restaurant?",
        "öffnungszeiten": "Unsere Restaurants sind täglich von 11:00 bis 22:00 Uhr geöffnet.",
        "adresse": "Unsere Adresse lautet: Musterstraße 123, 12345 Musterstadt.",
        "kontakt": "Sie können uns unter der Telefonnummer 01234/567890 erreichen.",
        "menü": "Unser Menü finden Sie oben auf der Seite oder direkt im jeweiligen Restaurantbereich.",
        "allergien": "Bitte informieren Sie uns über Allergien oder Unverträglichkeiten, wir beraten Sie gerne.",
        "vegetarisch": "🥗 Wir bieten eine Auswahl an vegetarischen Gerichten. Schauen Sie in unserem Menü nach der entsprechenden Kennzeichnung.",
        "vegan": "🌱 Wir haben auch vegane Optionen. Im Menü sind diese entsprechend gekennzeichnet.",
        "glutenfrei": "Glutenfreie Gerichte sind bei uns verfügbar. Bitte achten Sie auf die Kennzeichnung im Menü.",
        "stornieren": "Möchten Sie Ihre Bestellung stornieren? Bitte geben Sie Ihre Bestellnummer an.",
        "bezahlen": "💳 Wir akzeptieren Kreditkarte, PayPal und Barzahlung bei Lieferung.",
        "danke": "Gern geschehen! Wenn Sie weitere Fragen haben, bin ich für Sie da.",
        "hallo": "Hallo! Ich bin BestellBob, wie kann ich Ihnen heute helfen?",
        "name": "Mein Name ist BestellBob, schön dich kennenzulernen!",
        "speisekarte": "Unsere Speisekarte finden Sie oben unter 'Menü'.",
        "zahlung": "Wir akzeptieren verschiedene Zahlungsmethoden, einschließlich Kreditkarte und PayPal.",
        "feedback": "Wir freuen uns über Ihr Feedback! Bitte teilen Sie uns mit, wie wir uns verbessern können.",
        "beschwerde": "Es tut uns leid, dass Sie unzufrieden sind. Bitte teilen Sie uns Ihr Anliegen mit, damit wir Ihnen helfen können.",
        "filialen": "Wir haben mehrere Standorte. Finden Sie eine Filiale in Ihrer Nähe auf unserer Webseite.",
        "liefergebiet": "Wir liefern in ganz Musterstadt und Umgebung. Geben Sie Ihre Postleitzahl ein, um die Verfügbarkeit zu prüfen.",
        "rabatt": "🎉 Aktuell bieten wir einen 10% Rabatt auf alle Online-Bestellungen!",
        "gutschein": "Sie können Gutscheine beim Bezahlvorgang einlösen.",
        "später": "Sie können Ihre Bestellung auch für eine spätere Lieferung planen.",
        "bestellstatus": "Um den Status Ihrer Bestellung zu prüfen, klicken Sie auf 'Meine Bestellungen' oder geben Sie Ihre Bestellnummer ein.",
        "wie geht es dir": "Mir geht es gut, danke der Nachfrage! Wie kann ich Ihnen helfen?",
        "wer bist du": "Ich bin BestellBob, Ihr virtueller Assistent für alle Fragen rund um Ihre Bestellung.",
        "angebote": "Aktuelle Angebote finden Sie auf unserer Startseite oder unter 'Angebote'.",
        "jobs": "Informationen zu offenen Stellen finden Sie im Bereich 'Jobs' unten auf der Seite.",
        "fahrer": "Wenn Sie Interesse haben, als Fahrer*in zu arbeiten, besuchen Sie bitte den Bereich 'Fahrer*in werden'.",
        "email": "Sie können uns auch per E-Mail unter service@bestellapp.de kontaktieren.",
        // Weitere Schlüsselwörter und Antworten können hinzugefügt werden
    };
    responses["hi"] = responses["hallo"];
    responses["bestellungen"] = responses["bestellung"];
    responses["order"] = responses["bestellung"];
    responses["support"] = responses["hilfe"];
    responses["kontakt"] = responses["hilfe"];
    responses["speisen"] = responses["speisekarte"];
    responses["menü"] = responses["speisekarte"];
    // Weitere Synonyme
    

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

        // Einfache Schlüsselwort-basierte Antwort
        let botResponse = "Es tut mir leid, ich verstehe Ihre Anfrage nicht. Bitte versuchen Sie es anders zu formulieren.";

        const userMessageWords = userMessage.toLowerCase().split(/\s+/);

        for (let word of userMessageWords) {
            if (responses.hasOwnProperty(word)) {
                botResponse = responses[word];
                break;
            }
        }

        // Anzeige der Bot-Antwort
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot');
        botMessageElement.innerText = botResponse;
        chatMessages.appendChild(botMessageElement);

        // Scrollen zum Ende
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}
// Geschäft empfehlen
function initializeRecommendForm() {
    const recommendForm = document.getElementById('recommend-form');
    const recommendMessage = document.getElementById('recommend-message');

    recommendForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Hier können Sie die Formulardaten verarbeiten und senden
        recommendMessage.innerText = "Vielen Dank für Ihre Empfehlung! Wir werden das Geschäft prüfen.";
        recommendForm.reset();
    });
}
// Geschäft anmelden
function initializeRegisterForm() {
    const registerForm = document.getElementById('register-form');
    const registerMessage = document.getElementById('register-message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Hier können Sie die Formulardaten verarbeiten und senden
        registerMessage.innerText = "Vielen Dank für Ihre Anmeldung! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.";
        registerForm.reset();
    });
}
// Fahrer*in werden
function initializeDriverForm() {
    const driverForm = document.getElementById('driver-form');
    const driverMessage = document.getElementById('driver-message');

    driverForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Hier können Sie die Formulardaten verarbeiten und senden
        driverMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
        driverForm.reset();
    });
}
// Jobs
function initializeJobApplications() {
    const jobMessage = document.getElementById('job-message');

    window.applyJob = function(position) {
        const jobForm = `
            <h3>Bewerbung für ${position}</h3>
            <form id="job-application-form">
                <label for="applicant-name">Ihr Name:</label>
                <input type="text" id="applicant-name" name="applicant-name" required>
                <label for="applicant-email">E-Mail:</label>
                <input type="email" id="applicant-email" name="applicant-email" required>
                <label for="applicant-phone">Telefonnummer:</label>
                <input type="tel" id="applicant-phone" name="applicant-phone" required>
                <label for="motivation">Warum möchten Sie bei uns arbeiten?</label>
                <textarea id="motivation" name="motivation" required></textarea>
                <button type="submit">Bewerbung absenden</button>
            </form>
            <div id="application-message"></div>
        `;
        jobMessage.innerHTML = jobForm;

        const jobApplicationForm = document.getElementById('job-application-form');
        const applicationMessage = document.getElementById('application-message');

        jobApplicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Hier können Sie die Formulardaten verarbeiten und senden
            applicationMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
            jobApplicationForm.reset();
        });
        // Sanftes Scrollen zum Formular
        jobMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// Entfernen oder auskommentieren Sie diesen Code
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     document.getElementById('form-message').innerText = "Ein Ticket wurde eröffnet. Wir bearbeiten Ihr Anliegen.";
// });




