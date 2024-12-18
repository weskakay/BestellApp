export function jobs() {
  return `
      <div class="jobs-section">
          <h2>Jobs</h2>
          <p>Entdecken Sie spannende Karrieremöglichkeiten bei uns:</p>
          <ul>
              <li><strong>Kundenservice-Mitarbeiter*in</strong> - <a href="#" onclick="applyJob(event,'Kundenservice')">Jetzt bewerben</a></li>
              <li><strong>Marketing-Spezialist*in</strong> - <a href="#" onclick="applyJob(event,'Marketing')">Jetzt bewerben</a></li>
              <li><strong>Software-Entwickler*in</strong> - <a href="#" onclick="applyJob(event,'Entwicklung')">Jetzt bewerben</a></li>
          </ul>
          <div id="job-message"></div>
      </div>
  `;
}
