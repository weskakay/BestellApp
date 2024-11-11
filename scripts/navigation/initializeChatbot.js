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
    };
    responses["hi"] = responses["hallo"];
    responses["bestellungen"] = responses["bestellung"];
    responses["order"] = responses["bestellung"];
    responses["support"] = responses["hilfe"];
    responses["kontakt"] = responses["hilfe"];
    responses["speisen"] = responses["speisekarte"];
    responses["menü"] = responses["speisekarte"];
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user');
        userMessageElement.innerText = userMessage;
        chatMessages.appendChild(userMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInput.value = '';
        let botResponse = "Es tut mir leid, ich verstehe Ihre Anfrage nicht. Bitte versuchen Sie es anders zu formulieren.";
        const userMessageWords = userMessage.toLowerCase().split(/\s+/);
        for (let word of userMessageWords) {
            if (responses.hasOwnProperty(word)) {
                botResponse = responses[word];
                break;
            }
        }
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot');
        botMessageElement.innerText = botResponse;
        chatMessages.appendChild(botMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}