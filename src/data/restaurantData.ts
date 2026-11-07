export interface MenuItem {
  id: string;
  name: string;
  category: 'Thali' | 'Vegetarian' | 'Non-Vegetarian' | 'Main Course' | 'Rice' | 'Breads' | 'Beverages';
  description: string;
  price: number;
  isVeg: boolean;
  isSignature?: boolean;
  isSamplePlaceholder?: boolean;
  image?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  aspect: 'arch' | 'oval' | 'tall' | 'wide';
}

export const RESTAURANT_INFO = {
  name: "New Highway Chef Dhaba",
  tagline: "Good Food. The Dhaba Way.",
  sublabel: "AUTHENTIC INDIAN FLAVOURS · RANGIA",
  location: "Rangia, Assam – 781354",
  addressNotes: "NH 31 / Highway corridor, Rangia, Kamrup district, Assam",
  phone: "070164 07776",
  phoneRaw: "07016407776",
  whatsappNumber: "917016407776",
  whatsappPrefilledMessage: "Hello New Highway Chef Dhaba, I would like to know about your menu and place an order.",
  priceRange: "₹200–400 per person",
  closingTime: "Closes at 11:30 PM",
  hoursDisclaimer: "Opening hours should be verified with management before final print.",
  rating: "3.8",
  reviewCount: "1,039",
  amenities: [
    { title: "Outdoor Seating", desc: "Enjoy breezy open-air dining along the highway route." },
    { title: "Family Friendly", desc: "Welcoming ambiance with spacious tables and kids' choices." },
    { title: "Cash Only", desc: "Convenient traditional counter checkout." },
    { title: "Fresh Tandoor", desc: "Charcoal-fired rotis, naans, and clay-pot slow cooking." },
  ],
  agencyCredit: "Professional Client Demo by TAREX"
};

export const MENU_CATEGORIES = [
  'All Items',
  'Thali',
  'Vegetarian',
  'Non-Vegetarian',
  'Main Course',
  'Rice',
  'Breads',
  'Beverages'
] as const;

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Thalis
  {
    id: 'm1',
    name: 'Special Dhaba Paneer Thali',
    category: 'Thali',
    description: 'Rich Shahi paneer, dal tadka, jeera rice, 3 butter rotis, salad, raita, and sweet treat.',
    price: 240,
    isVeg: true,
    isSignature: true,
    isSamplePlaceholder: true,
    image: '/src/assets/images/dish_paneer_thali_1794045107967.jpg',
    tag: 'Signature Choice'
  },
  {
    id: 'm2',
    name: 'Highway Special Egg Thali',
    category: 'Thali',
    description: 'Dhaba egg curry (2 eggs) in spiced roasted gravy, aromatic dal, rice, tandoori rotis, salad & papad.',
    price: 210,
    isVeg: false,
    isSignature: true,
    isSamplePlaceholder: true,
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg',
    tag: 'Crowd Favourite'
  },
  {
    id: 'm3',
    name: 'Grand Royal Indian Thali',
    category: 'Thali',
    description: 'A lavish feast with paneer butter masala, dal makhani, seasonal sabzi, saffron basmati rice, garlic naan, pickle, and gulab jamun.',
    price: 320,
    isVeg: true,
    isSignature: true,
    isSamplePlaceholder: true,
    image: '/src/assets/images/hero_indian_thali_1794045107833.jpg',
    tag: 'Chef Special'
  },

  // Vegetarian
  {
    id: 'm4',
    name: 'Kadai Paneer Masala',
    category: 'Vegetarian',
    description: 'Cottage cheese cubes tossed with fresh bell peppers, whole coriander seeds, and crushed kashmiri chillies.',
    price: 220,
    isVeg: true,
    isSamplePlaceholder: true,
    tag: 'Spicy Delight'
  },
  {
    id: 'm5',
    name: 'Dal Makhani Slow-Simmered',
    category: 'Vegetarian',
    description: 'Black lentils slow cooked overnight on charcoal embers with fresh butter and farm cream.',
    price: 180,
    isVeg: true,
    isSamplePlaceholder: true,
    tag: 'Traditional'
  },
  {
    id: 'm6',
    name: 'Assam Style Aloo Gobi Roast',
    category: 'Vegetarian',
    description: 'Crisp potatoes and cauliflower florets roasted with mustard oil, cumin, and fragrant turmeric.',
    price: 150,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm7',
    name: 'Yellow Dal Tadka Double Chaunk',
    category: 'Vegetarian',
    description: 'Pigeon pea lentils tempered with pure desi ghee, burnt garlic, cumin, and dry red chillies.',
    price: 140,
    isVeg: true,
    isSamplePlaceholder: true
  },

  // Non-Vegetarian
  {
    id: 'm8',
    name: 'Rustic Dhaba Egg Curry',
    category: 'Non-Vegetarian',
    description: 'Farm-fresh boiled eggs cooked in caramelized onion, tomato, ginger and whole roasted garam masala.',
    price: 170,
    isVeg: false,
    isSignature: true,
    isSamplePlaceholder: true,
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg'
  },
  {
    id: 'm9',
    name: 'Highway Chicken Curry (Desi Style)',
    category: 'Non-Vegetarian',
    description: 'Tender chicken pieces simmered in robust rustic roadside masala with mustard oil aroma.',
    price: 260,
    isVeg: false,
    isSamplePlaceholder: true,
    tag: 'Best Seller'
  },
  {
    id: 'm10',
    name: 'Butter Chicken Handi',
    category: 'Non-Vegetarian',
    description: 'Clay-oven charred chicken in velvety tomato makhani gravy enriched with kasoori methi and butter.',
    price: 290,
    isVeg: false,
    isSamplePlaceholder: true
  },
  {
    id: 'm11',
    name: 'Egg Bhurji Pav / Roti Plate',
    category: 'Non-Vegetarian',
    description: 'Quick scrambled eggs tossed with green chillies, onions, coriander and highway spices.',
    price: 130,
    isVeg: false,
    isSamplePlaceholder: true
  },

  // Main Course
  {
    id: 'm12',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    description: 'Soft malai paneer bathed in silky, aromatic cashew and vine-ripened tomato gravy.',
    price: 230,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm13',
    name: 'Mixed Seasonal Sabzi',
    category: 'Main Course',
    description: 'Hand-picked local seasonal vegetables cooked with mild whole spices and fresh herbs.',
    price: 160,
    isVeg: true,
    isSamplePlaceholder: true
  },

  // Rice
  {
    id: 'm14',
    name: 'Fragrant Jeera Rice',
    category: 'Rice',
    description: 'Aged long-grain basmati rice tempered with toasted cumin seeds and ghee.',
    price: 120,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm15',
    name: 'Steamed Joha / Basmati Rice',
    category: 'Rice',
    description: 'Fluffy, aromatic steamed local grain rice, perfect companion for curries and dals.',
    price: 90,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm16',
    name: 'Special Dhaba Chicken Biryani',
    category: 'Rice',
    description: 'Layered saffron basmati rice with spiced chicken, fried onions, and whole spices served with raita.',
    price: 260,
    isVeg: false,
    isSamplePlaceholder: true,
    tag: 'Weekend Special'
  },

  // Breads
  {
    id: 'm17',
    name: 'Butter Tandoori Roti (2 pcs)',
    category: 'Breads',
    description: 'Whole wheat flatbread baked crisp in the clay tandoor, brushed with warm butter.',
    price: 40,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm18',
    name: 'Garlic Butter Naan',
    category: 'Breads',
    description: 'Soft leavened tandoori bread topped with roasted garlic flakes and fresh coriander.',
    price: 60,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm19',
    name: 'Laccha Paratha',
    category: 'Breads',
    description: 'Multi-layered flaky whole wheat paratha baked golden with desi ghee.',
    price: 55,
    isVeg: true,
    isSamplePlaceholder: true
  },

  // Beverages
  {
    id: 'm20',
    name: 'Highway Kulhad Masala Chai',
    category: 'Beverages',
    description: 'Slow-brewed strong Assam tea with crushed ginger, cardamom, and fresh creamy milk in an earthen cup.',
    price: 30,
    isVeg: true,
    isSignature: true,
    isSamplePlaceholder: true,
    tag: 'Highway Essential'
  },
  {
    id: 'm21',
    name: 'Sweet Punjabi Lassi',
    category: 'Beverages',
    description: 'Thick churned sweet yogurt drink topped with a dollop of fresh malai and crushed nuts.',
    price: 80,
    isVeg: true,
    isSamplePlaceholder: true
  },
  {
    id: 'm22',
    name: 'Fresh Nimbu Shikanji',
    category: 'Beverages',
    description: 'Chilled freshly squeezed lemon cooler seasoned with black salt, cumin, and mint.',
    price: 50,
    isVeg: true,
    isSamplePlaceholder: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Grand Indian Thali',
    category: 'Thali Craft',
    image: '/src/assets/images/hero_indian_thali_1794045107833.jpg',
    caption: 'Full brass spread featuring traditional gravies, warm breads, and fragrant basmati rice.',
    aspect: 'arch'
  },
  {
    id: 'g2',
    title: 'Live Tandoor & Fresh Rotis',
    category: 'Kitchen Craft',
    image: '/src/assets/images/gallery_dhaba_kitchen_1794045111326.jpg',
    caption: 'Tandoori roti and charred naan baked right in front of your eyes over red-hot clay embers.',
    aspect: 'oval'
  },
  {
    id: 'g3',
    title: 'Signature Paneer Thali',
    category: 'Pure Vegetarian',
    image: '/src/assets/images/dish_paneer_thali_1794045107967.jpg',
    caption: 'Rich shahi paneer with golden yellow dal and hot rotis, crafted for hearty highway appetites.',
    aspect: 'tall'
  },
  {
    id: 'g4',
    title: 'Rustic Dhaba Egg Curry',
    category: 'Signature Gravy',
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg',
    caption: 'Halved eggs simmering in thick caramelized spiced masala gravy garnished with ginger juliennes.',
    aspect: 'oval'
  },
  {
    id: 'g5',
    title: 'Steaming Feast Moments',
    category: 'Dining Warmth',
    image: '/src/assets/images/experience_thali_macro_1794045110742.jpg',
    caption: 'Garlic naan dipped in creamy velvety curry, capturing the true essence of Indian dining.',
    aspect: 'wide'
  }
];
