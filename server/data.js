// High-quality product catalog for Servis Bags.
// Realistic school bags and backpacks data with real specifications and high-res imagery.

export let products = [
  {
    id: "SB-001",
    title: "Servis ACE Spine-Guard Ergonomic Backpack",
    sku: "ACE-SPG-NAVY",
    category: "ergonomic",
    brand: "Servis ACE",
    originalPrice: 4499,
    discountedPrice: 3399,
    discountPercent: 24,
    badge: "Bestseller",
    inStock: true,
    isNew: true,
    isFeatured: true,
    color: "Navy Blue",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 48,
    description: "Engineered specifically to alleviate back strain for school and college students. Features our certified S-curve lumbar support system, breathable 3D air-mesh back panel, and multi-tier organizational pockets.",
    features: [
      "Certified Orthopedic Spine-Guard back support",
      "Padded 15.6-inch laptop & tablet sleeve",
      "Reinforced water-resistant 900D Oxford nylon",
      "Dual heavy-duty SBS smooth glide zippers",
      "360-degree reflective safety bands for low-light visibility"
    ],
    specs: {
      capacity: "30 Litres",
      dimensions: "46 x 32 x 20 cm",
      weight: "680 grams",
      material: "900D Water-Repellent Oxford Nylon",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Tariq Mahmood", rating: 5, date: "1 week ago", comment: "Best school bag I've bought for my 7th grader. The weight distribution is noticeable and shoulder padding is very comfortable." },
      { id: 2, author: "Sadia Khan", rating: 5, date: "3 weeks ago", comment: "Spacious enough for all heavy books plus a lunch box and water bottle. High quality zippers." }
    ]
  },
  {
    id: "SB-002",
    title: "Servis Youth Explorer High School Backpack",
    sku: "YTH-EXP-BLK",
    category: "youth",
    brand: "Servis Youth",
    originalPrice: 3999,
    discountedPrice: 2999,
    discountPercent: 25,
    badge: "Popular",
    inStock: true,
    isNew: false,
    isFeatured: true,
    color: "Stealth Black",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 39,
    description: "Sleek, minimalist aesthetic packed with high-capacity utility. Built for senior high schoolers and college students who carry books, gadgets, stationery, and sports gear.",
    features: [
      "3 main zippered compartments with 7 interior organizer pockets",
      "Anti-scratch padded tech compartment",
      "Hidden anti-theft rear pocket for wallet or smartphone",
      "Dual reinforced elastic mesh bottle holders",
      "Abrasion-resistant base with shock absorption layer"
    ],
    specs: {
      capacity: "28 Litres",
      dimensions: "45 x 30 x 18 cm",
      weight: "610 grams",
      material: "High-Density Melange Polyester",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Hamza Rehman", rating: 5, date: "5 days ago", comment: "Looks super premium in jet black. Fits my 15-inch laptop and 6 heavy textbooks easily." },
      { id: 2, author: "Bilal Ahmed", rating: 4, date: "2 weeks ago", comment: "Durable straps and very comfortable even when walking for long distances." }
    ]
  },
  {
    id: "SB-003",
    title: "Servis Junior Butterfly Dreams Primary Bag",
    sku: "JNR-BTF-PNK",
    category: "primary",
    brand: "Servis Kids",
    originalPrice: 3499,
    discountedPrice: 2599,
    discountPercent: 26,
    badge: "New",
    inStock: true,
    isNew: true,
    isFeatured: true,
    color: "Rose Pink / Multi",
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 31,
    description: "Charming butterfly print combined with lightweight, kid-safe materials. Features easy-grab zip pullers, dual front utility pouches, and extra-cushioned shoulder straps designed for young children.",
    features: [
      "Lightweight Feather-Lite construction (only 450g)",
      "Vibrant non-toxic fade-resistant digital print",
      "Chest clip harness prevents shoulder straps from slipping",
      "Waterproof easy-wipe inner lining for unexpected spills",
      "Personalized child name tag badge window"
    ],
    specs: {
      capacity: "20 Litres",
      dimensions: "39 x 28 x 15 cm",
      weight: "450 grams",
      material: "Water-Resistant 600D Twill Fabric",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Fatima Noor", rating: 5, date: "4 days ago", comment: "My 6-year-old daughter loves this bag! Lightweight and cute colors." },
      { id: 2, author: "Zainab Ali", rating: 5, date: "1 month ago", comment: "Print quality is sharp and colors don't wash off easily." }
    ]
  },
  {
    id: "SB-004",
    title: "Servis Galactic Robot Print Kids Bag",
    sku: "JNR-RBT-BLU",
    category: "printed",
    brand: "Servis Kids",
    originalPrice: 3499,
    discountedPrice: 2649,
    discountPercent: 24,
    badge: "New",
    inStock: true,
    isNew: true,
    isFeatured: true,
    color: "Electric Blue Multi",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 22,
    description: "Vibrant sci-fi robot graphics with glowing reflective accents. Tough and adventure-proof with high-tensile stitching around load points to handle energetic school days.",
    features: [
      "Reinforced corner guards for rough handling",
      "Easy-clean wipeable surface resistant to dirt and rain",
      "Ergonomic curved straps with soft edge piping",
      "Integrated key clip and pencil case loop",
      "Extra wide bottle pockets fitting 750ml flasks"
    ],
    specs: {
      capacity: "22 Litres",
      dimensions: "40 x 29 x 16 cm",
      weight: "480 grams",
      material: "600D Heavy-Duty Polyester",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Kamran Shah", rating: 5, date: "1 week ago", comment: "My son was thrilled! Heavy stitching and very sturdy handle on top." }
    ]
  },
  {
    id: "SB-005",
    title: "Servis Classic Scholar Canvas Backpack",
    sku: "SCH-CLS-YEL",
    category: "youth",
    brand: "Servis Youth",
    originalPrice: 3899,
    discountedPrice: 2799,
    discountPercent: 28,
    badge: "Trending",
    inStock: true,
    isNew: false,
    isFeatured: false,
    color: "Mustard Gold",
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 27,
    description: "Timeless campus backpack featuring vintage aesthetics with modern durability. Water-shield coated canvas, brass-finish pullers, and dedicated tech compartment.",
    features: [
      "Wax-coated water-shield heavy canvas",
      "Fleece-lined sunglasses & smartphone pouch",
      "Dedicated padded compartment for 14-inch laptops",
      "Genuine leather zip pull tabs",
      "Padded base with protective rubber feet"
    ],
    specs: {
      capacity: "24 Litres",
      dimensions: "42 x 30 x 15 cm",
      weight: "580 grams",
      material: "Heavy-Duty Coated Canvas",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Usman Raza", rating: 5, date: "2 weeks ago", comment: "The mustard shade is very classy. High quality material that holds its shape." }
    ]
  },
  {
    id: "SB-006",
    title: "Servis Pastel Chic Aesthetic Daypack",
    sku: "YTH-PST-PNK",
    category: "primary",
    brand: "Servis ACE",
    originalPrice: 3699,
    discountedPrice: 2899,
    discountPercent: 22,
    badge: "Popular",
    inStock: true,
    isNew: true,
    isFeatured: true,
    color: "Blush Pink",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 43,
    description: "Soft pastel tones paired with functional compartments. Perfect for middle and high school students who want a lightweight, stylish bag for textbooks, art supplies, and accessories.",
    features: [
      "Pastel matte finish with dirt-repellent coating",
      "Quick-access front zippered organizer",
      "Dual elastic water bottle sleeves",
      "Ergonomic soft breathable back padding",
      "Lightweight design weighing under 500g"
    ],
    specs: {
      capacity: "25 Litres",
      dimensions: "43 x 30 x 16 cm",
      weight: "490 grams",
      material: "Premium Lightweight Polyester",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Mehak Javed", rating: 5, date: "3 days ago", comment: "So aesthetic and comfortable! Carries all my notebooks easily." }
    ]
  },
  {
    id: "SB-007",
    title: "Servis Urban Pro Commuter Backpack",
    sku: "URB-PRO-GRY",
    category: "youth",
    brand: "Servis ACE",
    originalPrice: 4799,
    discountedPrice: 3599,
    discountPercent: 25,
    badge: "Bestseller",
    inStock: true,
    isNew: false,
    isFeatured: true,
    color: "Heather Grey",
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 52,
    description: "Professional grade build with structured silhouette that stays upright when set on desks or floors. Equipped with smart cable pass-through and TSA-friendly lay-flat design.",
    features: [
      "180-degree lay-flat tech compartment for easy inspection",
      "Waterproof PU base protects against damp ground",
      "Luggage strap on back for securing to trolley handles",
      "Hidden RFID blocking pocket for cards and student IDs",
      "Breathable honeycomb ventilated shoulder straps"
    ],
    specs: {
      capacity: "32 Litres",
      dimensions: "48 x 33 x 20 cm",
      weight: "720 grams",
      material: "Waterproof Heathered Poly-Twist",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Zeeshan Qureshi", rating: 5, date: "1 week ago", comment: "The build quality is on par with international brands. Excellent padding." }
    ]
  },
  {
    id: "SB-008",
    title: "Servis Active Sport Dual-Tone Backpack",
    sku: "ACT-SPT-RED",
    category: "ergonomic",
    brand: "Servis Youth",
    originalPrice: 3799,
    discountedPrice: 2849,
    discountPercent: 25,
    badge: null,
    inStock: true,
    isNew: false,
    isFeatured: false,
    color: "Crimson Red / Black",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewsCount: 18,
    description: "Dynamic sporty aesthetics tailored for energetic school students who transition directly from study periods to football, basketball, and after-school clubs.",
    features: [
      "Vented bottom compartment for sports shoes or lunch box",
      "Moisture-wicking mesh back panel",
      "Reflective piping for dusk and evening safety",
      "High-tensile bar-tack stitching at all stress joints",
      "Compression side straps to stabilize heavy loads"
    ],
    specs: {
      capacity: "27 Litres",
      dimensions: "45 x 31 x 17 cm",
      weight: "590 grams",
      material: "Dobby Ripstop Nylon",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Adnan Malik", rating: 5, date: "3 weeks ago", comment: "Great bag for both school and cricket kit. Sturdy zippers." }
    ]
  },
  {
    id: "SB-009",
    title: "Servis Primary Junior Adventure Pack",
    sku: "JNR-ADV-BLU",
    category: "primary",
    brand: "Servis Kids",
    originalPrice: 3199,
    discountedPrice: 2399,
    discountPercent: 25,
    badge: "Sold out",
    inStock: false,
    isNew: false,
    isFeatured: false,
    color: "Royal Blue / Green",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.5,
    reviewsCount: 15,
    description: "Compact, durable primary backpack sized for grades 1 to 4. Engineered to hold standard notebooks and folders without bending edges, featuring easy-slide oversized zippers.",
    features: [
      "Non-bend notebook protector compartment",
      "Soft padded top carrying handle",
      "Side mesh drink pouch with secure elastic rim",
      "Spill-proof bottom panel",
      "Reflective safety patches on shoulder straps"
    ],
    specs: {
      capacity: "18 Litres",
      dimensions: "38 x 27 x 14 cm",
      weight: "420 grams",
      material: "Heavy-Duty 600D Poly",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Noreen Aslam", rating: 4, date: "1 month ago", comment: "Very good bag for younger kids. Waiting for restock to order for my second son." }
    ]
  },
  {
    id: "SB-010",
    title: "Servis Monster Truck Dynamic Kids Pack",
    sku: "JNR-TRK-BLK",
    category: "printed",
    brand: "Servis Kids",
    originalPrice: 3299,
    discountedPrice: 2499,
    discountPercent: 24,
    badge: "Popular",
    inStock: true,
    isNew: true,
    isFeatured: false,
    color: "Charcoal Monster Print",
    image: "https://images.unsplash.com/photo-1577733975197-20072c4ce9d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577733975197-20072c4ce9d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewsCount: 20,
    description: "Bold 3D embossed monster truck motif that kids love. Tough shell front prevents crushing of school supplies, lunches, and art equipment.",
    features: [
      "Semi-rigid molded 3D embossed front panel",
      "Multi-divider internal book organizer",
      "Comfort-fit shoulder harness with chest buckle",
      "Dual thermal-insulated side bottle holders",
      "Water-resistant zips keep rain out"
    ],
    specs: {
      capacity: "22 Litres",
      dimensions: "40 x 29 x 16 cm",
      weight: "510 grams",
      material: "EVA Molded Shell + 600D Polyester",
      warranty: "1 Year Official Servis Guarantee"
    },
    reviews: [
      { id: 1, author: "Waseem Akram", rating: 5, date: "2 weeks ago", comment: "The 3D front design is very tough and looks amazing in person." }
    ]
  }
];

export let orders = [];
export let nextOrderId = 1001;

export function pushOrder(order) {
  orders.push(order);
  nextOrderId += 1;
  return order;
}
