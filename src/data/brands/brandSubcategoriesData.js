import kurtaBanner from "@/assets/images/brands/india/ioly/readymadegarments/kurtaset/banner.webp";
import kaftaanBanner from "@/assets/images/brands/india/ioly/readymadegarments/kaftaan/banner.webp";
import cordsetBanner from "@/assets/images/brands/india/ioly/readymadegarments/cordset/banner.webp";

import petWaterBanner from '@/assets/images/brands/brazil/aguaattiva/pet-water/banner.webp'
import attivaWaterGlassBanner from '@/assets/images/brands/brazil/aguaattiva/attiva-glass-water/banner.webp'
import mineralleWaterGlassBanner from '@/assets/images/brands/brazil/aguaattiva/mineral-water-glass/banner.webp'
import drinksBanner from '@/assets/images/brands/brazil/aguaattiva/drinks/banner.webp'
import privateLabelBanner from '@/assets/images/brands/brazil/aguaattiva/private-label/banner.webp'

export const brandSubcategoriesData = {
    india: {
        brands: {
            ioly: {
                readymadegarments: {
                    kurtaset: {
                        slug: "kurtaset",
                        image: kurtaBanner,
                        productCount: 12,
                    },
                    kaftaan: {
                        slug: "kaftaan",
                        image: kaftaanBanner,
                        productCount: 8,
                    },
                    cordset: {
                        slug: "cordset",
                        image: cordsetBanner,
                        productCount: 10,
                    },
                },
            },
        },
    },
    uk: {
        brands: {}
    },
    brazil: {
        brands: {
            "agua-attiva": {
                mineralwaterbeverages: {
                    "pet-water": {
                        slug: "pet-water",
                        image: petWaterBanner,
                        productCount: 6,
                    },
                    "attiva-water-glass": {
                        slug: "attiva-water-glass",
                        image: attivaWaterGlassBanner,
                        productCount: 5,
                    },
                    "mineralle-water-glass": {
                        slug: "mineralle-water-glass",
                        image: mineralleWaterGlassBanner,
                        productCount: 3,
                    },
                    drinks: {
                        slug: "drinks",
                        image: drinksBanner,
                        productCount: 12,
                    },
                    "private-label": {
                        slug: "private-label",
                        image: privateLabelBanner,
                        productCount: 3,
                    },
                },
            },
        }
    },
    germany: {
        brands: {}
    },
    turkey: {
        brands: {}
    },
};