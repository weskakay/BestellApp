function scrollToCart() {
    const cartSection = document.getElementById('cart-items');
    if (cartSection) {
        cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const mobileCartButton = document.createElement('button');
mobileCartButton.id = 'mobile-cart-btn';
mobileCartButton.textContent = 'Warenkorb';
mobileCartButton.onclick = scrollToCart;
document.body.appendChild(mobileCartButton);
