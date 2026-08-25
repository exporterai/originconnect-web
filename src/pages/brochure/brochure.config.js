import { mockBrochureData } from "@/pages/brochure/brochureData";

const brochureConfig = (data = mockBrochureData) => {
  const sections = [
    {
      type: "brochureCover",
      title: data.title,
      subtitle: data.subtitle,
      data: data,
    },
  ];

  return { sections };
};

export default brochureConfig;
