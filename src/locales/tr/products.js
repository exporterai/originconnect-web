export const productPage = {
    filterButton: "FİLTRE",
    filterTitle: "Filtreler",
    resetButton: "SIFIRLA",
    applyButton: "UYGULA",
    category: "Kategori",
    productType: "Ürün Türü",
    industries: "Sektörler",
    manufacturing: "Üretim",
    clearAll: "TÜMÜNÜ TEMİZLE",
    viewCollection: "Koleksiyonu Gör",
    requestQuote: "Teklif İste",
    noProducts: "Ürün bulunamadı.",
};

export const categorieFilters = [
    {
        label: "Havlular",
        value: "towels",
    },
    {
        label: "Yatak Çarşafları",
        value: "bedsheets",
    },
    {
        label: "Bornozlar",
        value: "bathrobes",
    },
    {
        label: "Battaniyeler",
        value: "blankets",
    },
];

export const manufacturingOptions = [
    {
        label: "Özel Marka",
        value: "private-label",
    },
    {
        label: "Özel Markalama",
        value: "custom-branding",
    },
];

export const productFilters = {
    towels: {
        productTypes: [
            { label: "Otel Havluları", value: "hotel-towels" },
            { label: "Spa Havluları", value: "spa-towels" },
            { label: "Resort Havluları", value: "resort-towels" },
            { label: "Havuz Havluları", value: "pool-towels" },
            { label: "Spor Salonu Havluları", value: "gym-towels" },
            { label: "El Havluları", value: "hand-towels" },
            { label: "Yüz Havluları", value: "face-towels" },
            { label: "Bornozlar", value: "bathrobes" },
            { label: "Banyo Havluları", value: "bath-towels" },
            { label: "Plaj Havluları", value: "beach-towels" },
            { label: "Mutfak Havluları", value: "kitchen-towels" },
            { label: "Kurulama Havluları", value: "tea-towels" },
            { label: "Bebek Havluları", value: "baby-towels" },
            { label: "Mikrofiber Havlular", value: "microfiber-towels" },
        ],
        industries: [
            { label: "Oteller", value: "hotels" },
            { label: "Resortlar", value: "resorts" },
            { label: "Spa", value: "spa" },
            { label: "Hastaneler", value: "hospitals" },
        ],
    },
    bedsheets: {
        productTypes: [
            { label: "Düz Çarşaflar", value: "flat-bedsheets" },
            { label: "Lastikli Çarşaflar", value: "fitted-bedsheets" },
            { label: "Lüks Çarşaflar", value: "luxury-bedsheets" },
        ],
        industries: [
            { label: "Oteller", value: "hotels" },
            { label: "Resortlar", value: "resorts" },
            { label: "Hastaneler", value: "hospitals" },
        ],
    },
};

export const productIntro = {
    section: {
        tag: "TEKSTİL KOLEKSİYONLARI",
        title: "Konaklama Koleksiyonlarımızı Keşfedin",
        description:
            "Oteller, resortlar, spa merkezleri ve uluslararası konaklama markaları için üretilen premium tekstil koleksiyonlarını keşfedin.",
    },
    cards: [
        { value: "8", label: "ÜRÜN KATEGORİLERİ", },
        { value: "Özel", label: "ÖZEL MARKA ÜRETİMİ", },
        { value: "OEKO-TEX", label: "SERTİFİKALI ÜRETİM", },
        { value: "Küresel", label: "İHRACAT YETKİNLİĞİ", },
    ],
};

export const products = [
    {
        slug: "hotel-towels",
        label: "OTEL HAVLULARI",
        title: "Otel Havluları",
        description:
            "Beş yıldızlı otellerin yüksek standartları için üretilen premium Mısır pamuğu havlular. Olağanüstü yumuşaklık, üstün emicilik ve uzun süreli kullanım performansı sunar.",
        tags: [
            "Mısır Pamuğu",
            "600 GSM",
            "Otel Kalitesi",
            "Toplu Sipariş",
        ],
    },
    {
        slug: "spa-towels",
        label: "SPA HAVLULARI",
        title: "Spa Havluları",
        description:
            "Lüks spa ve wellness merkezleri için tasarlanmış, ekstra dolgun dokulu, son derece yumuşak ve konforlu premium spa havluları.",
        tags: [
            "Uzun Elyaflı Pamuk",
            "550 GSM",
            "Yüksek Emicilik",
            "Spa Kalitesi",
        ],
    },
    {
        slug: "resort-towels",
        label: "RESORT HAVLULARI",
        title: "Resort Havluları",
        description:
            "Butik resortlar için özenle hazırlanmış özel havlu koleksiyonu. Zarif tasarımı yüksek performans ve dayanıklılıkla bir araya getirir.",
        tags: [
            "Mısır Pamuğu",
            "600 GSM",
            "Resort Kalitesi",
            "İhracat Kalitesi",
        ],
    },
    {
        slug: "pool-towels",
        label: "HAVUZ HAVLULARI",
        title: "Havuz Havluları",
        description:
            "Açık hava konaklama alanları için tasarlanmış resort kalitesinde havuz havluları. Hızlı kuruma performansını lüks bir dokunuş ve yüksek emicilikle birleştirir.",
        tags: [
            "650 GSM",
            "Yüksek Emicilik",
            "Hızlı Kuruma",
            "Toplu Sipariş",
        ],
    },
    {
        slug: "gym-towels",
        label: "SPOR SALONU HAVLULARI",
        title: "Spor Salonu Havluları",
        description:
            "Spor salonları ve profesyonel kullanım için tasarlanmış kompakt performans havluları. Hızlı kuruma teknolojisi ve ticari kullanıma uygun yüksek dayanıklılık sunar.",
        tags: [
            "400 GSM",
            "Hızlı Kuruma",
            "Fitness Kalitesi",
            "İhracat Kalitesi",
        ],
    },
    {
        slug: "bathrobes",
        label: "BORNOZLAR",
        title: "Bornozlar",
        description:
            "Lüks oteller ve premium spa merkezleri için tasarlanmış, konfor ve şıklığı bir araya getiren kaliteli pamuklu bornozlar.",
        tags: [
            "Waffle Dokuma",
            "Premium Pamuk",
            "Lüks İşçilik",
            "Otel Kalitesi",
        ],
    },
    {
        slug: "hand-towels",
        label: "EL HAVLULARI",
        title: "El Havluları",
        description:
            "Misafir banyoları için tasarlanmış, kusursuz beyaz görünüme sahip, olağanüstü yumuşaklık sunan yüksek kaliteli otel el havluları.",
        tags: [
            "500 GSM",
            "Mısır Pamuğu",
            "Otel Kalitesi",
            "İhracat Kalitesi",
        ],
    },
    {
        slug: "face-towels",
        label: "YÜZ HAVLULARI",
        title: "Yüz Havluları",
        description:
            "Premium oteller ve wellness merkezleri için tasarlanmış son derece yumuşak yüz havluları.",
        tags: [
            "400 GSM",
            "Lüks İşçilik",
            "Mısır Pamuğu",
            "Toplu Sipariş",
        ],
    },
    {
        slug: "bath-towels",
        label: "BANYO HAVLULARI",
        title: "Banyo Havluları",
        description:
            "Lüks konaklama tesisleri için tasarlanmış üstün yumuşaklık, emicilik ve konfor sunan premium banyo havluları.",
        tags: [
            "650 GSM",
            "Mısır Pamuğu",
            "Otel Kalitesi",
            "Toplu Sipariş",
        ],
    },
    {
        slug: "beach-towels",
        label: "PLAJ HAVLULARI",
        title: "Plaj Havluları",
        description:
            "Resortlar, sahil otelleri ve açık hava konaklama deneyimleri için tasarlanmış canlı renkli ve dayanıklı plaj havluları.",
        tags: [
            "Resort Kalitesi",
            "Hızlı Kuruma",
            "Solmaz Renkler",
            "İhracat Kalitesi",
        ],
    },
    {
        slug: "kitchen-towels",
        label: "MUTFAK HAVLULARI",
        title: "Mutfak Havluları",
        description:
            "Profesyonel otel mutfakları için geliştirilmiş, yüksek emicilik ve uzun ömürlü kullanım sağlayan mutfak havluları.",
        tags: [
            "Dayanıklı Dokuma",
            "Yüksek Emicilik",
            "Profesyonel Kalite",
            "Toplu Tedarik",
        ],
    },
    {
        slug: "tea-towels",
        label: "KURULAMA HAVLULARI",
        title: "Kurulama Havluları",
        description:
            "Otel mutfakları, kafeler ve restoranlar için zarif bir yüzey finisajına sahip, yüksek kaliteli kurulama havluları.",
        tags: [
            "Tüy Bırakmaz",
            "Pamuk Karışımı",
            "Restoran Kalitesi",
            "Özel Markalama",
        ],
    },
    {
        slug: "baby-towels",
        label: "BEBEK HAVLULARI",
        title: "Bebek Havluları",
        description:
            "Bebek bakımı, sağlık kuruluşları ve perakende koleksiyonları için cilt dostu kumaşlardan üretilmiş ultra yumuşak bebek havluları.",
        tags: [
            "Yumuşak Dokunuş",
            "Hipoalerjenik",
            "Premium Pamuk",
            "Perakendeye Hazır",
        ],
    },
    {
        slug: "microfiber-towels",
        label: "MİKROFİBER HAVLULAR",
        title: "Mikrofiber Havlular",
        description:
            "Hızlı kuruyan, üstün temizlik performansı ve yüksek verimlilik sunan, çok amaçlı profesyonel kullanıma uygun mikrofiber havlular.",
        tags: [
            "Hızlı Kuruma",
            "Hafif",
            "Çok Amaçlı",
            "Yüksek Dayanıklılık",
        ],
    },
];