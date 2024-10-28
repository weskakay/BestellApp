let cart = [];

function addToCart(restaurantKey, category, dishName, price) {
    const existingItem = cart.find(item => item.name === dishName && item.restaurant === restaurantKey);
    existingItem ? existingItem.quantity++ : cart.push({ restaurant: restaurantKey, category, name: dishName, price, quantity: 1 });
    updateCart();
}

function updateCart() {
    renderCart();
    calculateTotal();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-overlay">Ihr Warenkorb ist leer.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const quantity = document.createElement('span');
        quantity.className = 'cart-item-quantity';
        quantity.textContent = `${item.quantity}x`;

        const name = document.createElement('span');
        name.className = 'cart-item-name';
        name.textContent = item.name;

        const price = document.createElement('span');
        price.className = 'cart-item-price';
        price.textContent = `${(item.price * item.quantity).toFixed(2)} €`;

        const controls = document.createElement('div');
        controls.className = 'cart-item-controls';
        controls.innerHTML = `
            <button onclick="changeQuantity(${index}, 'increase')">+</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 'decrease')">-</button>
            <button onclick="removeItem(${index})">🗑️</button>
        `;

        cartItem.append(quantity, name, price, controls);
        cartItemsContainer.appendChild(cartItem);
    });

    updateMobileCartCount();
}

function updateMobileCartCount() {
    const mobileCartCount = document.getElementById('mobile-cart-count');
    if (mobileCartCount) {
        mobileCartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function changeQuantity(index, action) {
    const item = cart[index];
    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    } else {
        removeItem(index);
    }
    updateCart();
}

function removeItem(index) {
    if (index > -1 && index < cart.length) {
        cart.splice(index, 1);
        updateCart();
    }
}

function calculateTotal() {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;
    let deliveryCost = 0;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    if (!selectedRestaurant) {
        document.getElementById('delivery-cost').innerText = `0.00 €`;
        orderMessage.innerText = "Bitte wählen Sie ein Restaurant aus";
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
        return; 
    }

    if (deliverySelected) {
        if (restaurants[selectedRestaurant]) {
            deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
            total += deliveryCost;
            document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;
        } else {
            document.getElementById('delivery-cost').innerText = `0.00 €`;
        }
    } else {
        deliveryCost = 0;
        document.getElementById('delivery-cost').innerText = `0.00 €`;
    }

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    if (!orderPlaced && subtotal < minOrderValue) {
        const amountMissing = minOrderValue - subtotal;
        orderMessage.innerText = `Der Mindestbestellwert beträgt ${minOrderValue.toFixed(2)} €. Sie benötigen noch ${amountMissing.toFixed(2)} € für eine Bestellung.`;
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
    } else if (!orderPlaced) {
        orderBtn.disabled = false;
        orderBtn.classList.add('active');
        orderMessage.innerText = "";
        orderMessage.style.display = 'none';
    }
}
