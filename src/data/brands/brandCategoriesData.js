import carbonfibrefabricBanner from "@/assets/images/brands/india/malu/carbonfibrefabric/banner.webp";
import cottonwovengreyfabricBanner from "@/assets/images/brands/india/arihant/cottonwovengreyfabric/banner.webp";
import premiumcottonyarnBanner from "@/assets/images/brands/india/girnar/premiumcottonyarn/banner.webp";
import printedfabricsBanner from "@/assets/images/brands/india/kfprints/printedfabrics/banner.webp";
import readymadegarmentsBanner from "@/assets/images/brands/india/ioly/readymadegarments/banner.webp";

export const brandCategoriesData = {
    india: {
        brands: {
            "malu-advance-textile": {
                carbonfibrefabric: {
                    image: carbonfibrefabricBanner,
                    type: "products",
                    productCount: 9,
                },
            },
            "arihant-syncotex-mills": {
                cottonwovengreyfabric: {
                    image: cottonwovengreyfabricBanner,
                    type: "products",
                    productCount: 11,
                },
            },
            "girnar-spintex": {
                premiumcottonyarn: {
                    image: premiumcottonyarnBanner,
                    type: "products",
                    productCount: 4,
                },
            },
            "k-f-prints": {
                printedfabrics: {
                    image: printedfabricsBanner,
                    type: "products",
                    productCount: 5,
                },
            },
            "ioly": {
                readymadegarments: {
                    image: readymadegarmentsBanner,
                    type: "subcategories",
                    subcategoryCount: 3,
                },
            },
        },
    },
    uk: {
        brands: {}
    },
    brazil: {
        brands: {}
    },
    germany: {
        brands: {}
    },
    turkey: {
        brands: {}
    },
};