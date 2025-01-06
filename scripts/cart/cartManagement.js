let cart = [];

function addToCart(restaurantKey, category, dishName, price) {
    const existingItem = cart.find(item => item.name === dishName && item.restaurant === restaurantKey);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ restaurant: restaurantKey, category, name: dishName, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    renderCart();
    calculateTotal();
}

function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        updateCart();
    }
}