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
        title: "Long-Staple Fibres",
        description: "Extra-long staple fibres grown along the Nile Delta deliver maximum tensile strength and a silken texture that only deepens with use.",
        image: aboutTowel1,
        tags: [
          "900–1400 GSM range",
          "ELS certified",
          "Nile Delta origin"
        ]
      },
      {
        title: "Plush Absorbency",
        description: "Untwisted yarns create a high-pile, high-absorbency construction that grows measurably softer through every laundry cycle.",
        image: aboutTowel2,
        tags: [
          "15% faster absorption",
          "Hypoallergenic",
          "Low-lint finish"
        ]
      },
      {
        title: "Global Standards",
        description: "Every batch is pressure-tested to international hospitality standards and custom hotel QC protocols before leaving our mills.",
        image: aboutTowel3,
        tags: [
          "Oeko-Tex 100",
          "GOTS certified",
          "5-star QC protocols"
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