import { renderCart } from './renderCart.js';
import { calculateTotal } from './calculateTotal.js';

export function updateCart(cart, restaurants, selectedRestaurant, deliverySelected, minOrderValue, orderPlaced) {
    const cartItemsContainer = document.getElementById('cart-items');
    renderCart(cart, cartItemsContainer, updateMobileCartCount);

    const { subtotal, total, deliveryCost, message, valid } = calculateTotal(cart, restaurants, selectedRestaurant, deliverySelected, minOrderValue, orderPlaced);

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;
    document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;

    const orderMessage = document.getElementById('order-message');
    const orderBtn = document.getElementById('order-btn');
    orderMessage.innerText = message;
    orderMessage.style.display = message ? 'block' : 'none';
    orderBtn.disabled = !valid;
}
