export const productPage = {
    filterButton: "FILTER",
    filterTitle: "Filters",
    resetButton: "RESET",
    applyButton: "APPLY",
    category: "Category",
    productType: "Product Type",
    industries: "Industries",
    manufacturing: "Manufacturing",
    clearAll: "CLEAR ALL",
    viewCollection: "View Collection",
    requestQuote: "Request Quote",
    noProducts: "No products found.",
};

export const categorieFilters = [
    {
        label: "Towels",
        value: "towels",
    },
    {
        label: "Bedsheets",
        value: "bedsheets",
    },
    {
        label: "Bathrobes",
        value: "bathrobes",
    },
    {
        label: "Blankets",
        value: "blankets",
    },
];

export const manufacturingOptions = [
    {
        label: "Private Label",
        value: "private-label",
    },
    {
        label: "Custom Branding",
        value: "custom-branding",
    },
];

export const productFilters = {
    towels: {
        productTypes: [
            { label: "Hotel Towels", value: "hotel-towels" },
            { label: "Spa Towels", value: "spa-towels" },
            { label: "Resort Towels", value: "resort-towels" },
            { label: "Pool Towels", value: "pool-towels" },
            { label: "Gym Towels", value: "gym-towels" },
            { label: "Hand Towels", value: "hand-towels" },
            { label: "Face Towels", value: "face-towels" },
            { label: "Bathrobes", value: "bathrobes" },
            { label: "Bath Towels", value: "bath-towels" },
            { label: "Beach Towels", value: "beach-towels" },
            { label: "Kitchen Towels", value: "kitchen-towels" },
            { label: "Tea Towels", value: "tea-towels" },
            { label: "Baby Towels", value: "baby-towels" },
            { label: "Microfiber Towels", value: "microfiber-towels" },
        ],

        industries: [
            { label: "Hotels", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Spa", value: "spa" },
            { label: "Hospitals", value: "hospitals" },
        ],
    },

    bedsheets: {
        productTypes: [
            { label: "Flat Bedsheets", value: "flat-bedsheets" },
            { label: "Fitted Bedsheets", value: "fitted-bedsheets" },
            { label: "Luxury Bedsheets", value: "luxury-bedsheets" },
        ],

        industries: [
            { label: "Hotels", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Hospitals", value: "hospitals" },
        ],
    },
};

export const productIntro = {
    section: {
        tag: "TEXTILE COLLECTIONS",
        title: "Browse Hospitality Collections",
        description:
            "Explore premium hospitality textiles crafted for hotels, resorts, spas, and global hospitality brands.",
    },
    cards: [
        { value: "8", label: "PRODUCT CATEGORIES", },
        { value: "Custom", label: "PRIVATE LABEL MANUFACTURING", },
        { value: "OEKO-TEX", label: "CERTIFIED PRODUCTION", },
        { value: "Global", label: "EXPORT CAPABILITIES", },
    ],
};

export const products = [
  {
    slug: "hotel-towels",
    label: "HOTEL TOWELS",
    title: "Hotel Towels",
    description:
      "Premium Egyptian cotton towels crafted for five-star hotels, offering exceptional softness and superior absorbency.",
    tags: [
      "Egyptian Cotton",
      "600 GSM",
      "Hotel Grade",
      "Bulk Orders",
    ],
  },
  {
    slug: "spa-towels",
    label: "SPA TOWELS",
    title: "Spa Towels",
    description:
      "Indulgent spa-grade towels designed for luxury wellness facilities, featuring extra plush construction.",
    tags: [
      "Long-Staple Cotton",
      "550 GSM",
      "High Absorbency",
      "Spa Grade",
    ],
  },
  {
    slug: "resort-towels",
    label: "RESORT TOWELS",
    title: "Resort Towels",
    description:
      "Thoughtfully curated collection designed for boutique resorts, balancing refined aesthetics with performance.",
    tags: [
      "Egyptian Cotton",
      "600 GSM",
      "Resort Grade",
      "Export Quality",
    ],
  },
  {
    slug: "pool-towels",
    label: "POOL TOWELS",
    title: "Pool Towels",
    description:
      "Resort-quality pool towels engineered for outdoor hospitality use, combining quick-drying performance with luxurious feel.",
    tags: [
      "650 GSM",
      "High Absorbency",
      "Quick Dry",
      "Bulk Orders",
    ],
  },
  {
    slug: "gym-towels",
    label: "GYM TOWELS",
    title: "Gym Towels",
    description:
      "Compact performance towels crafted for fitness facilities, featuring quick-dry technology and commercial durability.",
    tags: [
      "400 GSM",
      "Quick Dry",
      "Fitness Grade",
      "Export Quality",
    ],
  },
  {
    slug: "bathrobes",
    label: "BATHROBES",
    title: "Bathrobes",
    description:
      "Elegant terry cloth bathrobes that embody comfort and sophistication, perfect for upscale hotels and premium spa environments.",
    tags: [
      "Waffle Weave",
      "Premium Cotton",
      "Luxury Finish",
      "Hospitality Grade",
    ],
  },
  {
    slug: "hand-towels",
    label: "HAND TOWELS",
    title: "Hand Towels",
    description:
      "Elegant hospitality hand towels with pristine white finish and exceptional softness for guest bathrooms.",
    tags: [
      "500 GSM",
      "Egyptian Cotton",
      "Hotel Grade",
      "Export Quality",
    ],
  },
  {
    slug: "face-towels",
    label: "FACE TOWELS",
    title: "Face Towels",
    description:
      "Luxuriously soft face towels designed for premium hospitality and wellness facilities worldwide.",
    tags: [
      "400 GSM",
      "Luxury Finish",
      "Egyptian Cotton",
      "Bulk Orders",
    ],
  },
  {
    slug: "bath-towels",
    label: "BATH TOWELS",
    title: "Bath Towels",
    description:
      "Premium bath towels crafted for luxury hospitality environments, offering exceptional softness, absorbency, and guest comfort.",
    tags: [
      "650 GSM",
      "Egyptian Cotton",
      "Hotel Grade",
      "Bulk Orders",
    ],
  },
  {
    slug: "beach-towels",
    label: "BEACH TOWELS",
    title: "Beach Towels",
    description:
      "Vibrant and durable beach towels designed for resorts, beachfront properties, and outdoor hospitality experiences.",
    tags: [
      "Resort Quality",
      "Fast Drying",
      "Fade Resistant",
      "Export Quality",
    ],
  },
  {
    slug: "kitchen-towels",
    label: "KITCHEN TOWELS",
    title: "Kitchen Towels",
    description:
      "Professional kitchen towels engineered for commercial hospitality operations, delivering superior absorbency and long-lasting performance.",
    tags: [
      "Durable Weave",
      "High Absorbency",
      "Commercial Grade",
      "Bulk Supply",
    ],
  },
  {
    slug: "tea-towels",
    label: "TEA TOWELS",
    title: "Tea Towels",
    description:
      "Elegant tea towels designed for hospitality kitchens, cafés, and premium dining establishments with a refined finish.",
    tags: [
      "Lint Free",
      "Cotton Blend",
      "Restaurant Grade",
      "Custom Branding",
    ],
  },
  {
    slug: "baby-towels",
    label: "BABY TOWELS",
    title: "Baby Towels",
    description:
      "Ultra-soft baby towels manufactured with gentle, skin-friendly fabrics suitable for childcare, healthcare, and retail collections.",
    tags: [
      "Soft Touch",
      "Hypoallergenic",
      "Premium Cotton",
      "Retail Ready",
    ],
  },
  {
    slug: "microfiber-towels",
    label: "MICROFIBER TOWELS",
    title: "Microfiber Towels",
    description:
      "High-performance microfiber towels offering rapid drying, excellent cleaning efficiency, and versatile commercial applications.",
    tags: [
      "Quick Dry",
      "Lightweight",
      "Multi-Purpose",
      "High Durability",
    ],
  },
];