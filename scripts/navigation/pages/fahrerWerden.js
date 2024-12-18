export function fahrerWerden() {
  return `
      <h2>Fahrer*in werden</h2>
            <p>Werden Sie Teil unseres Teams und liefern Sie Freude direkt an die Tür unserer Kunden!</p>
            <form id="driver-form">
                <label for="applicant-name">Ihr Name:</label>
                <input type="text" id="applicant-name" name="applicant-name" required>
                <label for="applicant-email">E-Mail:</label>
                <input type="email" id="applicant-email" name="applicant-email" required>
                <label for="applicant-phone">Telefonnummer:</label>
                <input type="tel" id="applicant-phone" name="applicant-phone" required>
                <label for="availability">Verfügbarkeit:</label>
                <textarea id="availability" name="availability" required></textarea>
                <button type="submit">Bewerben</button>
            </form>
            <div id="driver-message"></div>
  `;
}
