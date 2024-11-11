function initializeRegisterForm() {
  const registerForm = document.getElementById('register-form');
  const registerMessage = document.getElementById('register-message');
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    registerMessage.innerText = "Vielen Dank für Ihre Anmeldung! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.";
    registerMessage.scrollIntoView({ behavior: 'smooth' });
    registerForm.reset();
  });
}