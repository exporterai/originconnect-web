export const footerData = {
  logo: {
    imageAlt: "Origin Connect",
    title: "ORIGIN CONNECT",

    countries: [
      { label: "Indien", url: "https://originconnect.in" },
      { label: "Vereinigtes Königreich", url: "https://originconnect.uk" },
      { label: "Deutschland", url: "https://originconnect.de" },
      { label: "Türkei", url: "https://originconnect.tr" },
    ],
  },
  sections: [
    {
      id: "links",
      type: "links",
      title: "Schnellzugriff",

      items: [
        { label: "Über Uns", path: "/aboutUs" },
        { label: "Produkte", path: "/products" },
        { label: "Marken", path: "/brands" },
        { label: "Dienstleistungen", path: "/services" },
      ],
    },

    {
      id: "secondary-contact",
      type: "contact",
      title: "Zweitbüro",

      items: [
        {
          type: "address",
          value: [
            "The Discovery, Borivali East",
            "Mumbai, Indien",
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
          value: "ravish.kumar@originconnect.de",
          url: "mailto:ravish.kumar@originconnect.de",
        },
      ],
    },

    {
      id: "primary-contact",
      type: "contact",
      title: "Hauptbüro",

      items: [
        {
          type: "address",
          value: [
            "Anton-Brucknerstr. 12",
            "76227 Karlsruhe",
             "Deutschland",
          ],
        },
        {
          type: "whatsapp",
          value: "+49 1511 9619914",
          url: "https://wa.me/4915119619914",
        },
        {
          type: "email",
          value: "simeon.baumann@originconnect.de",
          url: "mailto:simeon.baumann@originconnect.de",
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
  copyright: "© {year} Origin Connect. Alle Rechte vorbehalten.",
};