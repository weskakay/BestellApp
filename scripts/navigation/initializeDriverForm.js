function initializeDriverForm() {
  const driverForm = document.getElementById('driver-form');
  const driverMessage = document.getElementById('driver-message');
  driverForm.addEventListener('submit', function(event) {
    event.preventDefault();
    driverMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
    driverMessage.scrollIntoView({ behavior: 'smooth' });
    driverForm.reset();
  });
}