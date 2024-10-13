// order.js

// Mindestbestellwert und Lieferoption
const minOrderValue = 10;
let deliverySelected = true; // Standardmäßig auf Lieferung gesetzt
let orderPlaced = false; // Neues Flag, um den Status der Bestellung zu verfolgen

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
    if (cart.length === 0 || document.getElementById('order-btn').disabled) {
        return; // Verhindert das Platzieren der Bestellung, wenn der Warenkorb leer oder der Button deaktiviert ist
    }

    orderPlaced = true; // Setzt das Flag nach der Bestellung auf true
    cart = []; // Leeren des Warenkorbs
    renderCart();
    calculateTotal(); // Berechne die Gesamtsumme neu

    // Zeigt die Bestellbestätigung an
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

    orderConfirmation.innerHTML = "Danke für Ihre Bestellung! Ihre Bestellung wird bearbeitet.<br>Sie können in wenigen Momenten eine neue Bestellung aufgeben.";
    const header = document.querySelector('header');
    header.after(orderConfirmation);
    orderConfirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optional: Ausblenden der Nachricht nach einigen Sekunden
    setTimeout(() => {
        orderConfirmation.remove();
        orderPlaced = false; // Setze das Flag wieder zurück, um zukünftige Bestellungen zu ermöglichen
        // Seite neu laden, um alles zurückzusetzen
        location.reload(); // Lädt die Seite neu
    }, 4000);// Warte 4 Sekunden, bevor die Seite neu geladen wird
}


