function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
    });
}

function toggleFooterLinks() {
  const footerLinksContent = document.getElementById('footer-links-content');
  const pageContent = document.getElementById('page-content');
  
  if (footerLinksContent.style.display === 'none' || footerLinksContent.style.display === '') {
      footerLinksContent.style.display = 'flex';
      footerLinksContent.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to footer
  } else {
      footerLinksContent.style.display = 'none';
      pageContent.style.display = 'none'; // Hide the page when the list is collapsed
  }
}

function showPage(event, pageId) {
  event.preventDefault();  // Prevents the default behavior that causes the page to scroll up
  const pageContent = document.getElementById('page-content');
  let content = '';

  switch (pageId) {
    case 'kundenservice':
        content = `
            <h2>Kundenservice</h2>
            <div id="chat-container">
                <div id="chat-window">
                    <div id="chat-messages"></div>
                </div>
                <form id="chat-form">
                    <input type="text" id="chat-input" placeholder="Ihre Nachricht..." autocomplete="off" required>
                    <button type="submit">Senden</button>
                </form>
            </div>
        `;
        break;
    case 'geschaeftEmpfehlen':
        content = `
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
        break;
    case 'geschaeftAnmelden':
        content = `
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
        break;
    case 'fahrerWerden':
        content = `
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
        break;
    case 'jobs':
        content = `
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
        break;
    case 'stempelkarten':
        content = `
            <h2>Stempelkarten</h2>
            <p>Sammeln Sie Stempel bei jeder Bestellung und erhalten Sie exklusive Rabatte!</p>
            <p>Aktueller Stempelstand: <span id="stamp-count">0</span> von 10</p>
            <progress id="stamp-progress" value="0" max="10"></progress>
        `;
        break;
    case 'agb':
          content = `
              <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
              <div class="legal-text">
                  <h3>1. Geltungsbereich</h3>
                  <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen über unsere Bestell-App ("BestellApp").</p>
      
                  <h3>2. Vertragspartner</h3>
                  <p>Der Kaufvertrag kommt zustande mit:</p>
                  <p><strong>BestellApp GmbH - Developer Akademie</strong><br>
                  Tassiloplatz 25<br>
                  81541 München<br>
                  Deutschland</p>
      
                  <h3>3. Vertragsschluss</h3>
                  <p>Die Darstellung der Produkte in der App stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Bestellbuttons geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
      
                  <h3>4. Widerrufsrecht</h3>
                  <p>Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können.</p>
                  <p><strong>Ausschluss des Widerrufsrechts:</strong> Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde.</p>
      
                  <h3>5. Preise und Zahlungsbedingungen</h3>
                  <p>Alle Preise verstehen sich einschließlich der gesetzlichen Mehrwertsteuer. Die Bezahlung erfolgt wahlweise per Kreditkarte, PayPal oder Sofortüberweisung.</p>
      
                  <h3>6. Lieferung</h3>
                  <p>Die Lieferung erfolgt an die von Ihnen angegebene Adresse. Liefergebiete und -zeiten können variieren. Eine Abholung ist nach Absprache möglich.</p>
      
                  <h3>7. Eigentumsvorbehalt</h3>
                  <p>Bis zur vollständigen Zahlung bleibt die Ware unser Eigentum.</p>
      
                  <h3>8. Gewährleistung</h3>
                  <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>
      
                  <h3>9. Haftung</h3>
                  <p>Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haften wir nur für die Verletzung wesentlicher Vertragspflichten.</p>
      
                  <h3>10. Datenschutz</h3>
                  <p>Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer <a href="#" onclick="showPage(event, 'datenschutz')">Datenschutzerklärung</a>.</p>
      
                  <h3>11. Schlussbestimmungen</h3>
                  <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sollten einzelne Bestimmungen des Vertrags unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
              </div>
          `;
          break;
      
        content = `
            <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
            <p>Hier finden Sie unsere Allgemeinen Geschäftsbedingungen:</p>
            <div class="legal-text">
                <!-- AGB-Inhalt -->
                <!-- Datenschutz -->
            </div>
        `;
        break;
    case 'datenschutz':
          content = `
              <h2>Datenschutzerklärung</h2>
              <div class="legal-text">
                  <h3>1. Einleitung</h3>
                  <p>Wir freuen uns über Ihr Interesse an unserer Bestell-App. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten in unserer App.</p>
      
                  <h3>2. Verantwortlicher</h3>
                  <p>Verantwortlicher für die Datenverarbeitung ist:</p>
                  <p><strong>BestellApp GmbH - Developer Akademie</strong><br>
                  Tassiloplatz 25<br>
                  81541 München<br>
                  Deutschland</p>
                  <p>E-Mail: <a href="mailto:info@bestellapp.de">info@bestellapp.de</a></p>
      
                  <h3>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h3>
      
                  <h4>a) Beim Besuch der App</h4>
                  <p>Beim Aufrufen unserer App werden durch das Endgerät, das Sie verwenden, automatisch Informationen an den Server unserer App gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen können dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert werden:</p>
                  <ul>
                      <li>IP-Adresse des anfragenden Geräts,</li>
                      <li>Datum und Uhrzeit des Zugriffs,</li>
                      <li>Name und URL der abgerufenen Datei,</li>
                      <li>App, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                      <li>verwendeter Browser und ggf. das Betriebssystem Ihres Geräts sowie der Name Ihres Access-Providers.</li>
                  </ul>
                  <p><strong>Zweck der Verarbeitung:</strong> Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
                  <ul>
                      <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der App,</li>
                      <li>Gewährleistung einer komfortablen Nutzung unserer App,</li>
                      <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                      <li>zu weiteren administrativen Zwecken.</li>
                  </ul>
      
                  <h4>b) Bei Nutzung unseres Bestellsystems</h4>
                  <p>Wenn Sie über unsere App Bestellungen tätigen, erheben wir folgende Informationen:</p>
                  <ul>
                      <li>Name, Vorname,</li>
                      <li>gültige E-Mail-Adresse,</li>
                      <li>Anschrift,</li>
                      <li>Telefonnummer (bei Lieferungen erforderlich),</li>
                      <li>Zahlungsdaten je nach gewählter Zahlungsmethode.</li>
                  </ul>
                  <p><strong>Zweck der Verarbeitung:</strong> Die Datenverarbeitung erfolgt auf Ihre Bestellung hin und ist nach Art. 6 Abs. 1 S. 1 lit. b DSGVO zu den genannten Zwecken für die angemessene Bearbeitung Ihrer Bestellung und für die beidseitige Erfüllung von Verpflichtungen aus dem Kaufvertrag erforderlich.</p>
      
                  <h3>4. Weitergabe von Daten an Dritte</h3>
                  <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte findet ausschließlich zu folgenden Zwecken statt:</p>
                  <ul>
                      <li>Weitergabe an das mit der Lieferung beauftragte Transportunternehmen, soweit dies zur Lieferung bestellter Waren erforderlich ist,</li>
                      <li>Weitergabe von Zahlungsdaten an den mit der Zahlung beauftragten Dienstleister,</li>
                      <li>Weitergabe an Dienstleister für die Abwicklung von Bestellungen und Zahlungen,</li>
                      <li>Wenn Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
                      <li>Wenn die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
                  </ul>
      
                  <h3>5. Verwendung von Cookies</h3>
                  <p>Unsere App verwendet Cookies. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere App nutzen. In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben.</p>
                  <p><strong>Zweck der Verarbeitung:</strong> Der Einsatz von Cookies dient dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten.</p>
                  <p><strong>Arten von Cookies:</strong></p>
                  <ul>
                      <li><strong>Session-Cookies:</strong> Sie werden nach Ende Ihres Besuchs automatisch gelöscht.</li>
                      <li><strong>Permanente Cookies:</strong> Diese Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.</li>
                  </ul>
                  <p><strong>Widerspruchsrecht:</strong> Sie können Ihre Browser-Einstellungen entsprechend Ihren Wünschen konfigurieren und die Annahme von Cookies ablehnen.</p>
      
                  <h3>6. Analyse-Tools</h3>
                  <p>Wir verwenden keine Analyse-Tools von Drittanbietern. [Falls Sie welche verwenden, fügen Sie hier Informationen über diese Tools ein und wie Benutzer der Datenverarbeitung widersprechen können.]</p>
      
                  <h3>7. Betroffenenrechte</h3>
                  <p>Sie haben das Recht:</p>
                  <ul>
                      <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                      <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                      <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                      <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
                      <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                      <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
                      <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                  </ul>
      
                  <h3>8. Widerspruchsrecht</h3>
                  <p>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.</p>
      
                  <h3>9. Datensicherheit</h3>
                  <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe.</p>
                  <p>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>
      
                  <h3>10. Aktualität und Änderung dieser Datenschutzerklärung</h3>
                  <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Oktober 2023.</p>
                  <p>Durch die Weiterentwicklung unserer App oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
              </div>
          `;
          break;      
    case 'impressum':
        content = `
            <h2>Impressum</h2>
            <div class="legal-text">
                <!-- Impressum-Inhalt -->
                <p><strong> BestellApp GmbH - Developer Akademie </strong><br>
                Tassilopl. 25<br> 
                81541 München<br>
                Deutschland</p>

                <p><strong>Vertreten durch:</strong> Kay Weska</p>
                <p><strong>Registereintrag:</strong><br>
                    Eintragung im Handelsregister.<br>
                    Registergericht: Amtsgericht Musterstadt<br>
                    Registernummer: HRB 12345
                </p>

                <p><strong>Umsatzsteuer-ID:</strong><br>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
                </p>


                <p><strong>Kontakt:</strong><br>
                    Telefon: 0815/08150815<br>
                    E-Mail: <a href='mailto:weskakay@gmail.com'>info@bestellapp.com</a>
                </p>
                <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
                    Kay Weska<br>
                    Anschrift wie oben</p>

                <p><strong>Streitschlichtung</strong><br>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.<br>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>Stand: Oktober 2024</p>
            </div>
        `;
        break;
    case 'cookies':
          content = `
              <h2>Verwendung von Cookies</h2>
              <div class="legal-text">
                  <h3>1. Was sind Cookies?</h3>
                  <p>Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere App oder Webseite besuchen. Sie ermöglichen es uns, Ihr Gerät bei Ihrem nächsten Besuch wiederzuerkennen.</p>
      
                  <h3>2. Welche Arten von Cookies verwenden wir?</h3>
                  <p>Wir verwenden verschiedene Arten von Cookies:</p>
                  <ul>
                      <li><strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb unserer App erforderlich und ermöglichen grundlegende Funktionen wie die Navigation und den Zugriff auf sichere Bereiche.</li>
                      <li><strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es uns, die von Ihnen getroffenen Auswahlen (z.B. Benutzername, Sprache) zu speichern und erweiterte, personalisierte Funktionen bereitzustellen.</li>
                      <li><strong>Performance-Cookies:</strong> Diese Cookies sammeln Informationen darüber, wie Besucher unsere App nutzen, z.B. welche Seiten am häufigsten besucht werden, und helfen uns, die App zu verbessern.</li>
                      <li><strong>Marketing-/Tracking-Cookies:</strong> Diese Cookies werden verwendet, um Ihnen Werbung anzuzeigen, die für Sie relevant ist, und um die Effektivität unserer Werbekampagnen zu messen.</li>
                  </ul>
      
                  <h3>3. Zweck der Verwendung von Cookies</h3>
                  <p>Wir verwenden Cookies, um:</p>
                  <ul>
                      <li>die Funktionalität und Leistung unserer App zu verbessern,</li>
                      <li>Ihre Präferenzen zu speichern und Ihre Nutzererfahrung zu personalisieren,</li>
                      <li>anonyme statistische Daten zu sammeln und zu analysieren,</li>
                      <li>Werbeinhalte auf Ihre Interessen zuzuschneiden.</li>
                  </ul>
      
                  <h3>4. Einwilligung zur Verwendung von Cookies</h3>
                  <p>Beim ersten Besuch unserer App werden Sie aufgefordert, der Verwendung von Cookies zuzustimmen. Sie können Ihre Einwilligung jederzeit widerrufen oder ändern.</p>
      
                  <h3>5. Verwaltung und Löschung von Cookies</h3>
                  <p>Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können die Einstellungen Ihres Browsers jedoch ändern, um Cookies zu blockieren oder Sie zu benachrichtigen, wenn Cookies gesendet werden. Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer App beeinträchtigen kann.</p>
                  <p>Anleitungen zur Verwaltung von Cookies in gängigen Browsern:</p>
                  <ul>
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                      <li><a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                      <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  </ul>
      
                  <h3>6. Drittanbieter-Cookies</h3>
                  <p>Wir arbeiten mit Drittanbietern zusammen, die ebenfalls Cookies auf Ihrem Endgerät platzieren können, wenn Sie unsere App nutzen. Diese Cookies werden von den jeweiligen Drittanbietern kontrolliert und unterliegen deren eigenen Datenschutzrichtlinien.</p>
      
                  <h3>7. Änderungen dieser Cookie-Richtlinie</h3>
                  <p>Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Alle Änderungen werden auf dieser Seite veröffentlicht.</p>
      
                  <p>Letzte Aktualisierung: Oktober 2024</p>
              </div>
          `;
          break;
      
        content = `
            <h2>Verwendung von Cookies</h2>
            <p>Informationen über unsere Verwendung von Cookies:</p>
            <div class="legal-text">
                <!-- Cookies-Informationen -->
            </div>
        `;
        break;
}

  pageContent.innerHTML = content;
  pageContent.style.display = 'block';

  // Initialize the chatbot only for the customer service page
  if (pageId === 'kundenservice') {
      initializeChatbot();
  } else if (pageId === 'geschaeftEmpfehlen') {
      initializeRecommendForm();
  } else if (pageId === 'geschaeftAnmelden') {
      initializeRegisterForm();
  } else if (pageId === 'fahrerWerden') {
      initializeDriverForm();
  } else if (pageId === 'jobs') {
      initializeJobApplications();
  }
  // Ensure that the page remains at the bottom
  pageContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function initializeChatbot() {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  const responses = {
      "bestellung": "Um Ihre Bestellung einzusehen, klicken Sie bitte auf 'Warenkorb'.",
      "bestellungen": "Sie können Ihre aktuellen und vergangenen Bestellungen im 'Warenkorb' einsehen.",
      "hilfe": "Wie kann ich Ihnen helfen?",
      "lieferung": "Beachten Sie bitte den Mindestbestellwert bei einer Lieferung!",
      "lieferzeit": "⏰ Die aktuelle Lieferzeit beträgt ca. 30 Minuten.",
      "verspätung": "Wir entschuldigen uns für die Verzögerung. Ihre Bestellung wird so schnell wie möglich geliefert.",
      "restaurant": "Um welches Restaurant handelt es sich?",
      "italienisch": "Welche Informationen benötigen Sie zum italienischen Restaurant?",
      "asiatisch": "Welche Informationen benötigen Sie zum asiatischen Restaurant?",
      "fusion": "Welche Informationen benötigen Sie zum Fusion Restaurant?",
      "öffnungszeiten": "Unsere Restaurants sind täglich von 11:00 bis 22:00 Uhr geöffnet.",
      "adresse": "Unsere Adresse lautet: Musterstraße 123, 12345 Musterstadt.",
      "kontakt": "Sie können uns unter der Telefonnummer 01234/567890 erreichen.",
      "menü": "Unser Menü finden Sie oben auf der Seite oder direkt im jeweiligen Restaurantbereich.",
      "allergien": "Bitte informieren Sie uns über Allergien oder Unverträglichkeiten, wir beraten Sie gerne.",
      "vegetarisch": "🥗 Wir bieten eine Auswahl an vegetarischen Gerichten. Schauen Sie in unserem Menü nach der entsprechenden Kennzeichnung.",
      "vegan": "🌱 Wir haben auch vegane Optionen. Im Menü sind diese entsprechend gekennzeichnet.",
      "glutenfrei": "Glutenfreie Gerichte sind bei uns verfügbar. Bitte achten Sie auf die Kennzeichnung im Menü.",
      "stornieren": "Möchten Sie Ihre Bestellung stornieren? Bitte geben Sie Ihre Bestellnummer an.",
      "bezahlen": "💳 Wir akzeptieren Kreditkarte, PayPal und Barzahlung bei Lieferung.",
      "danke": "Gern geschehen! Wenn Sie weitere Fragen haben, bin ich für Sie da.",
      "hallo": "Hallo! Ich bin BestellBob, wie kann ich Ihnen heute helfen?",
      "name": "Mein Name ist BestellBob, schön dich kennenzulernen!",
      "speisekarte": "Unsere Speisekarte finden Sie oben unter 'Menü'.",
      "zahlung": "Wir akzeptieren verschiedene Zahlungsmethoden, einschließlich Kreditkarte und PayPal.",
      "feedback": "Wir freuen uns über Ihr Feedback! Bitte teilen Sie uns mit, wie wir uns verbessern können.",
      "beschwerde": "Es tut uns leid, dass Sie unzufrieden sind. Bitte teilen Sie uns Ihr Anliegen mit, damit wir Ihnen helfen können.",
      "filialen": "Wir haben mehrere Standorte. Finden Sie eine Filiale in Ihrer Nähe auf unserer Webseite.",
      "liefergebiet": "Wir liefern in ganz Musterstadt und Umgebung. Geben Sie Ihre Postleitzahl ein, um die Verfügbarkeit zu prüfen.",
      "rabatt": "🎉 Aktuell bieten wir einen 10% Rabatt auf alle Online-Bestellungen!",
      "gutschein": "Sie können Gutscheine beim Bezahlvorgang einlösen.",
      "später": "Sie können Ihre Bestellung auch für eine spätere Lieferung planen.",
      "bestellstatus": "Um den Status Ihrer Bestellung zu prüfen, klicken Sie auf 'Meine Bestellungen' oder geben Sie Ihre Bestellnummer ein.",
      "wie geht es dir": "Mir geht es gut, danke der Nachfrage! Wie kann ich Ihnen helfen?",
      "wer bist du": "Ich bin BestellBob, Ihr virtueller Assistent für alle Fragen rund um Ihre Bestellung.",
      "angebote": "Aktuelle Angebote finden Sie auf unserer Startseite oder unter 'Angebote'.",
      "jobs": "Informationen zu offenen Stellen finden Sie im Bereich 'Jobs' unten auf der Seite.",
      "fahrer": "Wenn Sie Interesse haben, als Fahrer*in zu arbeiten, besuchen Sie bitte den Bereich 'Fahrer*in werden'.",
      "email": "Sie können uns auch per E-Mail unter service@bestellapp.de kontaktieren.",
      // More keywords and responses can be added
  };
  responses["hi"] = responses["hallo"];
  responses["bestellungen"] = responses["bestellung"];
  responses["order"] = responses["bestellung"];
  responses["support"] = responses["hilfe"];
  responses["kontakt"] = responses["hilfe"];
  responses["speisen"] = responses["speisekarte"];
  responses["menü"] = responses["speisekarte"];
  // More synonyms
  

  chatForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userMessage = chatInput.value.trim();
      if (userMessage === '') return;

      // Display the user's message
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'user');
      userMessageElement.innerText = userMessage;
      chatMessages.appendChild(userMessageElement);

      // Scroll to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Clear input
      chatInput.value = '';

      // Simple keyword-based response
      let botResponse = "Es tut mir leid, ich verstehe Ihre Anfrage nicht. Bitte versuchen Sie es anders zu formulieren.";

      const userMessageWords = userMessage.toLowerCase().split(/\s+/);

      for (let word of userMessageWords) {
          if (responses.hasOwnProperty(word)) {
              botResponse = responses[word];
              break;
          }
      }

      // Display the bot's response
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('message', 'bot');
      botMessageElement.innerText = botResponse;
      chatMessages.appendChild(botMessageElement);

      // Scroll to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

function initializeRecommendForm() {
  const recommendForm = document.getElementById('recommend-form');
  const recommendMessage = document.getElementById('recommend-message');

  recommendForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Process and send the form data here
      recommendMessage.innerText = "Vielen Dank für Ihre Empfehlung! Wir werden das Geschäft prüfen.";
      recommendForm.reset();
  });
}

function initializeRegisterForm() {
  const registerForm = document.getElementById('register-form');
  const registerMessage = document.getElementById('register-message');

  registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Process and send the form data here
      registerMessage.innerText = "Vielen Dank für Ihre Anmeldung! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.";
      registerForm.reset();
  });
}

function initializeDriverForm() {
  const driverForm = document.getElementById('driver-form');
  const driverMessage = document.getElementById('driver-message');

  driverForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Hier können Sie die Formulardaten verarbeiten und senden
      driverMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
      driverForm.reset();
  });
}

function initializeJobApplications() {
  const jobMessage = document.getElementById('job-message');

  window.applyJob = function(event, position) {
    event.preventDefault(); // Prevent the default behavior of the link

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
      // Insert the form into the DOM
      jobMessage.innerHTML = jobForm;
      // Access the newly added form
      const jobApplicationForm = document.getElementById('job-application-form');
      const applicationMessage = document.getElementById('application-message');
      // Event listener for form submission
      jobApplicationForm.addEventListener('submit', function(event) {
          event.preventDefault();
          // Process and send the form data here
          applicationMessage.innerText = "Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.";
          jobApplicationForm.reset();
      });
      // Smooth scroll to the form
      jobMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
