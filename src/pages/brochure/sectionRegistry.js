import BrochureReportSection from "@/pages/brochure/BrochureReportSection";
// ... (keep your other imports)

export const sectionRegistry = {
  // ... your existing registry entries
  brochureCover: {
    component: BrochureReportSection,
    build: (data, section) => ({
      title: section.title,
      subtitle: section.subtitle,
      data: section.data,
      generatedAt: new Date().toLocaleString(),
    }),
  },
};
