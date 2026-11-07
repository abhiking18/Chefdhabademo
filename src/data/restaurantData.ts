export interface MenuItem {
  id: string;
  name: string;
  category:
    | 'Thali'
    | 'Indian Vegetable & Paneer'
    | 'Tandoori & Breads'
    | 'Local Chicken & Duck'
    | 'Indian Non-Veg & Mutton'
    | 'Fish Specialties'
    | 'Egg Delights'
    | 'Rice, Polao & Biryani'
    | 'Chowmin & Rolls'
    | 'Snacks & Soups'
    | 'Breakfast & Beverages';
  description: string;
  price: number;
  halfPrice?: number;
  isVeg: boolean;
  isSignature?: boolean;
  image?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Restaurant Ambience' | 'Outdoor Dining' | 'Interior & Cabins' | 'Signature Foods' | 'Kitchen Craft';
  image: string;
  caption: string;
  aspect: 'arch' | 'oval' | 'tall' | 'wide' | 'square';
  isRealPhoto?: boolean;
}

export const RESTAURANT_INFO = {
  name: "New Highway Chef Dhaba",
  tagline: "Good Food. The Dhaba Way.",
  sublabel: "AUTHENTIC INDIAN FLAVOURS · RANGIA",
  bannerTitle: "A Complete Family Restaurant · Veg & Non-Veg",
  location: "Rangia, Assam – 781354",
  addressNotes: "Highway corridor, Rangia, Kamrup district, Assam",
  phone: "070164 07776",
  phoneRaw: "07016407776",
  whatsappNumber: "917016407776",
  whatsappPrefilledMessage: "Hello New Highway Chef Dhaba, I would like to know about your menu and place an order.",
  priceRange: "₹200–400 per person",
  closingTime: "Closes at 11:30 PM",
  hoursDisclaimer: "Open daily for lunch, dinner and late-night highway travelers.",
  rating: "3.8",
  reviewCount: "1,039",
  amenities: [
    { title: "Outdoor Seating", desc: "Enjoy open-air dining under palm trees, thatched huts & festive night fairy lights." },
    { title: "Family Friendly", desc: "Spacious indoor bamboo-panelled dining hall and kids' favourite dishes." },
    { title: "Local Assamese Delights", desc: "Featuring authentic Fish Tenga, Duck Curry & Desi Local Chicken." },
    { title: "Cash Only", desc: "Traditional counter checkout at the dhaba desk." },
    { title: "Live Clay Tandoor", desc: "Fresh hot tandoori rotis, garlic naans, and butter naans baked to order." },
  ],
  agencyCredit: "Professional Client Demo by TAREX"
};

export const MENU_CATEGORIES = [
  'All Items',
  'Thali',
  'Indian Vegetable & Paneer',
  'Tandoori & Breads',
  'Local Chicken & Duck',
  'Indian Non-Veg & Mutton',
  'Fish Specialties',
  'Egg Delights',
  'Rice, Polao & Biryani',
  'Chowmin & Rolls',
  'Snacks & Soups',
  'Breakfast & Beverages'
] as const;

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // ================= THALI =================
  {
    id: 'th-1',
    name: 'Thali Rice Veg',
    category: 'Thali',
    description: 'Traditional wholesome dhaba meal with steamed rice, comforting dal, seasonal sabzi, salad and chutney.',
    price: 100,
    isVeg: true,
    isSignature: true,
    tag: 'Daily Best Seller'
  },
  {
    id: 'th-2',
    name: 'Paneer Thali (Motor Paneer)',
    category: 'Thali',
    description: 'Rich spiced motor paneer curry served with yellow dal, fragrant rice, tandoori rotis, salad, raita, and papad.',
    price: 200,
    isVeg: true,
    isSignature: true,
    image: '/src/assets/images/dish_paneer_thali_1794045107967.jpg',
    tag: 'Veg Signature'
  },
  {
    id: 'th-3',
    name: 'Egg Thali',
    category: 'Thali',
    description: 'Dhaba style egg curry with boiled eggs in spiced masala gravy, served with dal, rice, rotis and salad.',
    price: 180,
    isVeg: false,
    isSignature: true,
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg',
    tag: 'Crowd Favourite'
  },
  {
    id: 'th-4',
    name: 'Fish Thali (Local)',
    category: 'Thali',
    description: 'Fresh local river fish cooked in authentic Assamese spiced curry, served with steamed rice, dal, bhaji & salad.',
    price: 190,
    isVeg: false,
    isSignature: true,
    tag: 'Local Catch'
  },
  {
    id: 'th-5',
    name: 'L. Pic Fish Thali',
    category: 'Thali',
    description: 'Special large piece fresh fish curry thali with hot rice, seasonal vegetable, lentils and condiment.',
    price: 210,
    isVeg: false,
    tag: 'Special Fish'
  },
  {
    id: 'th-6',
    name: 'Chicken Thali',
    category: 'Thali',
    description: 'Tender chicken curry cooked dhaba style, served with steamed rice, dal, rotis, onions and salad.',
    price: 230,
    isVeg: false,
    tag: 'Popular'
  },
  {
    id: 'th-7',
    name: 'Local Chicken Thali',
    category: 'Thali',
    description: 'Authentic desi local chicken curry simmered with traditional spices, served with fragrant rice and side accompaniments.',
    price: 250,
    isVeg: false,
    isSignature: true,
    tag: 'Desi Chicken'
  },
  {
    id: 'th-8',
    name: 'Mutton Thali',
    category: 'Thali',
    description: 'Rich, slow-cooked mutton curry with fragrant basmati rice, dal tadka, tandoori rotis, salad, and lemon.',
    price: 260,
    isVeg: false,
    isSignature: true,
    tag: 'Hearty Mutton'
  },
  {
    id: 'th-9',
    name: 'Non Veg Thali',
    category: 'Thali',
    description: 'Grand meat combo thali featuring non-veg curries, lentils, rotis, rice and traditional condiments.',
    price: 300,
    isVeg: false,
    image: '/src/assets/images/hero_indian_thali_1794045107833.jpg',
    tag: 'Grand Feast'
  },
  {
    id: 'th-10',
    name: 'Non Veg Thali Lichi (Local Chicken)',
    category: 'Thali',
    description: 'Premium lavish feast featuring rich local chicken preparations, aromatic rice, rotis, side gravies and salad.',
    price: 350,
    isVeg: false,
    tag: 'Chef Special'
  },

  // ================= INDIAN VEGETABLE & PANEER =================
  {
    id: 'vg-1',
    name: 'Dhaba Special Veg.',
    category: 'Indian Vegetable & Paneer',
    description: 'Our house chef specialty vegetable medley cooked in thick roasted spice gravy.',
    price: 200,
    isVeg: true,
    isSignature: true,
    tag: 'House Special'
  },
  {
    id: 'vg-2',
    name: 'Dal Fry',
    category: 'Indian Vegetable & Paneer',
    description: 'Yellow lentils tempered with cumin, garlic, onions, and fresh green chillies.',
    price: 100,
    isVeg: true
  },
  {
    id: 'vg-3',
    name: 'Dal Butter Fry',
    category: 'Indian Vegetable & Paneer',
    description: 'Rich yellow dal cooked with generous dollop of butter and aromatic desi spices.',
    price: 110,
    isVeg: true
  },
  {
    id: 'vg-4',
    name: 'Tarka Fry',
    category: 'Indian Vegetable & Paneer',
    description: 'Dhaba style special lentil tarka with roasted cumin, whole dry red chilli and coriander.',
    price: 120,
    isVeg: true
  },
  {
    id: 'vg-5',
    name: 'Dal Makhani',
    category: 'Indian Vegetable & Paneer',
    description: 'Slow-simmered whole black lentils cooked overnight with cream, butter and mild spices.',
    price: 160,
    isVeg: true,
    tag: 'Classic'
  },
  {
    id: 'vg-6',
    name: 'Shahi Paneer',
    category: 'Indian Vegetable & Paneer',
    description: 'Soft cottage cheese simmered in velvety royal cashew, melon seed and saffron tomato cream gravy.',
    price: 260,
    isVeg: true,
    tag: 'Royal Veg'
  },
  {
    id: 'vg-7',
    name: 'Butter Paneer',
    category: 'Indian Vegetable & Paneer',
    description: 'Cottage cheese cubes bathed in smooth buttery tomato makhani sauce infused with kasoori methi.',
    price: 240,
    isVeg: true
  },
  {
    id: 'vg-8',
    name: 'Kadai Paneer',
    category: 'Indian Vegetable & Paneer',
    description: 'Paneer tossed in iron wok with crunchy bell peppers, onions, and freshly pounded kadai spices.',
    price: 250,
    isVeg: true
  },
  {
    id: 'vg-9',
    name: 'Paneer Tikka Masala',
    category: 'Indian Vegetable & Paneer',
    description: 'Charcoal-grilled paneer pieces simmered in rich spiced tikka gravy.',
    price: 270,
    isVeg: true
  },
  {
    id: 'vg-10',
    name: 'Palak Paneer (Seasonal)',
    category: 'Indian Vegetable & Paneer',
    description: 'Fresh pureed spinach cooked with garlic, ginger, cream, and tender cottage cheese cubes.',
    price: 270,
    isVeg: true
  },
  {
    id: 'vg-11',
    name: 'Shahi Paneer Kashmiri',
    category: 'Indian Vegetable & Paneer',
    description: 'Sweet and mildly spiced rich paneer gravy enriched with dry fruits and saffron.',
    price: 340,
    isVeg: true
  },
  {
    id: 'vg-12',
    name: 'Paneer Pasanda',
    category: 'Indian Vegetable & Paneer',
    description: 'Stuffed paneer sandwiches cooked in luxurious, aromatic Mughlai sauce.',
    price: 310,
    isVeg: true
  },
  {
    id: 'vg-13',
    name: 'Malai Kofta',
    category: 'Indian Vegetable & Paneer',
    description: 'Melt-in-mouth cottage cheese and potato dumplings in rich white cream gravy.',
    price: 340,
    isVeg: true
  },
  {
    id: 'vg-14',
    name: 'Aloo Jeera Fry',
    category: 'Indian Vegetable & Paneer',
    description: 'Crisp diced potatoes tossed with toasted cumin, turmeric and green chillies.',
    price: 90,
    isVeg: true
  },
  {
    id: 'vg-15',
    name: 'Dum Aloo',
    category: 'Indian Vegetable & Paneer',
    description: 'Baby potatoes gently simmered in spiced onion and tomato masala.',
    price: 130,
    isVeg: true
  },
  {
    id: 'vg-16',
    name: 'Mushroom Masala',
    category: 'Indian Vegetable & Paneer',
    description: 'Fresh sliced button mushrooms cooked in robust brown onion and tomato masala.',
    price: 260,
    isVeg: true
  },
  {
    id: 'vg-17',
    name: 'Chana Masala',
    category: 'Indian Vegetable & Paneer',
    description: 'Chickpeas cooked with roasted cumin, amchur, ginger and roadside dhaba spices.',
    price: 160,
    isVeg: true
  },
  {
    id: 'vg-18',
    name: 'Nava Ratan Kurma',
    category: 'Indian Vegetable & Paneer',
    description: 'Nine gems of vegetables, paneer and dry fruits cooked in mild creamy korma.',
    price: 320,
    isVeg: true
  },
  {
    id: 'vg-19',
    name: 'Mix Veg.',
    category: 'Indian Vegetable & Paneer',
    description: 'Medley of fresh carrots, beans, peas, and potatoes tossed with light Indian spices.',
    price: 180,
    isVeg: true
  },

  // ================= TANDOORI & BREADS =================
  {
    id: 'br-1',
    name: 'Tandoori Roti',
    category: 'Tandoori & Breads',
    description: 'Whole wheat flatbread baked crisp and blistered in our clay tandoor oven.',
    price: 20,
    isVeg: true,
    tag: 'Tandoor Classic'
  },
  {
    id: 'br-2',
    name: 'Tandoori Butter Roti',
    category: 'Tandoori & Breads',
    description: 'Hot crisp clay oven roti generously brushed with melting dairy butter.',
    price: 25,
    isVeg: true
  },
  {
    id: 'br-3',
    name: 'Tawa Roti',
    category: 'Tandoori & Breads',
    description: 'Soft homemade style whole wheat phulka baked on hot iron tawa.',
    price: 15,
    isVeg: true
  },
  {
    id: 'br-4',
    name: 'Tawa Butter Roti',
    category: 'Tandoori & Breads',
    description: 'Hot tawa roti brushed with golden dairy butter.',
    price: 20,
    isVeg: true
  },
  {
    id: 'br-5',
    name: 'Butter Naan',
    category: 'Tandoori & Breads',
    description: 'Fluffy leavened refined flour bread baked in tandoor and basted with melted butter.',
    price: 50,
    isVeg: true,
    tag: 'Best with Gravy'
  },
  {
    id: 'br-6',
    name: 'Garlic Naan',
    category: 'Tandoori & Breads',
    description: 'Soft tandoori bread topped with fragrant toasted garlic bits and fresh coriander.',
    price: 70,
    isVeg: true,
    tag: 'Chef Favourite'
  },
  {
    id: 'br-7',
    name: 'Singapuri Naan',
    category: 'Tandoori & Breads',
    description: 'Special layered naan seasoned with aromatic spices.',
    price: 100,
    isVeg: true
  },
  {
    id: 'br-8',
    name: 'Masala Kulcha',
    category: 'Tandoori & Breads',
    description: 'Soft tandoori kulcha stuffed with spiced potato and onion filling.',
    price: 100,
    isVeg: true
  },
  {
    id: 'br-9',
    name: 'Paneer Kulcha',
    category: 'Tandoori & Breads',
    description: 'Warm bread stuffed with grated seasoned cottage cheese and fresh herbs.',
    price: 120,
    isVeg: true
  },
  {
    id: 'br-10',
    name: 'Tandoori Paratha',
    category: 'Tandoori & Breads',
    description: 'Crisp, flaky whole wheat layered paratha baked in the clay oven.',
    price: 40,
    isVeg: true
  },
  {
    id: 'br-11',
    name: 'Kashmiri Naan',
    category: 'Tandoori & Breads',
    description: 'Rich royal naan stuffed with nuts, raisins, and sweet hints.',
    price: 100,
    isVeg: true
  },

  // ================= LOCAL CHICKEN & DUCK =================
  {
    id: 'lc-1',
    name: 'Local Chicken Curry',
    category: 'Local Chicken & Duck',
    description: 'Assam local desi chicken slow-cooked with ginger, garlic, mustard oil, and ground coriander.',
    price: 350,
    halfPrice: 190,
    isVeg: false,
    isSignature: true,
    tag: 'Local Specialty'
  },
  {
    id: 'lc-2',
    name: 'Local Chicken Masala',
    category: 'Local Chicken & Duck',
    description: 'Desi chicken pieces simmered in rich spiced gravy with roasted cumin and crushed cloves.',
    price: 370,
    halfPrice: 200,
    isVeg: false
  },
  {
    id: 'lc-3',
    name: 'Local Butter Chicken',
    category: 'Local Chicken & Duck',
    description: 'Desi chicken simmered in rich creamy tomato butter sauce with authentic roadside flavours.',
    price: 370,
    isVeg: false
  },
  {
    id: 'lc-4',
    name: 'Local Chicken Kassa',
    category: 'Local Chicken & Duck',
    description: 'Dry roasted thick masala preparation of local chicken packed with bold spicy aromas.',
    price: 370,
    halfPrice: 190,
    isVeg: false
  },
  {
    id: 'lc-5',
    name: 'Local Chicken Fry',
    category: 'Local Chicken & Duck',
    description: 'Crisp fried desi chicken pieces seasoned with turmeric, pepper, and local herbs.',
    price: 350,
    halfPrice: 180,
    isVeg: false
  },
  {
    id: 'lc-6',
    name: 'Duck Curry',
    category: 'Local Chicken & Duck',
    description: 'Traditional Assamese highway specialty duck curry cooked with hearty whole spices and black pepper.',
    price: 350,
    halfPrice: 180,
    isVeg: false,
    isSignature: true,
    tag: 'Assam Highway Delicacy'
  },
  {
    id: 'lc-7',
    name: 'Duck Masala',
    category: 'Local Chicken & Duck',
    description: 'Rich and tender duck meat slow cooked in dark caramelized onion and tomato masala.',
    price: 370,
    halfPrice: 200,
    isVeg: false,
    tag: 'Rich & Robust'
  },

  // ================= INDIAN NON-VEG & MUTTON =================
  {
    id: 'nv-1',
    name: 'Chicken Curry',
    category: 'Indian Non-Veg & Mutton',
    description: 'Classic dhaba chicken curry in home-style tomato onion gravy with fresh coriander.',
    price: 250,
    halfPrice: 140,
    isVeg: false
  },
  {
    id: 'nv-2',
    name: 'Chicken Butter Masala',
    category: 'Indian Non-Veg & Mutton',
    description: 'Tender chicken pieces simmered in sweet and savory rich tomato butter makhani sauce.',
    price: 330,
    isVeg: false,
    tag: 'Top Choice'
  },
  {
    id: 'nv-3',
    name: 'Chicken Hyderabadi',
    category: 'Indian Non-Veg & Mutton',
    description: 'Chicken cooked with mint, spinach and southern spiced green masala.',
    price: 300,
    isVeg: false
  },
  {
    id: 'nv-4',
    name: 'Chicken Bharta',
    category: 'Indian Non-Veg & Mutton',
    description: 'Shredded chicken cooked in velvety egg-infused gravy with fragrant spices.',
    price: 320,
    isVeg: false
  },
  {
    id: 'nv-5',
    name: 'Mughlai Chicken',
    category: 'Indian Non-Veg & Mutton',
    description: 'Rich royal chicken preparation with cashew paste, boiled egg and mild spices.',
    price: 360,
    isVeg: false
  },
  {
    id: 'nv-6',
    name: 'Kadai Chicken',
    category: 'Indian Non-Veg & Mutton',
    description: 'Wok-tossed chicken with crunchy bell peppers, onions and crushed coriander seeds.',
    price: 300,
    isVeg: false
  },
  {
    id: 'nv-7',
    name: 'Chicken 65',
    category: 'Indian Non-Veg & Mutton',
    description: 'Spicy deep-fried chicken cubes tossed with curry leaves, mustard seeds and red chillies.',
    price: 310,
    isVeg: false
  },
  {
    id: 'nv-8',
    name: 'Chilly Chicken (Gravy/Dry)',
    category: 'Indian Non-Veg & Mutton',
    description: 'Indo-Chinese boneless chicken tossed with green chillies, capsicum and soya garlic sauce.',
    price: 280,
    isVeg: false
  },
  {
    id: 'nv-9',
    name: 'Chicken Maharaja',
    category: 'Indian Non-Veg & Mutton',
    description: 'Chef signature grand tandoori non-veg feast fit for kings.',
    price: 450,
    isVeg: false,
    tag: 'Grand Platter'
  },
  {
    id: 'nv-10',
    name: 'Tandoori Chicken',
    category: 'Indian Non-Veg & Mutton',
    description: 'Whole chicken marinated in yogurt and tandoori spices, roasted in clay oven.',
    price: 350,
    halfPrice: 220,
    isVeg: false,
    tag: 'Smoky Charcoal'
  },
  {
    id: 'nv-11',
    name: 'Tangdi Kabab',
    category: 'Indian Non-Veg & Mutton',
    description: 'Succulent chicken drumsticks marinated in spicy tandoori marinade and roasted golden.',
    price: 450,
    halfPrice: 230,
    isVeg: false
  },
  {
    id: 'nv-12',
    name: 'Dhaba Special Chicken',
    category: 'Indian Non-Veg & Mutton',
    description: 'House recipe special chicken cooked with chef secret whole spice blend.',
    price: 400,
    isVeg: false,
    isSignature: true
  },
  {
    id: 'nv-13',
    name: 'Mutton Curry',
    category: 'Indian Non-Veg & Mutton',
    description: 'Tender goat mutton pieces braised in onion, garlic and whole spices until tender.',
    price: 330,
    halfPrice: 170,
    isVeg: false,
    tag: 'Mutton Classic'
  },
  {
    id: 'nv-14',
    name: 'Mutton Masala',
    category: 'Indian Non-Veg & Mutton',
    description: 'Mutton pieces slow simmered in spicy, thick roasted tomato masala gravy.',
    price: 350,
    halfPrice: 180,
    isVeg: false
  },
  {
    id: 'nv-15',
    name: 'Mutton Kassa',
    category: 'Indian Non-Veg & Mutton',
    description: 'Semi-dry slow bhuna mutton packed with intense flavours and mustard oil aroma.',
    price: 350,
    halfPrice: 180,
    isVeg: false
  },

  // ================= FISH SPECIALTIES =================
  {
    id: 'fs-1',
    name: 'Fish Tenga',
    category: 'Fish Specialties',
    description: 'Signature Assamese sour fish curry cooked with tomatoes, lemon and local herbs. Refreshing and light.',
    price: 100,
    isVeg: false,
    isSignature: true,
    tag: 'Assam Signature Tenga'
  },
  {
    id: 'fs-2',
    name: 'Fish Curry',
    category: 'Fish Specialties',
    description: 'Local freshwater fish simmered in traditional mustard and turmeric gravy.',
    price: 90,
    isVeg: false
  },
  {
    id: 'fs-3',
    name: 'Fish Fry',
    category: 'Fish Specialties',
    description: 'Crisp pan-fried local river fish marinated with salt, turmeric and chilli powder.',
    price: 80,
    isVeg: false
  },
  {
    id: 'fs-4',
    name: 'Chana Fish Curry',
    category: 'Fish Specialties',
    description: 'Unique dhaba combination of fresh fish and chickpeas simmered together in rich masala.',
    price: 170,
    isVeg: false
  },
  {
    id: 'fs-5',
    name: 'Chana Fish Fry',
    category: 'Fish Specialties',
    description: 'Crisp fish served with spiced roasted chickpeas and chopped onions.',
    price: 150,
    isVeg: false
  },
  {
    id: 'fs-6',
    name: 'Pic Fish Curry / Fry',
    category: 'Fish Specialties',
    description: 'Select cuts of freshwater fish cooked to perfection in spicy roadside gravy.',
    price: 110,
    isVeg: false
  },

  // ================= EGG DELIGHTS =================
  {
    id: 'eg-1',
    name: 'Egg Curry',
    category: 'Egg Delights',
    description: 'Boiled eggs cooked in caramelized onion, tomato, ginger and whole roasted garam masala.',
    price: 110,
    isVeg: false,
    isSignature: true,
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg',
    tag: 'All-Time Hit'
  },
  {
    id: 'eg-2',
    name: 'Egg Masala',
    category: 'Egg Delights',
    description: 'Two boiled eggs tossed in spicy thick onion-tomato gravy with chopped green chillies.',
    price: 120,
    isVeg: false
  },
  {
    id: 'eg-3',
    name: 'Omlet Curry',
    category: 'Egg Delights',
    description: 'Fluffy masala omelet pieces simmered in rich dhaba spiced curry.',
    price: 120,
    isVeg: false
  },
  {
    id: 'eg-4',
    name: 'Egg Butter Masala',
    category: 'Egg Delights',
    description: 'Boiled eggs bathed in velvety tomato cream butter gravy.',
    price: 130,
    isVeg: false
  },
  {
    id: 'eg-5',
    name: 'Egg Bhujia',
    category: 'Egg Delights',
    description: 'Spicy scrambled eggs tossed with chopped onions, green chillies and fresh coriander.',
    price: 90,
    isVeg: false
  },
  {
    id: 'eg-6',
    name: 'Egg Tarka Fry',
    category: 'Egg Delights',
    description: 'Classic dhaba egg tarka with yellow lentils and scrambled eggs tempered in pure ghee.',
    price: 130,
    isVeg: false
  },
  {
    id: 'eg-7',
    name: 'Omlet / Poach',
    category: 'Egg Delights',
    description: 'Freshly beaten masala omelet or soft egg poach cooked hot on the pan.',
    price: 50,
    isVeg: false
  },

  // ================= RICE, POLAO & BIRYANI =================
  {
    id: 'rc-1',
    name: 'Plain Rice',
    category: 'Rice, Polao & Biryani',
    description: 'Steamed fluffy rice, ideal accompaniment for all dals, fish, and curries.',
    price: 50,
    isVeg: true
  },
  {
    id: 'rc-2',
    name: 'Jeera Rice',
    category: 'Rice, Polao & Biryani',
    description: 'Aromatic basmati rice tempered with toasted cumin seeds and ghee.',
    price: 110,
    isVeg: true
  },
  {
    id: 'rc-3',
    name: 'Jeera Polao',
    category: 'Rice, Polao & Biryani',
    description: 'Mildly spiced pulao rice tossed with cumin, whole cardamom and bay leaves.',
    price: 140,
    isVeg: true
  },
  {
    id: 'rc-4',
    name: 'Veg Fried Rice',
    category: 'Rice, Polao & Biryani',
    description: 'Wok-tossed rice with finely diced carrots, beans, cabbage, and light soya sauce.',
    price: 150,
    isVeg: true
  },
  {
    id: 'rc-5',
    name: 'Veg Biriyani',
    category: 'Rice, Polao & Biryani',
    description: 'Fragrant basmati rice layered with mixed vegetables, fried onions, and biryani spices.',
    price: 150,
    isVeg: true
  },
  {
    id: 'rc-6',
    name: 'Paneer Biriani',
    category: 'Rice, Polao & Biryani',
    description: 'Spiced paneer cubes cooked with aromatic saffron basmati rice, served with raita.',
    price: 230,
    isVeg: true
  },
  {
    id: 'rc-7',
    name: 'Chicken Biriyani',
    category: 'Rice, Polao & Biryani',
    description: 'Dhaba style aromatic spiced chicken biryani with tender chicken pieces and fried onions.',
    price: 250,
    isVeg: false,
    tag: 'Highway Biryani'
  },
  {
    id: 'rc-8',
    name: 'Mutton Biryani',
    category: 'Rice, Polao & Biryani',
    description: 'Succulent mutton slow-cooked with basmati rice, whole spices, mint, and desi ghee.',
    price: 270,
    isVeg: false,
    tag: 'Mutton Biryani'
  },
  {
    id: 'rc-9',
    name: 'Hydrabadi Chicken Biriyani',
    category: 'Rice, Polao & Biryani',
    description: 'Rich dum-style spiced Hyderabadi chicken biryani packed with herbs and saffron.',
    price: 260,
    isVeg: false
  },
  {
    id: 'rc-10',
    name: 'Egg Biriyani',
    category: 'Rice, Polao & Biryani',
    description: 'Fragrant rice with roasted whole boiled eggs in caramelized biryani masala.',
    price: 190,
    isVeg: false
  },

  // ================= CHOWMIN & ROLLS =================
  {
    id: 'cw-1',
    name: 'Veg Chowmin',
    category: 'Chowmin & Rolls',
    description: 'Wok-tossed noodles with shredded cabbage, carrots, capsicum, and oriental sauces.',
    price: 100,
    isVeg: true
  },
  {
    id: 'cw-2',
    name: 'Chicken Chowmin',
    category: 'Chowmin & Rolls',
    description: 'Stir-fried noodles with chicken strips, spring onions, and street spices.',
    price: 150,
    isVeg: false,
    tag: 'Popular Snack'
  },
  {
    id: 'cw-3',
    name: 'Dhaba Special Chow',
    category: 'Chowmin & Rolls',
    description: 'Loaded house special noodles tossed with chicken, eggs, paneer and vegetables.',
    price: 190,
    isVeg: false,
    isSignature: true
  },
  {
    id: 'cw-4',
    name: 'Egg Chowmin',
    category: 'Chowmin & Rolls',
    description: 'Noodles tossed with scrambled eggs and crisp vegetables.',
    price: 110,
    isVeg: false
  },
  {
    id: 'cw-5',
    name: 'Chicken Roll',
    category: 'Chowmin & Rolls',
    description: 'Warm paratha rolled with juicy spiced chicken, sliced onions, and tangy sauce.',
    price: 100,
    isVeg: false,
    tag: 'Quick Bite'
  },
  {
    id: 'cw-6',
    name: 'Paneer Roll',
    category: 'Chowmin & Rolls',
    description: 'Flaky paratha wrap stuffed with seasoned cottage cheese, onions and chutneys.',
    price: 130,
    isVeg: true
  },
  {
    id: 'cw-7',
    name: 'Egg Roll',
    category: 'Chowmin & Rolls',
    description: 'Classic street style double egg paratha roll with lime, chilli, and onions.',
    price: 90,
    isVeg: false
  },
  {
    id: 'cw-8',
    name: 'Baba Roll',
    category: 'Chowmin & Rolls',
    description: 'Special jumbo roll packed with assorted hearty fillings and sauces.',
    price: 120,
    isVeg: false
  },

  // ================= SNACKS & SOUPS =================
  {
    id: 'sn-1',
    name: 'Paneer Pokora',
    category: 'Snacks & Soups',
    description: 'Fresh paneer slabs dipped in spiced gram flour batter and fried until golden and crisp.',
    price: 210,
    isVeg: true,
    tag: 'Crispy Snack'
  },
  {
    id: 'sn-2',
    name: 'Chicken Pakora',
    category: 'Snacks & Soups',
    description: 'Boneless spiced chicken fritters fried golden brown, served with green chutney.',
    price: 250,
    isVeg: false
  },
  {
    id: 'sn-3',
    name: 'Onion Pokora',
    category: 'Snacks & Soups',
    description: 'Crunchy sliced onion fritters seasoned with ajwain and green chillies.',
    price: 130,
    isVeg: true
  },
  {
    id: 'sn-4',
    name: 'French Fry',
    category: 'Snacks & Soups',
    description: 'Golden salted potato fries, all-time favourite for kids and travelers.',
    price: 150,
    isVeg: true
  },
  {
    id: 'sn-5',
    name: 'Peanut Masala',
    category: 'Snacks & Soups',
    description: 'Toasted peanuts tossed with chopped onions, tomatoes, green chillies and lemon juice.',
    price: 120,
    isVeg: true
  },
  {
    id: 'sn-6',
    name: 'Masala Papad / Dry Papad',
    category: 'Snacks & Soups',
    description: 'Roasted crisp papad topped with spicy onion-tomato salsa.',
    price: 70,
    isVeg: true
  },
  {
    id: 'sn-7',
    name: 'Chicken Hot Soup',
    category: 'Snacks & Soups',
    description: 'Steaming spicy and tangy chicken soup with pepper and fresh herbs.',
    price: 120,
    isVeg: false
  },
  {
    id: 'sn-8',
    name: 'Tomato Soup',
    category: 'Snacks & Soups',
    description: 'Creamy warm tomato soup seasoned with roasted cumin and crunchy croutons.',
    price: 100,
    isVeg: true
  },

  // ================= BREAKFAST & BEVERAGES =================
  {
    id: 'bv-1',
    name: 'Aloo Paratha',
    category: 'Breakfast & Beverages',
    description: 'Whole wheat paratha stuffed with spiced mashed potatoes, roasted on tawa with butter.',
    price: 50,
    isVeg: true,
    tag: 'Morning Hit'
  },
  {
    id: 'bv-2',
    name: 'Chola Bhatura',
    category: 'Breakfast & Beverages',
    description: 'Puffed golden bhature served with spicy tangy chickpea curry and pickle.',
    price: 100,
    isVeg: true,
    tag: 'Breakfast Special'
  },
  {
    id: 'bv-3',
    name: 'Special Sweet Lassi',
    category: 'Breakfast & Beverages',
    description: 'Chilled creamy churned yogurt drink topped with malai, perfect after highway travel.',
    price: 70,
    isVeg: true,
    tag: 'Refreshing'
  },
  {
    id: 'bv-4',
    name: 'Highway Assam Tea (Chai)',
    category: 'Breakfast & Beverages',
    description: 'Freshly brewed strong Assam tea with crushed ginger, cardamom, and milk.',
    price: 20,
    isVeg: true,
    tag: 'Highway Essential'
  },
  {
    id: 'bv-5',
    name: 'Fresh Lemon Soda',
    category: 'Breakfast & Beverages',
    description: 'Sparkling lemon soda with black salt, cumin, and fresh mint.',
    price: 50,
    isVeg: true
  },
  {
    id: 'bv-6',
    name: 'Cool Coffee',
    category: 'Breakfast & Beverages',
    description: 'Chilled thick blended coffee with chocolate drizzle and creamy froth.',
    price: 90,
    isVeg: true
  },
  {
    id: 'bv-7',
    name: 'Hot Coffee',
    category: 'Breakfast & Beverages',
    description: 'Freshly whipped hot frothy coffee with rich milk.',
    price: 50,
    isVeg: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-real-1',
    title: 'Main Entrance & Glowing Signboard',
    category: 'Restaurant Ambience',
    image: '/assets/aistudio/unnamed_98627df7.jpg',
    caption: 'The vibrant illuminated red signboard of New Highway Chef Dhaba welcoming travelers and families on the highway in Rangia at night, with ample parking for cars and bikes.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-2',
    title: 'Thatched Roof Dining Cabins',
    category: 'Outdoor Dining',
    image: '/assets/aistudio/unnamed__1__39c05000.jpg',
    caption: 'Authentic Assamese traditional thatched dining cottages with green bamboo lattice work, surrounded by palm trees and manicured courtyard greenery.',
    aspect: 'oval',
    isRealPhoto: true
  },
  {
    id: 'g-real-3',
    title: 'Two-Story Bamboo Machan Hut',
    category: 'Interior & Cabins',
    image: '/assets/aistudio/unnamed__2__57eaae68.jpg',
    caption: 'Distinctive two-tier bamboo dining treehouse pavilion nestled under evergreen trees, offering private elevated dining for families.',
    aspect: 'tall',
    isRealPhoto: true
  },
  {
    id: 'g-real-4',
    title: 'Family Indoor Bamboo Dining Hall',
    category: 'Interior & Cabins',
    image: '/assets/aistudio/unnamed__3__efa49378.jpg',
    caption: 'Spacious, clean indoor dining hall featuring handwoven bamboo wall panels, colourful tablecloths, wall art, and comfortable seating.',
    aspect: 'oval',
    isRealPhoto: true
  },
  {
    id: 'g-real-5',
    title: 'Night Garden Dining with Fairy Lights',
    category: 'Outdoor Dining',
    image: '/assets/aistudio/unnamed__4__eaedc5d6.jpg',
    caption: 'Enchanting evening atmosphere with colorful fairy lights draped over the bamboo counter, outdoor umbrellas, and open-air seating under the Assam night sky.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-food-1',
    title: 'Signature Paneer Thali',
    category: 'Signature Foods',
    image: '/src/assets/images/dish_paneer_thali_1794045107967.jpg',
    caption: 'Wholesome Paneer Thali (₹200) served with dal tadka, jeera rice, tandoori rotis, salad and raita.',
    aspect: 'tall',
    isRealPhoto: false
  },
  {
    id: 'g-food-2',
    title: 'Rustic Dhaba Egg Curry',
    category: 'Signature Foods',
    image: '/src/assets/images/dish_egg_curry_1794045110715.jpg',
    caption: 'Authentic Dhaba Egg Curry (₹110) slow simmered with browned onions, tomatoes and whole roasted spices in a hammered copper handi.',
    aspect: 'oval',
    isRealPhoto: false
  },
  {
    id: 'g-food-3',
    title: 'Grand Indian Royal Thali',
    category: 'Signature Foods',
    image: '/src/assets/images/hero_indian_thali_1794045107833.jpg',
    caption: 'Grand feast featuring copper katoris filled with slow-cooked dals, royal paneer, basmati rice, charred tandoori naan and chutneys.',
    aspect: 'arch',
    isRealPhoto: false
  },
  {
    id: 'g-craft-1',
    title: 'Live Clay Tandoor & Fresh Rotis',
    category: 'Kitchen Craft',
    image: '/src/assets/images/gallery_dhaba_kitchen_1794045111326.jpg',
    caption: 'Hot tandoori rotis (₹20) and butter naans (₹50) baked live over blazing charcoal in the traditional clay tandoor pit.',
    aspect: 'arch',
    isRealPhoto: false
  },
  {
    id: 'g-food-4',
    title: 'Steaming Naan & Rich Gravy Moments',
    category: 'Signature Foods',
    image: '/src/assets/images/experience_thali_macro_1794045110742.jpg',
    caption: 'Hot garlic butter naan dipped into rich dhaba gravy, capturing the pure pleasure of highway dining.',
    aspect: 'wide',
    isRealPhoto: false
  }
];
