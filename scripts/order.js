// order.js

// Mindestbestellwert und Lieferoption
const minOrderValue = 10;
let deliverySelected = true; // Standardmäßig auf Lieferung gesetzt

// Funktion zum Umschalten zwischen Lieferung und Abholung
function toggleDelivery(isDelivery) {
    deliverySelected = isDelivery;

    const deliveryBtn = document.getElementById('delivery-btn');
    const pickupBtn = document.getElementById('pickup-btn');

    if (isDelivery) {
        // Lieferung wurde ausgewählt
        deliveryBtn.classList.add('active'); // Füge die Klasse 'active' hinzu
        pickupBtn.classList.remove('active'); // Entferne die Klasse 'active' vom Abholungsbutton
    } else {
        // Abholung wurde ausgewählt
        deliveryBtn.classList.remove('active'); // Entferne die Klasse 'active' vom Lieferbutton
        pickupBtn.classList.add('active'); // Füge die Klasse 'active' hinzu
    }

    // Aktualisieren Sie die Gesamtsumme, um die Änderung der Lieferkosten zu berücksichtigen
    calculateTotal();
}

// Funktion zum Platzieren einer Bestellung
function placeOrder() {
    // Leeren des Warenkorbs
    cart = [];
    renderCart();
    calculateTotal();

    // Prüfen, ob die Bestätigungsmeldung bereits existiert
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

    orderConfirmation.innerText = "Danke für Ihre Bestellung! Ihre Bestellung wird bearbeitet.";

    // Fügen Sie die Bestätigungsmeldung direkt unterhalb des Headers ein
    const header = document.querySelector('header');
    header.after(orderConfirmation);

    // Scrollen Sie zur Bestätigungsmeldung
    orderConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optional: Ausblenden der Nachricht nach einigen Sekunden
    setTimeout(() => {
        orderConfirmation.remove();
    }, 5000);
}
