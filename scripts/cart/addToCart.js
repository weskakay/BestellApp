export function addToCart(cart, restaurantKey, category, dishName, price, updateCart) {
    const existingItem = cart.find(item => item.name === dishName && item.restaurant === restaurantKey);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ restaurant: restaurantKey, category, name: dishName, price, quantity: 1 });
    }
    updateCart();
}
