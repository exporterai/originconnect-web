import { useState, useEffect } from "react";
import { mockBrochureData } from "@/pages/brochure/brochureData";

export const useBrochureReport = (params) => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      // Simulate fetching mock brochure data based on params/brand id
      setTimeout(() => {
        setReportData(mockBrochureData);
        setLoading(false);
      }, 200);
    } catch (err) {
      setError("Failed to load brochure data");
      setLoading(false);
    }
  }, [params]);

  return { reportData, loading, error };
};
