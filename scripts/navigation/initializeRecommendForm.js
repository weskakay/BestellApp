function initializeRecommendForm() {
  const recommendForm = document.getElementById('recommend-form');
  const recommendMessage = document.getElementById('recommend-message');
  recommendForm.addEventListener('submit', function(event) {
    event.preventDefault();
    recommendMessage.innerText = "Vielen Dank für Ihre Empfehlung! Wir werden das Geschäft prüfen.";
    recommendMessage.scrollIntoView({ behavior: 'smooth' });
    recommendForm.reset();
  });
}