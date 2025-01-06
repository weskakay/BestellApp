function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-overlay">Ihr Warenkorb ist leer.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItemElement = createCartItemElement(item, index);
        cartItemsContainer.appendChild(cartItemElement);
    });

    updateMobileCartCount();
}

function updateMobileCartCount() {
    const mobileCartCount = document.getElementById('mobile-cart-count');
    if (mobileCartCount) {
        mobileCartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}