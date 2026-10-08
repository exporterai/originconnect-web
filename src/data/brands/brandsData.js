import maluCarbonFabricBg from '@/assets/images/brands/india/malu/carbonfibrefabric/banner.webp'
import maluLogo from '@/assets/images/brands/india/malu/malu-logo.webp'
import arihantCottonwovengreyfabricBg from '@/assets/images/brands/india/arihant/cottonwovengreyfabric.webp'
import arihantLogo from '@/assets/images/brands/india/arihant/arihant-logo.webp'
import girnarPremiumcottonyarnBg from '@/assets/images/brands/india/girnar/premiumcottonyarn.webp'
import girnarLogo from '@/assets/images/brands/india/girnar/girnar-logo.webp'
import iolyLogo from '@/assets/images/brands/india/ioly/ioly-logo.svg'
import iolyReadymadegarmentsBg from '@/assets/images/brands/india/ioly/readymadegarments.webp'
import kfprintsLogo from '@/assets/images/brands/india/kfprints/kfprints-logo.webp'
import kfprintsprintedfabricsBg from '@/assets/images/brands/india/kfprints/printedfabrics.webp'

import acaisuperfrutaLogo from '@/assets/images/brands/brazil/acaisuperfruta/acaisuperfruta-logo.webp'
import acaiProductsBg from '@/assets/images/brands/brazil/acaisuperfruta/acai-products.webp'
import attivaLogo from '@/assets/images/brands/brazil/aguaattiva/aguaattiva-logo.webp'
import aguaAttivaBg from '@/assets/images/brands/brazil/aguaattiva/aguaattivaBG.webp'

export const brandsData = {
  india: {
    brands: {
      "malu-advance-textile": {
        logo: maluLogo,
        category: {
          carbonfibrefabric: {
            type: "products",
            image: maluCarbonFabricBg,
            slug: "carbonfibrefabric",
          },
        },
      },
      "arihant-syncotex-mills": {
        logo: arihantLogo,
        category: {
          cottonwovengreyfabric: {
            type: "products",
            image: arihantCottonwovengreyfabricBg,
            slug: "cottonwovengreyfabric",
          },
        },
      },
      "girnar-spintex": {
        logo: girnarLogo,
        category: {
          premiumcottonyarn: {
            type: "products",
            image: girnarPremiumcottonyarnBg,
            slug: "premiumcottonyarn",
          },
        },
      },
      "ioly": {
        logo: iolyLogo,
        category: {
          readymadegarments: {
            type: "subcategories",
            image: iolyReadymadegarmentsBg,
            slug: "readymadegarments",
          },
        },
      },
      "k-f-prints": {
        logo: kfprintsLogo,
        category: {
          printedfabrics: {
            type: "products",
            image: kfprintsprintedfabricsBg,
            slug: "printedfabrics",
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
      "acai-super-fruta": {
        logo: acaisuperfrutaLogo,
        category: {
          acaiproducts: {
            type: "products",
            image: acaiProductsBg,
            slug: "acaiproducts",
          },
        },
      },
      "agua-attiva": {
        logo: attivaLogo,
        category: {
          mineralwaterbeverages: {
            type: "subcategories",
            image: aguaAttivaBg,
            slug: "mineralwaterbeverages",
          },
        },
      },
    },
  },
  germany: {
    brands: {}
  },
  turkey: {
    brands: {}
  },
};