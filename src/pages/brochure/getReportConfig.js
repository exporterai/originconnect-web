import brochureConfig from "@/pages/brochure/brochure.config";

const configMap = {
  brochure: brochureConfig,
};

export const getReportConfig = (type, data) => {
  const configFn = configMap[type];

  if (!configFn) return null;

  return configFn(data);
};
