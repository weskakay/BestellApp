function initializeJobApplications() {
  const jobMessage = document.getElementById('job-message');
  window.applyJob = function(event, position) {
    event.preventDefault();
    const jobMessage = document.getElementById('job-message');
    const jobForm = `
          <h3>Bewerbung für ${position}</h3>
          <form id="job-application-form">
              <label for="applicant-name">Ihr Name:</label>
              <input type="text" id="applicant-name" name="applicant-name" required>
              <label for="applicant-email">E-Mail:</label>
              <input type="email" id="applicant-email" name="applicant-email" required>
              <label for="applicant-phone">Telefonnummer:</label>
              <input type="tel" id="applicant-phone" name="applicant-phone" required>
              <label for="motivation">Warum möchten Sie bei uns arbeiten?</label>
              <textarea id="motivation" name="motivation" required></textarea>
              <button type="submit">Bewerbung absenden</button>
          </form>
          <div id="application-message"></div>
    `;
    jobMessage.innerHTML = jobForm;
    const jobApplicationForm = document.getElementById('job-application-form');
    const applicationMessage = document.getElementById('application-message');
    jobApplicationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      applicationMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
      applicationMessage.scrollIntoView({ behavior: 'smooth' });
      jobApplicationForm.reset();
    });
    jobMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}