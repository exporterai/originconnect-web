export const productPage = {
    filterButton: "FILTER",
    filterTitle: "Filter",
    resetButton: "ZURÜCKSETZEN",
    applyButton: "ANWENDEN",
    category: "Kategorie",
    productType: "Produkttyp",
    industries: "Branchen",
    manufacturing: "Fertigung",
    clearAll: "ALLE ZURÜCKSETZEN",
    viewCollection: "Kollektion ansehen",
    requestQuote: "Angebot anfordern",
    noProducts: "Keine Produkte gefunden.",
};

export const categorieFilters = [
    {
        label: "Handtücher",
        value: "towels",
    },
    {
        label: "Bettwäsche",
        value: "bedsheets",
    },
    {
        label: "Bademäntel",
        value: "bathrobes",
    },
    {
        label: "Decken",
        value: "blankets",
    },
];

export const manufacturingOptions = [
    {
        label: "Private Label",
        value: "private-label"
    },
    {
        label: "Individuelles Branding",
        value: "custom-branding"
    },
]

export const productFilters = {
    towels: {
        productTypes: [
            { label: "Hotelhandtücher", value: "hotel-towels" },
            { label: "Spa-Handtücher", value: "spa-towels" },
            { label: "Resort-Handtücher", value: "resort-towels" },
            { label: "Poolhandtücher", value: "pool-towels" },
            { label: "Fitnesshandtücher", value: "gym-towels" },
            { label: "Handtücher", value: "hand-towels" },
            { label: "Gesichtshandtücher", value: "face-towels" },
            { label: "Bademäntel", value: "bathrobes" },
            { label: "Badetücher", value: "bath-towels" },
            { label: "Strandhandtücher", value: "beach-towels" },
            { label: "Küchenhandtücher", value: "kitchen-towels" },
            { label: "Geschirrtücher", value: "tea-towels" },
            { label: "Babyhandtücher", value: "baby-towels" },
            { label: "Mikrofaserhandtücher", value: "microfiber-towels" }
        ],

        industries: [
            { label: "Hotels", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Spas", value: "spa" },
            { label: "Krankenhäuser", value: "hospitals" }
        ]
    },

    bedsheets: {
        productTypes: [
            { label: "Flache Bettwäsche", value: "flat-bedsheets" },
            { label: "Spannbettlaken", value: "fitted-bedsheets" },
            { label: "Luxusbettwäsche", value: "luxury-bedsheets" }
        ],

        industries: [
            { label: "Hotels", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Krankenhäuser", value: "hospitals" }
        ]
    }
};

export const productIntro = {
    section: {
        tag: "TEXTILKOLLEKTIONEN",
        title: "Entdecken Sie unsere Hospitality-Kollektionen",
        description: "Entdecken Sie hochwertige Hospitality-Textilien für Hotels, Resorts, Spas und internationale Hotelmarken."
    },
    cards: [
        { value: "8", label: "PRODUKTKATEGORIEN", },
        { value: "Individuell", label: "PRIVATE-LABEL-FERTIGUNG", },
        { value: "OEKO-TEX", label: "ZERTIFIZIERTE PRODUKTION", },
        { value: "Global", label: "EXPORTKOMPETENZ", },
    ]
};

export const products = [
  {
    slug: "hotel-towels",
    label: "HOTELHANDTÜCHER",
    title: "Hotelhandtücher",
    description:
      "Luxuriöse Hotelhandtücher aus hochwertiger ägyptischer Baumwolle, entwickelt für die Ansprüche der Fünf-Sterne-Hotellerie. Sie bieten außergewöhnliche Weichheit, hervorragende Saugfähigkeit und langanhaltende Qualität.",
    tags: [
      "Ägyptische Baumwolle",
      "600 GSM",
      "Hotelqualität",
      "Großbestellungen"
    ]
  },

  {
    slug: "spa-towels",
    label: "SPA-HANDTÜCHER",
    title: "Spa-Handtücher",
    description:
      "Exklusive Spa-Handtücher mit besonders weicher und voluminöser Qualität – entwickelt für luxuriöse Wellnessbereiche und anspruchsvolle Spa-Einrichtungen.",
    tags: [
      "Langstapelige Baumwolle",
      "550 GSM",
      "Hohe Saugfähigkeit",
      "Spa-Qualität"
    ]
  },

  {
    slug: "resort-towels",
    label: "RESORT-HANDTÜCHER",
    title: "Resort-Handtücher",
    description:
      "Eine sorgfältig entwickelte Kollektion für exklusive Resorts, die elegantes Design mit hoher Strapazierfähigkeit und Komfort verbindet.",
    tags: [
      "Ägyptische Baumwolle",
      "600 GSM",
      "Resortqualität",
      "Exportqualität"
    ]
  },

  {
    slug: "pool-towels",
    label: "POOLHANDTÜCHER",
    title: "Poolhandtücher",
    description:
      "Poolhandtücher in Resortqualität mit schneller Trocknung, hoher Saugfähigkeit und luxuriösem Komfort – ideal für Pools, Spas und Strandresorts.",
    tags: [
      "650 GSM",
      "Hohe Saugfähigkeit",
      "Schnelltrocknend",
      "Großbestellungen"
    ]
  },

  {
    slug: "gym-towels",
    label: "FITNESSHANDTÜCHER",
    title: "Fitnesshandtücher",
    description:
      "Leistungsstarke Fitnesshandtücher mit schneller Trocknung und hoher Strapazierfähigkeit – ideal für Fitnessstudios, Hotels und Wellnessbereiche.",
    tags: [
      "400 GSM",
      "Schnelltrocknend",
      "Fitnessqualität",
      "Exportqualität"
    ]
  },

  {
    slug: "bathrobes",
    label: "BADEMÄNTEL",
    title: "Bademäntel",
    description:
      "Elegante Bademäntel aus hochwertigem Baumwollfrottier, die Komfort, Stil und Langlebigkeit vereinen – ideal für Luxushotels und exklusive Spa-Bereiche.",
    tags: [
      "Waffelstruktur",
      "Premium-Baumwolle",
      "Luxuriöse Verarbeitung",
      "Hotelqualität"
    ]
  },

  {
    slug: "hand-towels",
    label: "HANDTÜCHER",
    title: "Handtücher",
    description:
      "Elegante Handtücher für die Hotellerie mit außergewöhnlicher Weichheit, hochwertiger Verarbeitung und einem zeitlosen Design für Gästebäder.",
    tags: [
      "500 GSM",
      "Ägyptische Baumwolle",
      "Hotelqualität",
      "Exportqualität"
    ]
  },
    {
    slug: "face-towels",
    label: "GESICHTSHANDTÜCHER",
    title: "Gesichtshandtücher",
    description:
      "Besonders weiche Gesichtshandtücher für gehobene Hotels, Spas und Wellnessbereiche. Sanft zur Haut und entwickelt für höchsten Gästekomfort.",
    tags: [
      "400 GSM",
      "Luxuriöse Verarbeitung",
      "Ägyptische Baumwolle",
      "Großbestellungen"
    ]
  },

  {
    slug: "bath-towels",
    label: "BADETÜCHER",
    title: "Badetücher",
    description:
      "Luxuriöse Badetücher für anspruchsvolle Hotel- und Spa-Bereiche mit außergewöhnlicher Weichheit, hoher Saugfähigkeit und langlebiger Qualität.",
    tags: [
      "650 GSM",
      "Ägyptische Baumwolle",
      "Hotelqualität",
      "Großbestellungen"
    ]
  },

  {
    slug: "beach-towels",
    label: "STRANDHANDTÜCHER",
    title: "Strandhandtücher",
    description:
      "Strapazierfähige und stilvolle Strandhandtücher für Resorts, Strandhotels und exklusive Freizeitbereiche – entwickelt für intensive Nutzung und langanhaltende Farbbrillanz.",
    tags: [
      "Resortqualität",
      "Schnelltrocknend",
      "Farbecht",
      "Exportqualität"
    ]
  },

  {
    slug: "kitchen-towels",
    label: "KÜCHENHANDTÜCHER",
    title: "Küchenhandtücher",
    description:
      "Professionelle Küchenhandtücher für Hotels, Restaurants und Großküchen mit hoher Saugfähigkeit, robuster Verarbeitung und langer Lebensdauer.",
    tags: [
      "Strapazierfähiges Gewebe",
      "Hohe Saugfähigkeit",
      "Gewerbequalität",
      "Großlieferung"
    ]
  },

  {
    slug: "tea-towels",
    label: "GESCHIRRTÜCHER",
    title: "Geschirrtücher",
    description:
      "Hochwertige Geschirrtücher für Hotelküchen, Cafés und gehobene Gastronomiebetriebe mit eleganter Verarbeitung und hervorragender Funktionalität.",
    tags: [
      "Fusselfrei",
      "Baumwollmischung",
      "Restaurantqualität",
      "Individuelles Branding"
    ]
  },

  {
    id: 13,
    slug: "baby-towels",
    label: "BABYHANDTÜCHER",
    title: "Babyhandtücher",
    description:
      "Extra weiche Babyhandtücher aus hautfreundlichen Materialien – ideal für Babypflege, Gesundheitswesen und hochwertige Einzelhandelskollektionen.",
    tags: [
      "Besonders weich",
      "Hypoallergen",
      "Premium-Baumwolle",
      "Verkaufsfertig"
    ]
  },

  {
    slug: "microfiber-towels",
    label: "MIKROFASERHANDTÜCHER",
    title: "Mikrofaserhandtücher",
    description:
      "Leistungsstarke Mikrofaserhandtücher mit schneller Trocknung, hervorragender Reinigungsleistung und vielseitigen Einsatzmöglichkeiten für professionelle Anwendungen.",
    tags: [
      "Schnelltrocknend",
      "Leichtgewicht",
      "Vielseitig einsetzbar",
      "Hohe Strapazierfähigkeit"
    ]
  }
];