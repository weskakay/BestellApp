function changeQuantity(index, action) {
    if (action === 'increase') {
        increaseQuantity(index);
    } else if (action === 'decrease') {
        decreaseQuantity(index);
    }
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeItem(index);
    }
    updateCart();
}