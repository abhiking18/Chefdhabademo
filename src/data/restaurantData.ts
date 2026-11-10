export interface MenuItem {
  id: string;
  name: string;
  category:
    | 'Thali'
    | 'Local Chicken & Duck'
    | 'Fish Specialties'
    | 'Indian Veg & Paneer'
    | 'Indian Non-Veg & Mutton'
    | 'Tandoori Roti & Dishes'
    | 'Biriyani & Rice'
    | 'Chinese & Noodles'
    | 'Snacks & Rolls'
    | 'Breakfast & Beverages';
  price: number;
  halfPrice?: number;
  isVeg: boolean;
  isSignature?: boolean;
  tag?: string;
  description?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Restaurant Exterior' | 'Dining Halls' | 'Cabins & Machan' | 'Kids Playground';
  image: string;
  caption: string;
  aspect: 'arch' | 'oval' | 'tall' | 'wide' | 'square';
  isRealPhoto: boolean;
}

export const RESTAURANT_INFO = {
  name: "New Highway Chef Dhaba",
  tagline: "Good Food. The Dhaba Way.",
  sublabel: "Rangia, NH-31, Assam",
  location: "Rangia Highway, NH-31, Assam – 781354",
  addressNotes: "Directly on NH-31 Highway, Rangia, Kamrup district, Assam",
  phone: "070164 07776",
  phoneRaw: "07016407776",
  alternatePhones: ["8472094950", "7062383016"],
  whatsappNumber: "917016407776",
  whatsappPrefilledMessage: "Hello New Highway Chef Dhaba, I would like to place an order or table inquiry.",
  priceRange: "₹200–400 per person",
  closingTime: "Open Daily until 11:30 PM",
  hoursDisclaimer: "Breakfast, lunch, dinner & late night.",
  rating: "3.8",
  reviewCount: "1,039",
  amenities: [
    { title: "Kids' Playground", desc: "Swings and slides for children." },
    { title: "Outdoor Cabins", desc: "Traditional thatched huts & bamboo machan." },
    { title: "Indoor Dining Hall", desc: "Clean seating for families & groups." },
    { title: "Highway Parking", desc: "Spacious parking on NH-31." },
    { title: "Counter Billing", desc: "Quick and convenient checkout." },
  ],
  owner: {
    title: "Founder & Proprietor",
    name: "Founder & Owner",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.56_PM_b0ba283b.jpeg",
    quote: "When we built New Highway Chef Dhaba on NH-31, our dream was simple: to serve food that tastes like home, cooked with heart, pure ingredients, and real Indian hospitality. Every traveler and family stopping here is our guest of honour.",
    commitment: "Traditional clay tandoor cooking, authentic Assamese specialties, and clean, green open-air dining in Rangia."
  }
};

export const MENU_CATEGORIES = [
  'All Items',
  'Thali',
  'Local Chicken & Duck',
  'Fish Specialties',
  'Indian Veg & Paneer',
  'Indian Non-Veg & Mutton',
  'Tandoori Roti & Dishes',
  'Biriyani & Rice',
  'Chinese & Noodles',
  'Snacks & Rolls',
  'Breakfast & Beverages'
] as const;

// UPDATED EXACT MENU ITEMS FROM REAL PRINTED MENU CARD (NO DISH PHOTOS)
export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // ================= THALI =================
  { id: 'th-1', name: 'Veg Thali', category: 'Thali', price: 120, isVeg: true, isSignature: true, tag: 'Best Seller' },
  { id: 'th-2', name: 'Fish Thali Local', category: 'Thali', price: 200, isVeg: false, isSignature: true, tag: 'Local Catch' },
  { id: 'th-3', name: 'Chicken Thali', category: 'Thali', price: 260, isVeg: false },
  { id: 'th-4', name: 'Local Chicken Thali', category: 'Thali', price: 300, isVeg: false, isSignature: true, tag: 'Desi Chicken' },
  { id: 'th-5', name: 'Mutton Thali', category: 'Thali', price: 340, isVeg: false, isSignature: true, tag: 'Hearty Mutton' },
  { id: 'th-6', name: 'Egg Thali', category: 'Thali', price: 210, isVeg: false, tag: 'Popular' },
  { id: 'th-7', name: 'Paneer Thali', category: 'Thali', price: 250, isVeg: true, isSignature: true, tag: 'Veg Special' },
  { id: 'th-8', name: 'Duck Thali', category: 'Thali', price: 250, isVeg: false, isSignature: true, tag: 'Assam Delicacy' },

  // ================= LOCAL CHICKEN & DUCK =================
  { id: 'lc-1', name: 'Local Chicken Curry', category: 'Local Chicken & Duck', price: 370, halfPrice: 210, isVeg: false, isSignature: true, tag: 'Desi Kukkad' },
  { id: 'lc-2', name: 'Local Chicken Masala', category: 'Local Chicken & Duck', price: 400, halfPrice: 220, isVeg: false },
  { id: 'lc-3', name: 'Local Chicken Butter', category: 'Local Chicken & Duck', price: 400, halfPrice: 220, isVeg: false },
  { id: 'lc-4', name: 'Local Chicken Kasa', category: 'Local Chicken & Duck', price: 370, halfPrice: 220, isVeg: false },
  { id: 'lc-5', name: 'Local Chicken Fry', category: 'Local Chicken & Duck', price: 400, halfPrice: 220, isVeg: false },
  { id: 'dk-1', name: 'Duck Curry', category: 'Local Chicken & Duck', price: 460, halfPrice: 230, isVeg: false, isSignature: true, tag: 'Highway Hit' },
  { id: 'dk-2', name: 'Duck Masala', category: 'Local Chicken & Duck', price: 460, halfPrice: 230, isVeg: false },
  { id: 'dk-3', name: 'Duck Dry', category: 'Local Chicken & Duck', price: 450, isVeg: false },

  // ================= FISH SPECIALTIES =================
  { id: 'fs-1', name: 'Fish Tenga (Sour Curry)', category: 'Fish Specialties', price: 220, isVeg: false, isSignature: true, tag: 'Assam Signature' },
  { id: 'fs-2', name: 'Small Fish Curry', category: 'Fish Specialties', price: 220, isVeg: false },
  { id: 'fs-3', name: 'Small Fish Fry', category: 'Fish Specialties', price: 170, isVeg: false },
  { id: 'fs-4', name: 'Fish Curry', category: 'Fish Specialties', price: 200, isVeg: false },
  { id: 'fs-5', name: 'Fish Fry', category: 'Fish Specialties', price: 120, isVeg: false },
  { id: 'fs-6', name: 'Fish Masala', category: 'Fish Specialties', price: 260, isVeg: false },
  { id: 'fs-7', name: 'Fish Bhujiya', category: 'Fish Specialties', price: 240, isVeg: false },
  { id: 'fs-8', name: 'Prawn Curry', category: 'Fish Specialties', price: 380, isVeg: false },
  { id: 'fs-9', name: 'Prawn Fry', category: 'Fish Specialties', price: 350, isVeg: false },

  // ================= INDIAN VEG & PANEER =================
  { id: 'vg-1', name: 'Dal Fry', category: 'Indian Veg & Paneer', price: 100, isVeg: true },
  { id: 'vg-2', name: 'Dal Butter Fry', category: 'Indian Veg & Paneer', price: 120, isVeg: true },
  { id: 'vg-3', name: 'Dal Makhani', category: 'Indian Veg & Paneer', price: 200, isVeg: true, tag: 'Slow Cooked' },
  { id: 'vg-4', name: 'Dal Tarka', category: 'Indian Veg & Paneer', price: 160, isVeg: true },
  { id: 'vg-5', name: 'Rajmah Masala', category: 'Indian Veg & Paneer', price: 220, isVeg: true },
  { id: 'vg-6', name: 'Mix Veg', category: 'Indian Veg & Paneer', price: 170, isVeg: true },
  { id: 'vg-7', name: 'Kadai Veg', category: 'Indian Veg & Paneer', price: 180, isVeg: true },
  { id: 'vg-8', name: 'Veg Jaipuri', category: 'Indian Veg & Paneer', price: 280, isVeg: true },
  { id: 'vg-9', name: 'Aloo Motor', category: 'Indian Veg & Paneer', price: 150, isVeg: true },
  { id: 'vg-10', name: 'Aloo Dum', category: 'Indian Veg & Paneer', price: 120, isVeg: true },
  { id: 'vg-11', name: 'Jeera Aloo', category: 'Indian Veg & Paneer', price: 120, isVeg: true },
  { id: 'vg-12', name: 'Motor Paneer', category: 'Indian Veg & Paneer', price: 200, isVeg: true },
  { id: 'vg-13', name: 'Paneer Masala', category: 'Indian Veg & Paneer', price: 200, isVeg: true },
  { id: 'vg-14', name: 'Palak Paneer (Seasonal)', category: 'Indian Veg & Paneer', price: 210, isVeg: true },
  { id: 'vg-15', name: 'Paneer Butter Masala', category: 'Indian Veg & Paneer', price: 230, isVeg: true, tag: 'Rich Gravy' },
  { id: 'vg-16', name: 'Kadai Paneer', category: 'Indian Veg & Paneer', price: 230, isVeg: true },
  { id: 'vg-17', name: 'Sahi Paneer', category: 'Indian Veg & Paneer', price: 290, isVeg: true },
  { id: 'vg-18', name: 'Paneer Tikka Masala', category: 'Indian Veg & Paneer', price: 280, isVeg: true },
  { id: 'vg-19', name: 'Malai Kofta', category: 'Indian Veg & Paneer', price: 260, isVeg: true },
  { id: 'vg-20', name: 'Mashroom Masala', category: 'Indian Veg & Paneer', price: 270, isVeg: true },

  // ================= INDIAN NON-VEG & MUTTON =================
  { id: 'nv-1', name: 'Chicken Curry', category: 'Indian Non-Veg & Mutton', price: 280, halfPrice: 160, isVeg: false },
  { id: 'nv-2', name: 'Chicken Masala', category: 'Indian Non-Veg & Mutton', price: 340, isVeg: false },
  { id: 'nv-3', name: 'Chicken Butter Masala', category: 'Indian Non-Veg & Mutton', price: 450, isVeg: false, tag: 'Crowd Favourite' },
  { id: 'nv-4', name: 'Chicken Bharta', category: 'Indian Non-Veg & Mutton', price: 400, isVeg: false },
  { id: 'nv-5', name: 'Chicken Kasa', category: 'Indian Non-Veg & Mutton', price: 360, isVeg: false },
  { id: 'nv-6', name: 'Kadai Chicken', category: 'Indian Non-Veg & Mutton', price: 350, isVeg: false },
  { id: 'nv-7', name: 'Chicken Tikka Masala', category: 'Indian Non-Veg & Mutton', price: 400, isVeg: false },
  { id: 'nv-8', name: 'Mutton Curry', category: 'Indian Non-Veg & Mutton', price: 400, halfPrice: 220, isVeg: false, isSignature: true, tag: 'Slow Simmered' },
  { id: 'nv-9', name: 'Mutton Masala', category: 'Indian Non-Veg & Mutton', price: 430, isVeg: false },
  { id: 'nv-10', name: 'Mutton Kasa', category: 'Indian Non-Veg & Mutton', price: 430, isVeg: false },
  { id: 'nv-11', name: 'Mutton Rogan Josh', category: 'Indian Non-Veg & Mutton', price: 400, isVeg: false },
  { id: 'eg-1', name: 'Egg Curry', category: 'Indian Non-Veg & Mutton', price: 120, isVeg: false },
  { id: 'eg-2', name: 'Egg Masala', category: 'Indian Non-Veg & Mutton', price: 140, isVeg: false },
  { id: 'eg-3', name: 'Egg Bhujia', category: 'Indian Non-Veg & Mutton', price: 100, isVeg: false },

  // ================= TANDOORI ROTI & DISHES =================
  { id: 'tr-1', name: 'Tandoori Roti', category: 'Tandoori Roti & Dishes', price: 30, isVeg: true, tag: 'Clay Tandoor' },
  { id: 'tr-2', name: 'Tandoori Roti Butter', category: 'Tandoori Roti & Dishes', price: 40, isVeg: true },
  { id: 'tr-3', name: 'Butter Naan', category: 'Tandoori Roti & Dishes', price: 70, isVeg: true, tag: 'Hot & Fluffy' },
  { id: 'tr-4', name: 'Garlic Naan', category: 'Tandoori Roti & Dishes', price: 80, isVeg: true },
  { id: 'tr-5', name: 'Masala Kulcha', category: 'Tandoori Roti & Dishes', price: 120, isVeg: true },
  { id: 'tr-6', name: 'Paneer Kulcha', category: 'Tandoori Roti & Dishes', price: 140, isVeg: true },
  { id: 'tr-7', name: 'Tawa Roti', category: 'Tandoori Roti & Dishes', price: 20, isVeg: true },
  { id: 'tr-8', name: 'Tawa Butter Roti', category: 'Tandoori Roti & Dishes', price: 30, isVeg: true },
  { id: 'tr-9', name: 'Tandoori Chicken', category: 'Tandoori Roti & Dishes', price: 450, halfPrice: 230, isVeg: false, isSignature: true, tag: 'Charcoal Smoked' },
  { id: 'tr-10', name: 'Tangri Kabab', category: 'Tandoori Roti & Dishes', price: 400, isVeg: false },
  { id: 'tr-11', name: 'Chicken Tikka', category: 'Tandoori Roti & Dishes', price: 380, isVeg: false },
  { id: 'tr-12', name: 'Paneer Tikka', category: 'Tandoori Roti & Dishes', price: 380, isVeg: true },
  { id: 'tr-13', name: 'Reshmi Kabab', category: 'Tandoori Roti & Dishes', price: 400, isVeg: false },

  // ================= BIRIYANI & RICE =================
  { id: 'bi-1', name: 'Chicken Dum Biriyani', category: 'Biriyani & Rice', price: 200, isVeg: false, isSignature: true, tag: 'Dum Cooked' },
  { id: 'bi-2', name: 'Mutton Dum Biriyani', category: 'Biriyani & Rice', price: 240, isVeg: false, tag: 'Aromatic' },
  { id: 'bi-3', name: 'Veg Dum Biriyani', category: 'Biriyani & Rice', price: 160, isVeg: true },
  { id: 'bi-4', name: 'Egg Dum Biriyani', category: 'Biriyani & Rice', price: 170, isVeg: false },
  { id: 'bi-5', name: 'Prawn Dum Biriyani', category: 'Biriyani & Rice', price: 270, isVeg: false },
  { id: 'bi-6', name: 'Plain Rice', category: 'Biriyani & Rice', price: 70, isVeg: true },
  { id: 'bi-7', name: 'Jeera Rice', category: 'Biriyani & Rice', price: 120, isVeg: true },
  { id: 'bi-8', name: 'Veg Pulao', category: 'Biriyani & Rice', price: 150, isVeg: true },
  { id: 'bi-9', name: 'Chicken Pulao', category: 'Biriyani & Rice', price: 280, isVeg: false },

  // ================= CHINESE & NOODLES =================
  { id: 'ch-1', name: 'Veg Chowmin', category: 'Chinese & Noodles', price: 120, isVeg: true },
  { id: 'ch-2', name: 'Chicken Chowmin', category: 'Chinese & Noodles', price: 170, isVeg: false, tag: 'Highway Favourite' },
  { id: 'ch-3', name: 'Egg Chowmin', category: 'Chinese & Noodles', price: 150, isVeg: false },
  { id: 'ch-4', name: 'Mix Chowmin', category: 'Chinese & Noodles', price: 200, isVeg: false },
  { id: 'ch-5', name: 'Veg Fried Rice', category: 'Chinese & Noodles', price: 150, isVeg: true },
  { id: 'ch-6', name: 'Chicken Fried Rice', category: 'Chinese & Noodles', price: 200, isVeg: false },
  { id: 'ch-7', name: 'Chilly Chicken Dry / Gravy', category: 'Chinese & Noodles', price: 280, isVeg: false },
  { id: 'ch-8', name: 'Chicken 65', category: 'Chinese & Noodles', price: 250, isVeg: false },
  { id: 'ch-9', name: 'Chicken Lollipop', category: 'Chinese & Noodles', price: 220, isVeg: false },
  { id: 'ch-10', name: 'Paneer Chilly Dry / Gravy', category: 'Chinese & Noodles', price: 280, isVeg: true },

  // ================= SNACKS & ROLLS =================
  { id: 'sk-1', name: 'Chicken Roll', category: 'Snacks & Rolls', price: 150, isVeg: false, tag: 'Quick Bite' },
  { id: 'sk-2', name: 'Paneer Roll', category: 'Snacks & Rolls', price: 150, isVeg: true },
  { id: 'sk-3', name: 'Egg Roll', category: 'Snacks & Rolls', price: 110, isVeg: false },
  { id: 'sk-4', name: 'Veg Roll', category: 'Snacks & Rolls', price: 80, isVeg: true },
  { id: 'sk-5', name: 'Chicken Pakora', category: 'Snacks & Rolls', price: 270, isVeg: false },
  { id: 'sk-6', name: 'Paneer Pakora', category: 'Snacks & Rolls', price: 220, isVeg: true },
  { id: 'sk-7', name: 'Onion Pakora', category: 'Snacks & Rolls', price: 130, isVeg: true },
  { id: 'sk-8', name: 'French Fries', category: 'Snacks & Rolls', price: 160, isVeg: true },

  // ================= BREAKFAST & BEVERAGES =================
  { id: 'br-1', name: 'Aloo Paratha with Curd', category: 'Breakfast & Beverages', price: 120, isVeg: true, tag: 'Morning Essential' },
  { id: 'br-2', name: 'Chole Bhature', category: 'Breakfast & Beverages', price: 120, isVeg: true, tag: 'Breakfast Hit' },
  { id: 'br-3', name: 'Puri Sabji', category: 'Breakfast & Beverages', price: 90, isVeg: true },
  { id: 'br-4', name: 'Paneer Paratha with Curd', category: 'Breakfast & Beverages', price: 130, isVeg: true },
  { id: 'br-5', name: 'Special Milk Tea', category: 'Breakfast & Beverages', price: 30, isVeg: true },
  { id: 'br-6', name: 'Masala Tea', category: 'Breakfast & Beverages', price: 40, isVeg: true },
  { id: 'br-7', name: 'Sweet Lassi', category: 'Breakfast & Beverages', price: 100, isVeg: true, tag: 'Chilled & Fresh' },
  { id: 'br-8', name: 'Cold Coffee', category: 'Breakfast & Beverages', price: 80, isVeg: true },
  { id: 'br-9', name: 'Fresh Lemon Soda', category: 'Breakfast & Beverages', price: 100, isVeg: true }
];

// 100% REAL RESTAURANT PHOTOGRAPHY ONLY (ZERO AI-GENERATED DISH PHOTOS)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-real-billboard',
    title: 'Official NH-31 Highway Billboard',
    category: 'Restaurant Exterior',
    image: '/assets/aistudio/unnamed__5__61968f81.jpg',
    caption: 'The landmark red signboard of New Highway Chef Dhaba along Rangia Highway, NH-31 with contact numbers 8472094950 / 7062383016.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-dining-hall',
    title: 'Packed Family Indoor Dining Hall',
    category: 'Dining Halls',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM_d59002d0.jpeg',
    caption: 'Bustling atmosphere inside our spacious family hall with bamboo tables, scenic wall murals, and highway travelers enjoying hearty meals.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-kids-swing',
    title: 'Kids Outdoor Playground & Swings',
    category: 'Kids Playground',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM__1__df40220a.jpeg',
    caption: 'Safe, fun outdoor play area with swings where children play while families relax in the adjacent illuminated huts.',
    aspect: 'tall',
    isRealPhoto: true
  },
  {
    id: 'g-real-night-play',
    title: 'Evening Play Area with Slide & Swings',
    category: 'Kids Playground',
    image: '/assets/aistudio/unnamed__6__d17fa9e5.jpg',
    caption: 'Festive night courtyard featuring swings, slides, illuminated wrapped trees, and open-air gazebo seating.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-night-entrance',
    title: 'Illuminated Highway Entrance at Night',
    category: 'Restaurant Exterior',
    image: '/assets/aistudio/unnamed_98627df7.jpg',
    caption: 'Glowing red entrance and neon parking area welcoming nighttime highway travelers and commuters to Rangia.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-machan',
    title: 'Two-Story Bamboo Machan Hut',
    category: 'Cabins & Machan',
    image: '/assets/aistudio/unnamed__2__57eaae68.jpg',
    caption: 'Iconic two-tier traditional bamboo treehouse gazebo surrounded by evergreen pine trees for elevated dining.',
    aspect: 'tall',
    isRealPhoto: true
  },
  {
    id: 'g-real-thatched-courtyard',
    title: 'Thatched Cabins & Green Courtyard',
    category: 'Cabins & Machan',
    image: '/assets/aistudio/unnamed__1__39c05000.jpg',
    caption: 'Breezy open-air thatched dining cottages with bamboo lattice work and lush palm trees for a scenic roadside lunch.',
    aspect: 'oval',
    isRealPhoto: true
  },
  {
    id: 'g-real-garden-walkway',
    title: 'Garden Walkway & Cottage Cabins',
    category: 'Cabins & Machan',
    image: '/assets/aistudio/unnamed__8__f12eb660.jpg',
    caption: 'Manicured stone pathway bordered by flowering plants leading to private green cottage dining suites.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-amul-cabin',
    title: 'Pagoda Hut & Ice Cream Pavilion',
    category: 'Cabins & Machan',
    image: '/assets/aistudio/unnamed__7__e31c5c97.jpg',
    caption: 'Traditional pagoda hut with ice cream counter and shaded courtyard seating under towering pines.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-fairy-lights',
    title: 'Night Garden Dining with Fairy Lights',
    category: 'Restaurant Exterior',
    image: '/assets/aistudio/unnamed__4__eaedc5d6.jpg',
    caption: 'Romantic night dining setup with glowing fairy lights along the bamboo counter and outdoor umbrellas under the starry sky.',
    aspect: 'wide',
    isRealPhoto: true
  },
  {
    id: 'g-real-bamboo-interior',
    title: 'Traditional Bamboo Weave Dining Room',
    category: 'Dining Halls',
    image: '/assets/aistudio/unnamed__3__efa49378.jpg',
    caption: 'Authentic handwoven bamboo wall panels, colourful floral tablecloths, and traditional Assamese artwork.',
    aspect: 'oval',
    isRealPhoto: true
  }
];
