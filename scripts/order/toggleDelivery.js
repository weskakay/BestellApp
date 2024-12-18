const minOrderValue = 10;
let deliverySelected = true;

function toggleDelivery(isDelivery) {
    deliverySelected = isDelivery;

    const deliveryBtn = document.getElementById('delivery-btn');
    const pickupBtn = document.getElementById('pickup-btn');

    if (isDelivery) {
        deliveryBtn.classList.add('active');
        pickupBtn.classList.remove('active'); 
    } else {
        deliveryBtn.classList.remove('active'); 
        pickupBtn.classList.add('active'); 
    }
    calculateTotal();
}