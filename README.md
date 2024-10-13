BestellApp
Project Description
BestellApp is a web application that allows users to order food from various restaurants. It operates similarly to Lieferando, offering both delivery and pickup options. Users can browse through restaurants, add dishes to their cart, track the minimum order value, and complete their order seamlessly.

1. Directory Structure
    BestellApp/
    │
    ├── assets/                         # Resources like fonts and images
    │   ├── icons/                      # Contains favicon and logos
    │   └── images/                     # Contains restaurant and dish images
    │
    ├── documents/                      # Documents
    │   └── Bestell App Checkliste.pdf  # General checklist
    │   
    ├── scripts/                        # JavaScript files for functionality
    │   ├── cart.js                     # JavaScript for the cart functionality
    │   ├── chat.js                     # JavaScript for the chatbot feature
    │   ├── form.js                     # JavaScript for form validation and submission
    │   ├── main.js                     # Main JavaScript file for general functions
    │   └── restaurant.js               # JavaScript for restaurant interactions
    │
    ├── styles/                         # CSS files for design
    │   ├── general.css                 # General styles and main color themes
    │   ├── restaurant.css              # CSS for the restaurant section
    │   ├── dishes.css                  # CSS for the dishes section
    │   ├── cart.css                    # CSS for the cart
    │   ├── footer.css                  # CSS for the footer section
    │   ├── chat.css                    # CSS for the chatbot and support
    │   ├── form.css                    # CSS for forms
    │   └── responsive.css              # Media queries for responsive designs
    │
    ├── index.html                      # Main application page
    └── README.md                       # Project description
    
2. Features and Functions
    2.1 Restaurant Selection and Ordering
    Browse Restaurants: Users can scroll through a list of restaurants, select one, and view the available dishes.
    Minimum Order Value: Users must meet the restaurant's minimum order value before they can place an order.
    Placing Orders: Once the user has added items to their cart and meets the minimum order value, they can complete the order. A confirmation message is shown after a successful order.
    2.2 Switching Between Restaurants
    Restaurant Change Warning: If a user starts an order at one restaurant and tries to switch to another, they will be prompted with a warning. Switching restaurants will clear the current cart.
    2.3 Delivery vs Pickup
    Delivery and Pickup Options: Users can choose between delivery or picking up the order from the restaurant. The minimum order value only applies to delivery. Pickup orders are exempt from the minimum order value requirement.
    2.4 Successful Orders and New Orders
    New Orders After Completion: After a successful order, users can easily start a new order without having to reload the page.
    2.5 Footer Navigation
    Informational Navigation Bar: At the bottom of the page, there is a navigation bar with links to important informational pages:
    Job Opportunities: Users can browse available job positions and apply directly.
    Terms and Conditions (T&C): Detailed information about the terms and conditions of using the app.
    Privacy Policy: Information on how personal data is collected, stored, and processed.
    Contact: A contact form for support or other inquiries.
    Customer Support: A dedicated support area with integrated chatbot functionality to assist users with any questions.
    2.6 Customer Support and Chatbot
    Integrated Chatbot: The app includes a chatbot that provides real-time assistance to users. The chatbot can answer frequently asked questions or direct users to further support for more complex issues.




BestellApp
Projektbeschreibung
Die BestellApp ist eine Webanwendung, die Benutzern ermöglicht, Essen bei verschiedenen Restaurants zu bestellen. Sie funktioniert ähnlich wie Lieferando und bietet sowohl Liefer- als auch Abholoptionen. Die App ermöglicht es Benutzern, Restaurants auszuwählen, Speisen in den Warenkorb zu legen, den Mindestbestellwert im Auge zu behalten und die Bestellung einfach abzuschließen.

1. Ordnerstruktur
    BestellApp/
    │
    ├── assets/                         # Ressourcen wie Schriftarten und Bilder
    │   ├── icons/                      # Enthält Favicon und Logos
    │   └── images/                     # Enthält Bilder von Restaurants und Gerichten
    │
    ├── documents/                      # Dokumente
    │   └── Bestell App Checkliste.pdf  # Allgemeine Checkliste
    │   
    │
    ├── scripts/                        # JavaScript-Dateien für die Funktionen
    │   ├── cart.js                     # JavaScript für den Warenkorb
    │   ├── chat.js                     # JavaScript für die Chat-Funktion
    │   ├── form.js                     # JavaScript für Formularvalidierung und -übermittlung
    │   ├── main.js                     # Haupt-JavaScript-Datei für allgemeine Funktionen
    │   └── restaurant.js               # JavaScript für die Restaurant-Interaktionen
    │
    ├── styles/                         # CSS-Dateien für das Design
    │   ├── general.css                 # Allgemeine Stile und Hauptfarben
    │   ├── restaurant.css              # CSS für den Restaurantbereich
    │   ├── dishes.css                  # CSS für den Speisenbereich
    │   ├── cart.css                    # CSS für den Warenkorb
    │   ├── footer.css                  # CSS für den Footer-Bereich
    │   ├── chat.css                    # CSS für den Chatbot und Support
    │   ├── form.css                    # CSS für Formulare
    │   └── responsive.css              # Medienabfragen für responsive Designs
    │
    ├── index.html                      # Hauptseite der Anwendung
    └── README.md                       # Projektbeschreibung


2. Funktionen und Features
    2.1. Restaurant auswählen und Bestellen
    Restaurant-Auswahl: Der Benutzer kann Restaurants aus einer Liste auswählen und die angebotenen Speisen durchstöbern.
    Mindestbestellwert beachten: Für Lieferbestellungen muss der Mindestbestellwert des Restaurants erreicht werden.
    Bestellung abschließen: Der Benutzer kann nach Erreichen des Mindestbestellwertes eine Bestellung aufgeben. Eine Bestätigungsmeldung wird angezeigt.
    2.2. Wechseln zwischen Restaurants
    Wenn eine Bestellung bereits begonnen wurde und der Benutzer versucht, zu einem anderen Restaurant zu wechseln, wird eine Warnung angezeigt. Der Benutzer muss bestätigen, ob er das Restaurant wechseln möchte, da dies die aktuelle Bestellung löschen würde.

    2.3. Lieferung und Abholung
    Benutzer können entscheiden, ob sie ihre Bestellung liefern lassen oder selbst abholen wollen. Der Mindestbestellwert gilt nur für Lieferungen, nicht für Abholungen.

    2.4. Erfolgreiche Bestellung und Neue Bestellungen
    Nach einer erfolgreichen Bestellung können Benutzer eine neue Bestellung aufgeben, ohne die Seite neu laden zu müssen.

    2.5. Navigationsleiste (Footer)
    Am unteren Rand der Seite befindet sich eine Navigationsleiste mit Links zu:

    Jobangebote: Zeigt verfügbare Stellen.
    AGB: Allgemeine Geschäftsbedingungen.
    Datenschutz: Informationen zur Datenspeicherung und -verarbeitung.
    Kontakt: Kontaktformular für Anfragen und Support.
    2.6. Kundensupport und Chatbot
    Ein integrierter Chatbot unterstützt Benutzer bei Fragen und Problemen in Echtzeit.