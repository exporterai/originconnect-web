export const footerData = {
  logo: {
    imageAlt: "Origin Connect",
    title: "ORIGIN CONNECT",

    countries: [
      {
        label: "Hindistan",
        url: "https://originconnect.in",
      },
      {
        label: "Birleşik Krallık",
        url: "https://originconnect.uk",
      },
      {
        label: "Almanya",
        url: "https://originconnect.de",
      },
      {
        label: "Türkiye",
        url: "https://originconnect.tr",
      },
    ],
  },

  sections: [
    {
      id: "links",
      type: "links",
      title: "Bağlantılar",

      items: [
        {
          label: "Hakkımızda",
          path: "/aboutUs",
        },
        {
          label: "Ürünler",
          path: "/products",
        },
        {
          label: "Markalar",
           path: "/brands" 
        },
        {
          label: "Hizmetler",
          path: "/services",
        },
      ],
    },

    {
      id: "secondary-contact",
      type: "contact",
      title: "İkincil İletişim",

      items: [
        {
          type: "address",
          value: [
            "The Discovery, Borivali East,",
            "Mumbai (Hindistan)",
            "400066",
          ],
        },
        {
          type: "whatsapp",
          value: "+91 93270 41987",
          url: "https://wa.me/919327041987",
        },
        {
          type: "email",
          value: "ravish.kumar@originconnect.tr",
          url: "mailto:ravish.kumar@originconnect.tr",
        },
      ],
    },

    {
      id: "primary-contact",
      type: "contact",
      title: "Birincil İletişim",

      items: [
        {
          type: "address",
          value: [
            "Şahinci Sokak No: 56",
            "Sarıyer, İstanbul",
            "",
          ],
        },
        {
          type: "whatsapp",
          value: "+90 53965 53458",
          url: "https://wa.me/905396553458",
        },
        {
          type: "email",
          value: "engin.onder@originconnect.tr",
          url: "mailto:engin.onder@originconnect.tr",
        },
      ],
    },
  ],

  socials: [
    {
      id: "linkedin",
      icon: "linkedin",
      url: "#",
    },
    {
      id: "instagram",
      icon: "instagram",
      url: "#",
    },
    {
      id: "facebook",
      icon: "facebook",
      url: "#",
    },
    {
      id: "twitter",
      icon: "twitter",
      url: "#",
    },
  ],

  copyright:
    "© {year} Origin Connect. Tüm hakları saklıdır.",
};