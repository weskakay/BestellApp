// order.js

// Minimum order value and delivery option
const minOrderValue = 10;
let deliverySelected = true; // Default set to delivery
let orderPlaced = false; // New flag to track the status of the order

// Function to toggle between delivery and pickup
function toggleDelivery(isDelivery) {
    deliverySelected = isDelivery;

    const deliveryBtn = document.getElementById('delivery-btn');
    const pickupBtn = document.getElementById('pickup-btn');

    if (isDelivery) {
        // Delivery was selected
        deliveryBtn.classList.add('active'); // Add 'active' class
        pickupBtn.classList.remove('active'); // Remove 'active' class from pickup button
    } else {
        // Pickup was selected
        deliveryBtn.classList.remove('active'); // Remove 'active' class from delivery button
        pickupBtn.classList.add('active'); // Add 'active' class to pickup button
    }

    // Update the total to reflect the change in delivery costs
    calculateTotal();
}

// Function to place an order
function placeOrder() {
    if (cart.length === 0 || document.getElementById('order-btn').disabled) {
        return; // Prevent placing the order if the cart is empty or the button is disabled
    }

    orderPlaced = true; // Set the flag to true after placing the order
    cart = []; // Empty the cart
    renderCart();
    calculateTotal(); // Recalculate the total

    // Show the order confirmation
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

    orderConfirmation.innerHTML = "Thank you for your order! Your order is being processed.<br>You can place a new order in a few moments.";
    const header = document.querySelector('header');
    header.after(orderConfirmation);
    orderConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optionally hide the message after a few seconds
    setTimeout(() => {
        orderConfirmation.remove();
        orderPlaced = false; // Reset the flag to allow future orders
        // Reload the page to reset everything
        location.reload(); // Reloads the page
    }, 4000); // Wait 4 seconds before reloading the page
}
