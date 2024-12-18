export function geschaeftAnmelden() {
  return `
      <h2>Ein Geschäft anmelden</h2>
            <p>Melden Sie Ihr Geschäft an, um Teil unserer Plattform zu werden:</p>
            <form id="register-form">
                <label for="business-name">Geschäftsname:</label>
                <input type="text" id="business-name" name="business-name" required>
                <label for="owner-name">Inhaber*in:</label>
                <input type="text" id="owner-name" name="owner-name" required>
                <label for="business-address">Adresse:</label>
                <input type="text" id="business-address" name="business-address" required>
                <label for="business-email">E-Mail:</label>
                <input type="email" id="business-email" name="business-email" required>
                <label for="business-phone">Telefonnummer:</label>
                <input type="tel" id="business-phone" name="business-phone" required>
                <button type="submit">Anmelden</button>
            </form>
            <div id="register-message"></div>
  `;
}
