import aboutTowel1 from "@/assets/images/about-towel1.png";
import aboutTowel2 from "@/assets/images/about-towel2.png";
import aboutTowel3 from "@/assets/images/about-towel3.png";

import towelStep1 from "@/assets/images/towel-step1.jpg";
import towelStep2 from "@/assets/images/towel-step2.jpg";
import towelStep3 from "@/assets/images/towel-step3.jpg";
import towelStep4 from "@/assets/images/towel-step4.jpg";

export const categoryContent = {
  towels: {
    aboutTag: "Material & Craft",
    aboutTitle: [
      "Designed for",
      "Premium Hospitality",
    ],
    aboutDescription:
      "From fibre selection to final finishing, every decision is guided by the standards of the world's finest hospitality environments.",
    aboutSteps: [
      {
        title: "Exceptional Softness",
        description: "Crafted from carefully selected extra-long staple cotton fibres that create a smoother, silkier touch and lasting durability.",
        image: aboutTowel1,
        tags: [
          "Extra-Long Staple Cotton",
          "Luxury Hand Feel",
          "Superior Strength"
        ]
      },
      {
        title: "Elevated Guest Comfort",
        description: "Dense terry construction delivers exceptional absorbency and a plush feel that remains inviting through repeated hospitality laundering.",
        image: aboutTowel2,
        tags: [
          "High-Pile Terry",
          "Fast Absorption",
          "Low-lint finish"
        ]
      },
      {
        title: "Trusted Quality",
        description: "Every batch undergoes rigorous testing for absorbency, durability, and consistency to meet international hospitality expectations.",
        image: aboutTowel3,
        tags: [
          "Oeko-Tex 100",
          "GOTS certified",
          "Hospitality QC"
        ]
      },
    ],
    processTag: "The Origin Aesthetic",
    processTitle: [
      "From Fibre to Export",
    ],
    processDescription: "A vertically integrated supply chain gives us complete control over quality, lead times, and the details that matter to premium hospitality buyers.",
    processSteps: [
      {
        step: "01",
        tag: "Raw Material",
        title: "Fibre Selection",
        description: "Egyptian extra-long-staple cotton is hand-selected from verified Nile Delta growers. Each bale is tested for length, fineness, and strength before entering production.",
        image: towelStep1,
      },

      {
        step: "02",
        tag: "Precision Weaving",
        title: "Loom Craftsmanship",
        description: "State-of-the-art air-jet and rapier looms produce consistent GSM and pile height across every roll. Zero-twist and terry constructions are woven to specification.",
        image: towelStep2,
      },

      {
        step: "03",
        tag: "Quality Assurance",
        title: "Quality Control",
        description: "Every piece undergoes wash-fastness, tensile strength, and absorbency testing to Oeko-Tex and GOTS standards. Defect rate maintained below 0.3%.",
        image: towelStep3,
      },

      {
        step: "04",
        tag: "Global Export",
        title: "Worldwide Delivery",
        description: "Packed to international hospitality protocols and shipped to 60+ countries. Dedicated logistics partners ensure on-time delivery with full chain-of-custody documentation.",
        image: towelStep4,
      },
    ],
  },
};