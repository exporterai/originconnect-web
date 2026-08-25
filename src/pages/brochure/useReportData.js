import { useBrochureReport } from "@/pages/brochure/useBrochureReport";

export const useReportData = (type, params) => {
  switch (type) {
    case "brochure":
      return useBrochureReport(params);
    default:
      return {
        reportData: null,
        loading: false,
        error: "Invalid report type",
      };
  }
};
