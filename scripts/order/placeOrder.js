let orderPlaced = false;

function placeOrder() {
    if (cart.length === 0 || document.getElementById('order-btn').disabled) {
        return; 
    }

    orderPlaced = true; 
    cart = []; 
    renderCart();
    calculateTotal(); 

    let orderConfirmation = document.getElementById('order-confirmation');
    if (!orderConfirmation) {
        orderConfirmation = document.createElement('div');
        orderConfirmation.id = 'order-confirmation';
        orderConfirmation.style.color = '#155724';
        orderConfirmation.style.backgroundColor = '#d4edda';
        orderConfirmation.style.border = '1px solid #c3e6cb';
        orderConfirmation.style.padding = '15px';
        orderConfirmation.style.margin = '20px auto';
        orderConfirmation.style.borderRadius = '5px';
        orderConfirmation.style.maxWidth = '600px';
        orderConfirmation.style.textAlign = 'center';
    }

    orderConfirmation.innerHTML = "Danke für Ihre Bestellung! Ihre Bestellung wird bearbeitet.<br>In wenigen Momenten können Sie eine neue Bestellung aufgeben.";
    const header = document.querySelector('header');
    header.after(orderConfirmation);
    orderConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
        orderConfirmation.remove();
        orderPlaced = false;
        location.reload();
    }, 4000);
}
