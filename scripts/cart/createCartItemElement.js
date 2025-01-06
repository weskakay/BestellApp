function createCartItemElement(item, index) {
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
    return cartItem;
}