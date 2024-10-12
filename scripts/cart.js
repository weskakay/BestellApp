// cart.js

// Warenkorb-Array
let cart = [];

// Funktion zum Hinzufügen von Gerichten zum Warenkorb
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

// Funktion zum Rendern des Warenkorbs
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

    // Aktualisieren der Anzahl im mobilen Warenkorb (falls vorhanden)
    const mobileCartCount = document.getElementById('mobile-cart-count');
    if (mobileCartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        mobileCartCount.innerText = totalItems;
    }
}

// Funktion zum Ändern der Menge eines Artikels
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

// Funktion zum Entfernen eines Artikels aus dem Warenkorb
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
    calculateTotal();
}

// Funktion zur Berechnung der Gesamtsumme
function calculateTotal() {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;
    let deliveryCost = 0;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    if (deliverySelected) {
        // Wenn Lieferung ausgewählt ist
        if (selectedRestaurant && restaurants[selectedRestaurant]) {
            // Lieferkosten vom ausgewählten Restaurant holen
            deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
            total += deliveryCost; // Lieferkosten zur Gesamtsumme hinzufügen
            document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;
        } else {
            // Kein Restaurant ausgewählt
            document.getElementById('delivery-cost').innerText = `0,00 €`;
            orderMessage.innerText = "Bitte wählen Sie ein Restaurant aus.";
            orderMessage.style.display = 'block';
            orderBtn.disabled = true;
            orderBtn.classList.remove('active');
            return; // Beenden der Funktion
        }
    } else {
        // Wenn Abholung ausgewählt ist
        deliveryCost = 0; // Keine Lieferkosten
        document.getElementById('delivery-cost').innerText = `0,00 €`;
    }

    // Aktualisieren der Anzeige für Zwischensumme und Gesamtsumme
    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    // Überprüfen des Mindestbestellwerts basierend auf der Zwischensumme
    if (subtotal < minOrderValue) {
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
        const amountMissing = minOrderValue - subtotal;
        orderMessage.innerText = `Der Mindestbestellwert beträgt ${minOrderValue.toFixed(2)} €. Ihnen fehlen noch ${amountMissing.toFixed(2)} €.`;
        orderMessage.style.display = 'block';
    } else {
        orderBtn.disabled = false;
        orderBtn.classList.add('active');
        orderMessage.innerText = "";
        orderMessage.style.display = 'none';
    }
}
