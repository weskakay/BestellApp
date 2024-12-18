let selectedRestaurant = null;

const restaurants = {
    italian: {
        name: "Italienisches Restaurant",
        fullName: "La Dolce Vita",
        image: "./assets/img/Restaurants/Italien.jpg",
        description: "Genießen Sie authentische italienische Küche mit frischen Zutaten und traditionellen Rezepten.",
        rating: 4.5,
        deliveryPrice: 2.50,
        dishes: {
            appetizers: [
                { name: "Bruschetta", price: 5.50, image: "./assets/img/Vorspeise/Bruschetta.jpg" },
                { name: "Caprese", price: 6.00, image: "./assets/img/Vorspeise/Caprese.jpg" },
                { name: "Antipasti", price: 8.00, image: "./assets/img/Vorspeise/Antipasti.jpg" }
            ],
            mains: [
                { name: "Margherita Pizza", price: 8.50, image: "./assets/img/Hauptgang/MargheritaPizza.jpeg" },
                { name: "Spaghetti Carbonara", price: 10.00, image: "./assets/img/Hauptgang/SpaghettiCarbonara.jpeg" },
                { name: "Lasagne", price: 11.50, image: "./assets/img/Hauptgang/Lasagne.jpg" }
            ],
            desserts: [
                { name: "Tiramisu", price: 5.00, image: "./assets/img/Desserts/Tiramisu.jpg" },
                { name: "Panna Cotta", price: 4.50, image: "./assets/img/Desserts/PannaCotta.jpg" },
                { name: "Gelato", price: 3.50, image: "./assets/img/Desserts/Gelato.jpg" }
            ]
        }
    },
    asian: {
        name: "Asiatisches Restaurant",
        fullName: "Sakura Garden",
        image: "./assets/img/Restaurants/Asien.jpg",
        description: "Erleben Sie die Vielfalt der asiatischen Küche mit exotischen Aromen und Gewürzen.",
        rating: 4.5,
        deliveryPrice: 3.00,
        dishes: {
            appetizers: [
                { name: "Frühlingsrollen", price: 4.50, image: "./assets/img/Vorspeise/Fruehlingsrollen.jpg" },
                { name: "Gyoza", price: 5.00, image: "./assets/img/Vorspeise/Gyoza.jpeg" },
                { name: "Miso Suppe", price: 3.50, image: "./assets/img/Vorspeise/MisoSuppe.jpeg" }
            ],
            mains: [
                { name: "Sushi Set", price: 12.00, image: "./assets/img/Hauptgang/SushiSet.jpeg" },
                { name: "Pad Thai", price: 9.50, image: "./assets/img/Hauptgang/PadThai.jpeg" },
                { name: "Rindfleisch Teriyaki", price: 11.00, image: "./assets/img/Hauptgang/RindfleischTeriyaki.jpeg" }
            ],
            desserts: [
                { name: "Mochi", price: 4.00, image: "./assets/img/Desserts/Mochi.jpeg" },
                { name: "Klebreis mit Mango", price: 5.50, image: "./assets/img/Desserts/KlebreisMango.jpg" },
                { name: "Sesamkugeln", price: 4.50, image: "./assets/img/Desserts/Sesamkugeln.jpg" }
            ]
        }
    },
    fusion: {
        name: "fusion",
        fullName: "La Fusion Restaurante",
        image: "./assets/img/Restaurants/Fusion.jpg",
        description: "Eine kreative Mischung aus verschiedenen Küchenstilen für ein einzigartiges Geschmackserlebnis.",
        rating: 5.0,
        deliveryPrice: 2.00,
        dishes: {
            appetizers: [
                { name: "Taco Bites", price: 6.00, image: "./assets/img/Vorspeise/TacoBites.jpg" },
                { name: "Süßkartoffel Pommes", price: 5.00, image: "./assets/img/Vorspeise/SüßkartoffelPommes.jpeg" },
                { name: "Tom Kha Gung", price: 7.50, image: "./assets/img/Vorspeise/tom_kha_gung.webp" }
            ],
            mains: [
                { name: "Kichererbsen Curry", price: 10.50, image: "./assets/img/Hauptgang/KichererbsenCurry.jpg" },
                { name: "Reef'n Beef Nudeln", price: 11.00, image: "./assets/img/Hauptgang/ReefnBeefNudeln.jpg" },
                { name: "Gegrilltes Lachsfilet", price: 13.50, image: "./assets/img/Hauptgang/GegrilltesLachsfilet.jpg" }
            ],
            desserts: [
                { name: "Gebackene Banane", price: 4.50, image: "./assets/img/Desserts/GebackeneBanane.jpg" },
                { name: "Affogato", price: 6.00, image: "./assets/img/Desserts/Affogato.webp" },
                { name: "Möhrenkuchen", price: 5.50, image: "./assets/img/Desserts/Möhrenkuchen.jpg" }
            ]
        }
    }
};

function selectDelivery() {
    toggleDelivery(true);
}