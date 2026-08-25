import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Loader2, Download } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import { BrochureTemplate } from "@/pages/brochure/BrochureTemplate";
import { usePdfGenerator } from "@/pages/brochure/usePdfGenerator";
import { brandsData } from "@/data/brands/brandsData";

export default function BrochureDownloadPage() {
  const { slug } = useParams();
  const brochureRef = useRef(null);
  const { generatePDF, isGenerating } = usePdfGenerator();
  const { brandsContent } = useLanguage();
  const brandData = brandsData?.[slug];
  const brandContent = brandsContent?.[slug];
  const brand =
    brandData && brandContent
      ? {
        slug,
        ...brandData,
        name: brandContent.name,
        subtitle: brandContent.subtitle,
      }
      : null;
  const handleDownload = async () => {
    if (!brochureRef.current || !brand) return;
    await generatePDF(
      brochureRef,
      `${brand.slug}-brochure.pdf`
    );
  };

  if (!brand) {
    return (
      <div className="p-8 text-center">
        Brand brochure data not found.
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Action Bar */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            Brochure Preview: {brand.name}
          </h1>
          <p className="text-xs text-gray-500">
            Verify layout below before downloading the final PDF.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          disabled={isGenerating}
          aria-label="Download brochure PDF"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <Loader2
                className="animate-spin"
                size={18}
              />
              Generating PDF...
            </>
          ) : (
            <>
              <Download size={18} />
              Download Brochure
            </>
          )}
        </button>
      </div>
      {/* Preview */}
      <div className="bg-white p-4 shadow-xl rounded-xl overflow-auto border border-gray-200 flex justify-center max-w-full">
        <div className="transform scale-[0.65] origin-top my-[-120px]">
          <BrochureTemplate
            brand={brand}
            forwardedRef={brochureRef}
          />
        </div>
      </div>
    </div>
  );
}