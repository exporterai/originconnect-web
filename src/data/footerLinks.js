// ==============================
// Footer Data
// ==============================

export const footerData = {
  logo: {
    imageAlt: "Origin Connect",
    title: "ORIGIN CONNECT",

    countries: [
      {
        label: "India",
        url: "https://originconnect.in",
      },
      {
        label: "United Kingdom",
        url: "https://originconnect.uk",
      },
      {
        label: "Germany",
        url: "https://originconnect.de",
      },
      {
        label: "Türkiye",
        url: "https://originconnect.tr",
      },
      // {
      //     label: "france",
      //     url: "https://originconnect.fr",
      // },
    ],
  },

  sections: [
    {
      id: "links",
      type: "links",
      title: "Links",

      items: [
        {
          label: "About Us",
          path: "/aboutUs",
        },
        {
          label: "Products",
          path: "/products",
        },
        {
          label: "Categories",
          path: "/categories",
        },
        {
          label: "Services",
          path: "/services",
        },
      ],
    },

    {
      id: "secondary-contact",
      type: "contact",
      title: "Secondary Contact",

      items: [
        {
          type: "address",
          // value: [
          //     "The Discovery, Borivali East,",
          //     "Mumbai (INDIA) - 400066",
          // ],
          value: [
            "The Discovery, Borivali East,",
            "Mumbai (INDIA)",
            "400066"
          ]
        },

        {
          type: "whatsapp",
          value: "+91 93270 41987",
          url: "https://wa.me/919327041987",
        },

        {
          type: "email",
          value: "ravish.kumar@originconnect.in",
          url: "mailto:ravish.kumar@originconnect.in",
        },
      ],
    },

    {
      id: "primary-contact",
      type: "contact",
      title: "Primary Contact",

      items: [
        {
          type: "address",
          // value: [
          //     "Madhav Apartment, Shahibaug,",
          //     "Ahmedabad (GUJARAT) - 380016",
          // ],
          value: [
            "Madhav Apartment, Shahibaug,",
            "Ahmedabad (GUJARAT)",
            "380016"
          ]
        },

        {
          type: "whatsapp",
          value: "+91 92270 41987",
          url: "https://wa.me/919227041987",
        },

        {
          type: "email",
          value: "sanika.marak@originconnect.in",
          url: "mailto:sanika.marak@originconnect.in",
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

  copyright: "© 2026 Origin Connect. All rights reserved.",
};