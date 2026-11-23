export const RESTAURANT_INFO = {
  name: "AURELIA",
  tagline: "Haute Cuisine & Grand Cru",
  established: "2018",
  phone: "+1 (212) 555-0198",
  reservationsPhone: "+1 (212) 555-0199",
  email: "concierge@aurelia-dining.com",
  address: {
    street: "482 Park Avenue, Suite 100",
    city: "New York",
    state: "NY",
    zip: "10022",
    country: "United States"
  },
  hours: [
    { days: "Tuesday – Thursday", dinner: "5:30 PM – 10:30 PM" },
    { days: "Friday – Saturday", dinner: "5:00 PM – 11:30 PM" },
    { days: "Sunday", brunch: "11:30 AM – 3:00 PM", dinner: "5:00 PM – 10:00 PM" },
    { days: "Monday", status: "Closed for Private Receptions" }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@aurelia.nyc" },
    { name: "Facebook", url: "https://facebook.com", handle: "AureliaFineDining" },
    { name: "Twitter", url: "https://twitter.com", handle: "@AureliaDining" }
  ]
};

export const HERO_VIDEOS = [
  {
    id: 1,
    title: "The Architectural Sanctuary",
    subtitle: "Modern Elegance & Ambient Warmth",
    src: "/videos/hero-1.mp4",
    fallback: "/images/about-interior.jpg"
  },
  {
    id: 2,
    title: "Mastery in Motion",
    subtitle: "Precision Culinary Artistry",
    src: "/videos/hero-2.mp4",
    fallback: "/images/gallery-plating.jpg"
  },
  {
    id: 3,
    title: "Sensory Splendor",
    subtitle: "Harmonious Flavors & Sublime Pairings",
    src: "/videos/hero-3.mp4",
    fallback: "/images/offer-tasting.jpg"
  },
  {
    id: 4,
    title: "Impeccable Graciousness",
    subtitle: "Intuitive & Discreet White-Glove Service",
    src: "/videos/hero-4.mp4",
    fallback: "/images/gallery-salon.jpg"
  }
];

export const SIGNATURE_DISHES = [
  {
    id: "sig-1",
    name: "Premium Beef Steak",
    category: "Main Course",
    price: 118,
    image: "/images/wagyu-steak.jpg",
    description: "Juicy pan-seared beef steak with rich mushroom sauce and glazed baby carrots.",
    pairing: "2015 Château Margaux Grand Cru",
    dietary: ["Gluten-Free Available"],
    isPopular: true
  },
  {
    id: "sig-2",
    name: "Buttery Lobster",
    category: "Main Course",
    price: 96,
    image: "/images/lobster-tail.jpg",
    description: "Soft lobster tail cooked in butter, served on saffron rice",
    pairing: "2018 Meursault Premier Cru",
    dietary: ["Shellfish", "Gluten-Free"],
    isPopular: true
  },

  {
    id: "sig-4",
    name: "Grilled Sea Bass Fish",
    category: "Main Course",
    price: 74,
    image: "/images/chilean-seabass.jpg",
    description: "Crispy sea bass fillet with soft leeks, lemon-herb sauce and fresh dill",
    dietary: ["Gluten-Free", "Pescatarian"],
    isPopular: false
  },
  {
    id: "sig-5",
    name: "Tartufo & Burrata Artigiana",
    category: "Pizza",
    price: 44,
    image: "/images/burrata-pizza.jpg",
    description: "Crispy pizza with tomato sauce, fresh creamy cheese, mushrooms and basil.",
    pairing: "2019 Brunello di Montalcino",
    dietary: ["Contains Dairy"],
    isPopular: false
  },
  {
    id: "sig-6",
    name: "Chocolate Dome Dessert",
    category: "Desserts",
    price: 28,
    image: "/images/chocolate-sphere.jpg",
    description: "Dark chocolate dome filled with vanilla cream and warm caramel, with a touch of gold.",
    pairing: "Château d'Yquem Sauternes 2011",
    dietary: ["Vegetarian"],
    isPopular: true
  }
];

export const MENU_CATEGORIES = [
  "All",
  "Starters",
  "Main Course",
  "Pasta",
  "Pizza",
  "Desserts",
  "Beverages"
];

export const FULL_MENU_ITEMS = [
  // Starters
  {
    id: "m-1",
    name: "Thin Sliced Beef Salad",
    category: "Starters",
    price: 36,
    description: " Thin slices of fresh beef with mushrooms, capers and a sweet vinegar drizzle..",
    image: "/images/carpaccio.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "380 kcal"
  },
  {
    id: "m-2",
    name: "Fresh Cheese & Peach Salad",
    category: "Starters",
    price: 30,
    description: " Soft creamy cheese with grilled peaches, pistachios, green leaves and honey.",
    image: "/images/burrata-salad.jpg",
    isVegetarian: true,
    isPopular: false,
    calories: "420 kcal"
  },
  {
    id: "m-3",
    name: "Fresh Scallops",
    category: "Starters",
    price: 38,
    description: "Fresh sliced scallops with orange, a light citrus dressing and sea salt",
    image: "/images/scallop-crudo.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "260 kcal"
  },

  // Main Course
  {
    id: "m-4",
    name: "Premium Beef Steak",
    category: "Main Course",
    price: 118,
    description: "Juicy pan-seared beef steak with rich mushroom sauce and glazed baby carrots.",
    image: "/images/wagyu-steak.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "680 kcal"
  },
  {
    id: "m-5",
    name: "Buttery Lobster",
    category: "Main Course",
    price: 96,
    description: "Maine lobster tail in cultured Normandy butter, saffron risotto, Royal Oscietra caviar, and delicate chive blossoms.",
    image: "/images/lobster-tail.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "540 kcal"
  },
  {
    id: "m-6",
    name: "Grilled Sea Bass Fish",
    category: "Main Course",
    price: 74,
    description: "Crispy sea bass fillet with soft leeks, lemon-herb sauce and fresh dill.",
    image: "/images/chilean-seabass.jpg",
    isVegetarian: false,
    isPopular: false,
    calories: "490 kcal"
  },
  {
    id: "m-7",
    name: "Roasted Duck",
    category: "Main Course",
    price: 68,
    description: "Tender roasted duck breast with honey glaze, mashed parsnip and sweet cherries.",
    image: "/images/roasted-duck.jpg",
    isVegetarian: false,
    isPopular: false,
    calories: "620 kcal"
  },

  // Pasta

  {
    id: "m-9",
    name: "Lobster & Crab Tortelloni",
    category: "Pasta",
    price: 62,
    description: "Handmade pasta filled with blue crab and sweet corn, butter-glazed lobster knuckles, bisque emulsion, and tarragon oil.",
    image: "/images/lobster-tortelloni.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "510 kcal"
  },
  {
    id: "m-10",
    name: "Mushroom Stuffed Pasta",
    category: "Pasta",
    price: 48,
    description: " Pasta filled with soft cheese, topped with roasted mushrooms and crunchy hazelnuts.",
    image: "/images/morel-agnolotti.jpg",
    isVegetarian: true,
    isPopular: false,
    calories: "460 kcal"
  },

  // Pizza
  {
    id: "m-11",
    name: "Mushroom & Cheese Pizza",
    category: "Pizza",
    price: 44,
    description: "Crispy pizza with tomato sauce, fresh creamy cheese, mushrooms and basil",
    image: "/images/burrata-pizza.jpg",
    isVegetarian: false,
    isPopular: true,
    calories: "720 kcal"
  },
  {
    id: "m-12",
    name: "Classic Cheese Pizza",
    category: "Pizza",
    price: 34,
    description: "Simple pizza with tomato sauce, melted mozzarella, olive oil and fresh basil.",
    image: "/images/margherita-pizza.jpg",
    isVegetarian: true,
    isPopular: false,
    calories: "610 kcal"
  },
  {
    id: "m-13",
    name: "Shrimp Pizza",
    category: "Pizza",
    price: 46,
    description: "Cheesy pizza with juicy shrimp, creamy sauce, zucchini and lemon.",
    image: "/images/seafood-pizza.jpg",
    isVegetarian: false,
    isPopular: false,
    calories: "660 kcal"
  },

  // Desserts
  {
    id: "m-14",
    name: "Chocolate Dome Dessert",
    category: "Desserts",
    price: 28,
    description: "Dark chocolate dome filled with vanilla cream and warm caramel, with a touch of gold.",
    image: "/images/chocolate-sphere.jpg",
    isVegetarian: true,
    isPopular: true,
    calories: "450 kcal"
  },
  {
    id: "m-15",
    name: "Pistachio Cream Pastry",
    category: "Desserts",
    price: 24,
    description: "Crispy pastry layers with pistachio cream and a sweet-sour raspberry sauce.",
    image: "/images/millefeuille.jpg",
    isVegetarian: true,
    isPopular: false,
    calories: "390 kcal"
  },
  {
    id: "m-16",
    name: "Soft Lemon Cake",
    category: "Desserts",
    price: 26,
    description: "Warm, fluffy lemon cake served with cool basil ice cream.",
    image: "/images/lemon-souffle.jpg",
    isVegetarian: true,
    isPopular: true,
    calories: "320 kcal"
  },

  // Beverages
  {
    id: "m-17",
    name: "The Golden Aurelia Cocktail",
    category: "Beverages",
    price: 32,
    description: "Sparkling golden drink with citrus and a touch of edible gold.",
    image: "/images/golden-cocktail.jpg",
    isVegetarian: true,
    isPopular: true,
    calories: "180 kcal"
  },
  {
    id: "m-18",
    name: "Smoked Rosemary Negroni",
    category: "Beverages",
    price: 26,
    description: "Orange and herb drink with a smoky rosemary aroma.",
    image: "/images/rosemary-negroni.jpg",
    isVegetarian: true,
    isPopular: false,
    calories: "195 kcal"
  },
  {
    id: "m-19",
    name: "Sparkling Grape Drink (Glass)",
    category: "Beverages",
    price: 75,
    description: "Cool, fizzy grape drink with a crisp citrus taste, served in a glass",
    image: "/images/champagne-flute.jpg",
    isVegetarian: true,
    isPopular: true,
    calories: "120 kcal"
  }
];

export const SPECIAL_OFFERS = [
  {
    id: "offer-1",
    tag: "Exclusive Experience",
    title: "Chef's 7-Course Degustation",
    subtitle: "A Masterpiece of Sensory Exploration",
    description: "Indulge in our flagship 7-course seasonal tasting voyage curated by Executive Chef Julian Moreau, featuring rare seasonal delicacies and optional Grand Cru pairings.",
    pricing: "$225 per guest / $365 with Sommelier wine pairing",
    validity: "Available Tuesday through Sunday | Reservations required 48h in advance",
    image: "/images/offer-tasting.jpg",
    features: ["7 Curated Courses", "Tableside Chef Plating", "Personalized Keepsake Menu", "Grand Cru Cellar Pairing Option"]
  },
  {
    id: "offer-2",
    tag: "Romantic Soirée",
    title: "Weekend Candlelight & Champagne",
    subtitle: "An Intimate Evening Crafted for Two",
    description: "Reserve a secluded velvet alcove for a 4-course bespoke dinner, accompanied by a bottle of vintage Dom Pérignon Champagne, Petrossian caviar service, and signature golden desserts.",
    pricing: "$450 per couple",
    validity: "Friday & Saturday Evenings | Limited to 8 couples per night",
    image: "/images/offer-romantic.jpg",
    features: ["Secluded Velvet Alcove", "Vintage Champagne Bottle", "Caviar Tasting Service", "Bespoke Dessert Finish"]
  },
  {
    id: "offer-3",
    tag: "Celebration & Sharing",
    title: "Grand Family & Private Banquet",
    subtitle: "Unforgettable Moments in Opulence",
    description: "Host private milestones in our glass-enclosed cellar room. Enjoy shared centerpieces of whole roasted duck, Florentine T-bone, artisanal pastas, and dedicated sommelier guidance.",
    pricing: "Custom tailored from $185 per guest (parties of 6 to 24)",
    validity: "Available Daily upon request | Dedicated Private Butler",
    image: "/images/offer-banquet.jpg",
    features: ["Private Cellar Dining Suite", "Family-Style Grand Cuts", "Dedicated Service Butler", "Custom Floral Arrangements"]
  }
];

export const CHEFS = [
  {
    id: "chef-1",
    name: "Julian Moreau",
    position: "Executive Culinary Director",
    bio: "With over two decades spent in three-star Michelin establishments across Paris, Tokyo, and New York, Chef Julian harmonizes traditional French culinary discipline with avant-garde modern gastronomy.",
    image: "/images/chef-julian.jpg",
    awards: ["Michelin 2-Star Recipient", "James Beard Best Chef Award 2022", "Member of Académie Culinaire de France"]
  },
  {
    id: "chef-2",
    name: "Elena Rostova",
    position: "Master Pastry Artisan",
    bio: "Renowned for turning French pastry into sculpture, Chef Elena infuses botanicals, single-origin cacao, and delicate gold leaf to craft the sweetest climaxes to our tasting journeys.",
    image: "/images/chef-elena.jpg",
    awards: ["World Pastry Cup Silver Medalist", "Pastry Chef of the Year 2023", "Author of 'L'Art Sucré'"]
  },
  {
    id: "chef-3",
    name: "Marco Valenti",
    position: "Chef de Cuisine & Master of Fire",
    bio: "Hailing from Florence, Chef Marco orchestrates our charcoal hearth and wood stone ovens, transforming world-class wagyu, line-caught seafood, and aged cheeses into pure culinary poetry.",
    image: "/images/chef-marco.jpg",
    awards: ["Gambero Rosso 3 Forchette", "Master of Open-Fire Gastronomy", "Top 50 Chefs New York"]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g-1",
    title: "The Grand Chandelier Dining Salon",
    category: "Interior",
    image: "/images/gallery-salon.jpg",
    caption: "Intimate seating beneath hand-blown crystal chandeliers and warm architectural brass accents."
  },
  {
    id: "g-2",
    title: "The Chef's Pass in Motion",
    category: "Artistry",
    image: "/images/gallery-plating.jpg",
    caption: "Meticulous tweezers work and artisanal sauces finishing each plate before service."
  },
  {
    id: "g-3",
    title: "Artisanal Kitchen Fire & Hearth",
    category: "Artistry",
    image: "/images/gallery-kitchen.jpg",
    caption: "Open flame and charcoal embers imparting rustic intensity to our prime cuts."
  },
  {
    id: "g-4",
    title: "The Private Sommelier Vault",
    category: "Interior",
    image: "/images/gallery-wine-cellar.jpg",
    caption: "Housing over 2,400 rare vintages, biodynamic producers, and private collector bottles."
  },
  {
    id: "g-5",
    title: "Evening Terrace Garden Dining",
    category: "Interior",
    image: "/images/gallery-terrace.jpg",
    caption: "Lush outdoor candlelit seating under evening skies and warm ambient lanterns."
  },
  {
    id: "g-6",
    title: "The Master Cocktail Bar",
    category: "Interior",
    image: "/images/gallery-bar.jpg",
    caption: "Backlit translucent onyx and crystal glassware crafted for bespoke mixology."
  },
  {
    id: "g-7",
    title: "Tableside Imperial Caviar Service",
    category: "Cuisine",
    image: "/images/gallery-caviar.jpg",
    caption: "Royal Oscietra caviar served on ice with blinis, crème fraîche, and mother-of-pearl spoons."
  },
  {
    id: "g-8",
    title: "Pastry Studio Artistry",
    category: "Artistry",
    image: "/images/gallery-pastry.jpg",
    caption: "Delicate handcrafted sugar work, tempered chocolate, and gold leaf finishing."
  }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Arthur de Courtenay",
    title: "Gastronomic Critic, Le Guide Étoilé",
    rating: 5,
    avatar: "AD",
    quote: "AURELIA delivers that elusive magic where technical perfection meets genuine human warmth. The Wagyu with black truffle is nothing short of celestial."
  },
  {
    id: "t-2",
    name: "Dr. Vivienne Sterling",
    title: "Private Collector & Patron",
    rating: 5,
    avatar: "VS",
    quote: "We celebrated our 20th anniversary in the private alcove. From the chilled vintage champagne to the personalized dessert notes, the attention to detail was breathtaking."
  },
  {
    id: "t-3",
    name: "Chef Marcus Vance",
    title: "International Culinary Columnist",
    rating: 5,
    avatar: "MV",
    quote: "The interactive tasting journey redefined what modern fine dining can be. The pacing was flawless, the pairings visionary, and the ambiance utterly intoxicating."
  }
];
