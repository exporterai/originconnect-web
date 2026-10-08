export const productPage = {
    filterButton: "FILTRAR",
    filterTitle: "Filtros",
    resetButton: "REDEFINIR",
    applyButton: "APLICAR",
    category: "Categoria",
    productType: "Tipo de Produto",
    industries: "Setores",
    manufacturing: "Manufatura",
    clearAll: "LIMPAR TUDO",
    viewCollection: "Ver Coleção",
    requestQuote: "Solicitar Orçamento",
    noProducts: "Nenhum produto encontrado.",
};

export const categorieFilters = [
    {
        label: "Toalhas",
        value: "towels",
    },
    {
        label: "Lençóis e Roupas de Cama",
        value: "bedsheets",
    },
    {
        label: "Roupões de Banho",
        value: "bathrobes",
    },
    {
        label: "Cobertores e Mantas",
        value: "blankets",
    },
];

export const manufacturingOptions = [
    {
        label: "Marca Própria",
        value: "private-label",
    },
    {
        label: "Branding Personalizado",
        value: "custom-branding",
    },
];

export const productFilters = {
    towels: {
        productTypes: [
            { label: "Toalhas para Hotelaria", value: "hotel-towels" },
            { label: "Toalhas para Spa", value: "spa-towels" },
            { label: "Toalhas para Resort", value: "resort-towels" },
            { label: "Toalhas de Piscina", value: "pool-towels" },
            { label: "Toalhas para Academia", value: "gym-towels" },
            { label: "Toalhas de Mão", value: "hand-towels" },
            { label: "Toalhas de Rosto", value: "face-towels" },
            { label: "Roupões de Banho", value: "bathrobes" },
            { label: "Toalhas de Banho", value: "bath-towels" },
            { label: "Toalhas de Praia", value: "beach-towels" },
            { label: "Panos de Copa e Cozinha", value: "kitchen-towels" },
            { label: "Panos de Prato", value: "tea-towels" },
            { label: "Toalhas Infantis", value: "baby-towels" },
            { label: "Toalhas de Microfibra", value: "microfiber-towels" },
        ],

        industries: [
            { label: "Hotéis", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Spas", value: "spa" },
            { label: "Hospitais e Clínicas", value: "hospitals" },
        ],
    },

    bedsheets: {
        productTypes: [
            { label: "Lençóis Avulsos (Sem Elástico)", value: "flat-bedsheets" },
            { label: "Lençóis com Elástico", value: "fitted-bedsheets" },
            { label: "Roupas de Cama de Luxo", value: "luxury-bedsheets" },
        ],

        industries: [
            { label: "Hotéis", value: "hotels" },
            { label: "Resorts", value: "resorts" },
            { label: "Hospitais e Clínicas", value: "hospitals" },
        ],
    },
};

export const productIntro = {
    section: {
        tag: "COLEÇÕES TÊXTEIS",
        title: "Conheça Nossas Coleções Têxteis",
        description:
            "Explore têxteis premium desenvolvidos para hotéis, resorts, spas e grupos internacionais de hospitalidade.",
    },
    cards: [
        { value: "8", label: "CATEGORIAS DE PRODUTOS" },
        { value: "Personalizada", label: "FABRICAÇÃO PRIVATE LABEL" },
        { value: "OEKO-TEX", label: "PRODUÇÃO CERTIFICADA" },
        { value: "Global", label: "CAPACIDADE EXPORTADORA" },
    ],
};

export const products = [
    {
        slug: "hotel-towels",
        label: "TOALHAS PARA HOTELARIA",
        title: "Toalhas para Hotelaria",
        description:
            "Toalhas confeccionadas em Algodão Premium de alto padrão para a Roupões premium, combinando maciez excepcional, máxima absorção e durabilidade superior.",
        tags: [
            "Algodão Premium",
            "600 g/m²",
            "Padrão Hoteleiro",
            "Pedidos em Atacado",
        ],
    },
    {
        slug: "spa-towels",
        label: "TOALHAS PARA SPA",
        title: "Toalhas para Spa",
        description:
            "Toalhas exclusivas com toque macio e felpudo, projetadas sob medida para centros de bem-estar, spas e clínicas de estética de luxo.",
        tags: [
            "Algodão Fibras Longas",
            "550 g/m²",
            "Alta Absorção",
            "Padrão Spa",
        ],
    },
    {
        slug: "resort-towels",
        label: "TOALHAS PARA RESORT",
        title: "Toalhas para Resort",
        description:
            "Coleção sofisticada para resorts de lazer e hotéis boutique, unindo estética refinada, resistência a lavagens industriais e conforto térmico.",
        tags: [
            "Algodão Premium",
            "600 g/m²",
            "Padrão Resort",
            "Qualidade para Exportação",
        ],
    },
    {
        slug: "pool-towels",
        label: "TOALHAS DE PISCINA",
        title: "Toalhas de Piscina",
        description:
            "Toalhas de piscina em padrão resort desenvolvidas para áreas externas, combinando secagem rápida, alta absorção e toque agradável.",
        tags: [
            "650 g/m²",
            "Alta Absorção",
            "Secagem Rápida",
            "Pedidos em Atacado",
        ],
    },
    {
        slug: "gym-towels",
        label: "TOALHAS PARA ACADEMIA",
        title: "Toalhas para Academia",
        description:
            "Toalhas esportivas compactas e funcionais para academias e centros de condicionamento físico, com tecnologia de secagem rápida e alta durabilidade.",
        tags: [
            "400 g/m²",
            "Secagem Rápida",
            "Linha Fitness",
            "Qualidade para Exportação",
        ],
    },
    {
        slug: "bathrobes",
        label: "ROUPÕES DE BANHO",
        title: "Roupões de Banho",
        description:
            "Roupões atoalhados elegantes que unem estilo, aconchego e sofisticação, perfeitos para suítes de luxo e ambientes integrados de spa.",
        tags: [
            "Piquet / Ninho de Abelha",
            "Algodão Premium",
            "Acabamento de Luxo",
            "Padrão Hoteleiro",
        ],
    },
    {
        slug: "hand-towels",
        label: "TOALHAS DE MÃO E LAVABO",
        title: "TOALHAS DE MÃO E LAVABO",
        description:
            "Toalhas de lavabo elegantes com acabamento impecável e toque aveludado, projetadas para toaletes de hóspedes e recepções corporativas.",
        tags: [
            "500 g/m²",
            "Algodão Premium",
            "Padrão Hoteleiro",
            "Qualidade para Exportação",
        ],
    },
    {
        slug: "face-towels",
        label: "TOALHAS DE ROSTO",
        title: "Toalhas de Rosto",
        description:
            "Toalhas de rosto extremamente suaves e delicadas, desenvolvidas para redes hoteleiras de alto padrão e centros de relaxamento.",
        tags: [
            "400 g/m²",
            "Acabamento Nobre",
            "Algodão Premium",
            "Pedidos em Atacado",
        ],
    },
    {
        slug: "bath-towels",
        label: "TOALHAS DE BANHO",
        title: "Toalhas de Banho",
        description:
            "Toalhas de banho encorpadas para acomodações requintadas, garantindo maciez envolvente, secagem uniforme e alto poder de absorção.",
        tags: [
            "650 g/m²",
            "Algodão Premium",
            "Padrão Hoteleiro",
            "Pedidos em Atacado",
        ],
    },
    {
        slug: "beach-towels",
        label: "TOALHAS DE PRAIA",
        title: "Toalhas de Praia",
        description:
            "Toalhas de praia resistentes e com cores vivas para resorts à beira-mar e clubes, desenvolvidas para resistir ao sol e ao cloro sem desbotar.",
        tags: [
            "Padrão Resort",
            "Secagem Rápida",
            "Resistente ao Desbotamento",
            "Qualidade para Exportação",
        ],
    },
    {
        slug: "kitchen-towels",
        label: "PANOS DE COPA E COZINHA",
        title: "Panos de Copa e Cozinha",
        description:
            "Panos de copa industriais de alto desempenho para cozinhas profissionais, hotéis e restaurantes, com estrutura reforçada e alta absorção.",
        tags: [
            "Trama Reforçada",
            "Alta Absorção",
            "Uso Profissional",
            "Fornecimento em Atacado",
        ],
    },
    {
        slug: "tea-towels",
        label: "PANOS DE PRATO",
        title: "Panos de Prato",
        description:
            "Panos de prato refinados que não soltam fiapos, indicados para copas finas, cafeterias e salões gastronômicos exigentes.",
        tags: [
            "Não Solta Fiapos",
            "Misto de Algodão",
            "Linha Gastronômica",
            "Personalização de Marca",
        ],
    },
    {
        id: 13,
        slug: "baby-towels",
        label: "TOALHAS INFANTIS",
        title: "Toalhas Infantis",
        description:
            "Toalhas infantis ultra macias feitas com tecidos hipoalergênicos e suaves, ideais para maternidades, linhas de cuidados e coleções de varejo.",
        tags: [
            "Toque Suave",
            "Hipoalergênico",
            "Algodão Premium",
            "Pronto para o Varejo",
        ],
    },
    {
        slug: "microfiber-towels",
        label: "TOALHAS DE MICROFIBRA",
        title: "Toalhas de Microfibra",
        description:
            "Toalhas de microfibra de alta performance para secagem rápida, alta eficiência de limpeza e uso técnico ou corporativo versátil.",
        tags: [
            "Secagem Rápida",
            "Leves e Compactas",
            "Multiuso",
            "Alta Resistência",
        ],
    },
];