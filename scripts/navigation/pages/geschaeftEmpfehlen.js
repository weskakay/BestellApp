export function geschaeftEmpfehlen() {
  return `
      <h2>Ein Geschäft empfehlen</h2>
            <p>Empfehlen Sie uns ein Geschäft, das wir in unser Angebot aufnehmen sollen:</p>
            <form id="recommend-form">
                <label for="store-name">Name des Geschäfts:</label>
                <input type="text" id="store-name" name="store-name" required>
                <label for="store-address">Adresse:</label>
                <input type="text" id="store-address" name="store-address" required>
                <label for="store-contact">Kontaktinformationen:</label>
                <input type="text" id="store-contact" name="store-contact" required>
                <button type="submit">Absenden</button>
            </form>
            <div id="recommend-message"></div>
  `;
}
