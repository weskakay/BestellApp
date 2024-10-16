export function getCartItemHTML(item, index) {
    return `
        <span class="cart-item-quantity">${item.quantity}x</span>
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} €</span>
        <div class="cart-item-controls">
            <button onclick="changeQuantity(${index}, 'increase')">+</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 'decrease')">-</button>
            <button onclick="removeItem(${index})">🗑️</button>
        </div>
    `;
}