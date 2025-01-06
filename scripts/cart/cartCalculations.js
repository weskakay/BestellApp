function calculateTotal() {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;
    let deliveryCost = 0;

    const orderBtn = document.getElementById('order-btn');
    const orderMessage = document.getElementById('order-message');

    if (!selectedRestaurant) {
        document.getElementById('delivery-cost').innerText = `0.00 €`;
        orderMessage.innerText = "Bitte wählen Sie ein Restaurant aus";
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
        return;
    }

    if (deliverySelected && restaurants[selectedRestaurant]) {
        deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
        total += deliveryCost;
        document.getElementById('delivery-cost').innerText = `${deliveryCost.toFixed(2)} €`;
    } else {
        document.getElementById('delivery-cost').innerText = `0.00 €`;
    }

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)} €`;
    document.getElementById('total-cost').innerText = `${total.toFixed(2)} €`;

    if (!orderPlaced && subtotal < minOrderValue) {
        const amountMissing = minOrderValue - subtotal;
        orderMessage.innerText = `Der Mindestbestellwert beträgt ${minOrderValue.toFixed(2)} €. Sie benötigen noch ${amountMissing.toFixed(2)} € für eine Bestellung.`;
        orderMessage.style.display = 'block';
        orderBtn.disabled = true;
        orderBtn.classList.remove('active');
    } else if (!orderPlaced) {
        orderBtn.disabled = false;
        orderBtn.classList.add('active');
        orderMessage.innerText = "";
        orderMessage.style.display = 'none';
    }
}