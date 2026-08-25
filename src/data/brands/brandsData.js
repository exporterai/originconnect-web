import towelImg from "@/assets/images/towel/hotel-towel.webp";
import categoriesImg from "@/assets/images/categories/categories-hero.webp";

import maluCarbonFabricBg from '@/assets/images/brands/malu/carbonfibrefabric/banner.webp'
import maluLogo from '@/assets/images/brands/malu/malu-logo.webp'
import arihantCottonwovengreyfabricBg from '@/assets/images/brands/arihant/cottonwovengreyfabric.webp'
import arihantLogo from '@/assets/images/brands/arihant/arihant-logo.webp'
import girnarPremiumcottonyarnBg from '@/assets/images/brands/girnar/premiumcottonyarn.webp'
import girnarLogo from '@/assets/images/brands/girnar/girnar-logo.webp'
import iolyLogo from '@/assets/images/brands/ioly/ioly-logo.svg'
import iolyReadymadegarmentsBg from '@/assets/images/brands/ioly/readymadegarments.webp'
import kfprintsLogo from '@/assets/images/brands/kfprints/kfprints-logo.webp'
import kfprintsprintedfabricsBg from '@/assets/images/brands/kfprints/printedfabrics.webp'

import { Gift, Layers3, Grid2X2 } from "lucide-react";

export const brandsGridContentImg = [
  {
    slug: "towels",
    image: towelImg,
    icon: Layers3,
  },
  {
    slug: "categories",
    image: categoriesImg,
    icon: Grid2X2,
  },
  {
    slug: "comingsoon",
    icon: Gift,
  },
];

// Added this export so BrochureDownloadPage can read your brand list without syntax errors
export const brandsData = {
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
}
