export function calculateTotal(cart, restaurants, selectedRestaurant, deliverySelected, minOrderValue, orderPlaced) {
    let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let total = subtotal;
    let deliveryCost = 0;

    if (!selectedRestaurant) {
        return { subtotal, total, deliveryCost, message: "Bitte wählen Sie ein Restaurant aus", valid: false };
    }

    if (deliverySelected && restaurants[selectedRestaurant]) {
        deliveryCost = restaurants[selectedRestaurant].deliveryPrice;
        total += deliveryCost;
    }

    if (!orderPlaced && subtotal < minOrderValue) {
        const amountMissing = minOrderValue - subtotal;
        return {
            subtotal,
            total,
            deliveryCost,
            message: `Der Mindestbestellwert beträgt ${minOrderValue.toFixed(2)} €. Sie benötigen noch ${amountMissing.toFixed(2)} € für eine Bestellung.`,
            valid: false
        };
    }

    return { subtotal, total, deliveryCost, message: "", valid: true };
}
