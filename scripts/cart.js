// cart.js

// Cart array
let cart = [];

// Function to add dishes to the cart
function addToCart(restaurantKey, category, dishName, price) {
    console.log(`Dish ${dishName} is being added to the cart.`);
    const existingItemIndex = cart.findIndex(item => item.name === dishName && item.restaurant === restaurantKey);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ restaurant: restaurantKey, category, name: dishName, price, quantity: 1 });
    }
    renderCart();
    calculateTotal();
}

// Function to render the cart
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

    // Update the number of items in the mobile cart (if available)
    const mobileCartCount = document.getElementById('mobile-cart-count');
    if (mobileCartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        mobileCartCount.innerText = totalItems;
    }
}

// Function to change the quantity of an item
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

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
    calculateTotal();
}

// Function to calculate the total sum
function calculateTotal() {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;
    let deliveryCost = 0;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    // If no restaurant is selected
    if (!selectedRestaurant) {
        document.getElementById('delivery-cost').innerText = `0.00 €`;
        orderMessage.innerText = "Please select a restaurant.";
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
        return; // Exit the function if no restaurant is selected
    }

    // If delivery is selected
    if (deliverySelected) {
        if (restaurants[selectedRestaurant]) {
            // Get delivery cost from the selected restaurant
            deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
            total += deliveryCost; // Add delivery cost to the total
            document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;
        } else {
            document.getElementById('delivery-cost').innerText = `0.00 €`;
        }
    } else {
        // If pickup is selected
        deliveryCost = 0; // No delivery cost for pickup
        document.getElementById('delivery-cost').innerText = `0.00 €`;
    }

    // Update display for subtotal and total
    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    // Check if the minimum order value is met, only if no order has been placed yet
    if (!orderPlaced && subtotal < minOrderValue) {
        const amountMissing = minOrderValue - subtotal;
        orderMessage.innerText = `The minimum order value is ${minOrderValue.toFixed(2)} €. You still need ${amountMissing.toFixed(2)} € to complete the order.`;
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
    } else if (!orderPlaced) {
        // All conditions met, order can be placed
        orderBtn.disabled = false;
        orderBtn.classList.add('active');
        orderMessage.innerText = "";
        orderMessage.style.display = 'none';
    }
}
