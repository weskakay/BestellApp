import { createCartItemElement } from './createCartItemElement.js';

export function renderCart(cart, cartItemsContainer, updateMobileCartCount) {
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
