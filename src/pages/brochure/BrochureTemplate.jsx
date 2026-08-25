import React from "react";
import ocLogo from "@/assets/images/logoOC.png";
import useLanguage from "@/hooks/useLanguage";
import brandBG from "@/assets/images/brands/brandBG.webp";
import { brandProductsData } from "@/data/brands/brandProductsData";

export const BrochureTemplate = ({ brand, forwardedRef }) => {
  if (!brand) return null;
  const {
    brandCollaborationContent,
    brandProductsContent,
    brandProductsText,
  } = useLanguage();

  const brandProductsObj = brandProductsData?.[brand.slug] || {};

  const allProducts = [];
  Object.keys(brandProductsObj).forEach((catSlug) => {
    const categoryProducts = brandProductsObj[catSlug];
    if (categoryProducts && typeof categoryProducts === "object") {
      Object.keys(categoryProducts).forEach((prodSlug) => {
        const prodData = categoryProducts[prodSlug];
        const prodContent =
          brandProductsContent?.[brand.slug]?.[catSlug]?.[prodSlug] || {
            title: prodSlug.replaceAll("-", " "),
            description:
              "High-grade international export standard product.",
          };
        allProducts.push({
          slug: prodSlug,
          categorySlug: catSlug,
          ...prodData,
          content: prodContent,
        });
      });
    }
  });
  const pageContent = brandProductsText;
  return (
    <div
      ref={forwardedRef}
      className="brochure-container"
      style={{
        width: "794px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      }}
    >
      {/* ========================================================= */}
      {/* PAGE 1: COVER PAGE                                        */}
      {/* ========================================================= */}
      <div
        className="pdf-page bg-white"
        style={{
          width: "794px",
          height: "1123px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          className="brandCollabCard-left"
          style={{
            backgroundImage: `url(${brandBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "90px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="brandCollabCard-logos"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
              marginBottom: "35px",
            }}
          >
            <img
              src={ocLogo}
              alt="Origin Connect"
              style={{ height: "72px", objectFit: "contain" }}
            />
            <span
              className="plus"
              style={{ fontSize: "36px", fontWeight: "600", color: "#10b981" }}
            >
              +
            </span>
            <img
              src={brand.logo}
              alt={brand.name}
              style={{ height: "72px", objectFit: "contain" }}
            />
          </div>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#1e3a8a",
              margin: "0 0 4px 0",
            }}
          >
            Origin Connect
          </h2>
          <p
            className="description"
            style={{
              fontSize: "14px",
              color: "#475569",
              margin: "0 0 24px 0",
              letterSpacing: "0.5px",
            }}
          >
            ({brandCollaborationContent.subtitle})
          </p>

          <p
            className="collaborationContent"
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#10b981",
              margin: "0 0 24px 0",
            }}
          >
            {brandCollaborationContent.collaborationText}
          </p>

          <h3
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#1e3a8a",
              margin: "0 0 4px 0",
            }}
          >
            {brand.name}
          </h3>
          <p
            className="description"
            style={{
              fontSize: "14px",
              color: "#475569",
              margin: "0 0 40px 0",
              letterSpacing: "0.5px",
            }}
          >
            ({brand.subtitle})
          </p>

          <div
            className="brandCollab-title"
            style={{
              marginTop: "auto",
              marginBottom: "80px",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              padding: "16px 40px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "700",
              letterSpacing: "1px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <span className="oc" style={{ marginRight: "8px" }}>
              {brandCollaborationContent.titlePrefix}
            </span>
            {brand.name?.toUpperCase()}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PAGES 2 TO N: ONE PAGE PER PRODUCT                        */}
      {/* ========================================================= */}
      {allProducts.length > 0 ? (
        allProducts.map((product, index) => {
          const specifications = product.specifications || [];
          const columnKeys = product.columns || [];
          const columns = columnKeys.map((key) => ({
            key,
            label: pageContent?.columns?.[key] || key,
          }));

          const gallery = product.gallery || [];
          const img1 = gallery[0] || brand.category?.image;
          const img2 = gallery[1] || gallery[0] || brand.category?.image;

          return (
            <div
              key={index}
              className="pdf-page bg-white box-border flex flex-col justify-between"
              style={{ width: "794px", height: "1123px", padding: "36px 40px" }}
            >
              <div className="flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <img src={ocLogo} alt="Origin Connect" className="h-5" />
                    <span className="text-xs font-bold text-gray-900">
                      Origin Connect + {brand.name}
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    Product {index + 1} of {allProducts.length}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 my-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Verified Spec Sheet
                      </span>
                      <h2 className="text-xl font-extrabold text-gray-900">
                        {product.content.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5 grid grid-cols-2 gap-2.5 h-44">
                      <div className="rounded-xl overflow-hidden h-44 bg-gray-50 border border-gray-200">
                        <img
                          src={img1}
                          alt={`${product.content.title} 1`}
                          crossOrigin="anonymous"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden h-44 bg-gray-50 border border-gray-200">
                        <img
                          src={img2}
                          alt={`${product.content.title} 2`}
                          crossOrigin="anonymous"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-7 flex flex-col justify-center p-3 rounded-xl h-44 bg-gray-50 border border-gray-100">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {product.content.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="flex flex-col mt-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-1">
                    Technical Specifications
                  </h3>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <table className="w-full text-left text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700">
                          {columns.map((col) => (
                            <th
                              key={col.key}
                              className="p-2 border-r border-gray-200"
                            >
                              {col.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.map((row, rIndex) => (
                          <tr
                            key={rIndex}
                            className={`border-b border-gray-200 text-gray-600 ${rIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                          >
                            {columns.map((col) => (
                              <td
                                key={col.key}
                                className="p-2 border-r border-gray-200"
                              >
                                {row[col.key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-2 rounded-lg flex justify-between items-center text-[11px] mt-2 bg-gray-50 border border-gray-200 text-gray-500">
                <div>Platform: ExporterAI Trade Network</div>
                <div>Page {index + 2}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="pdf-page bg-white p-16 h-[1123px] flex flex-col justify-between">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-sm font-bold text-gray-900">
              Product Portfolio
            </span>
          </div>
          <div className="flex flex-col gap-6 my-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {brand.category?.title}
            </h2>
            <p className="text-sm text-gray-600">
              {brand.category?.description}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FINAL PAGE: CONTACT US                                    */}
      {/* ========================================================= */}
      <div className="pdf-page bg-white p-16 h-[1123px] flex flex-col justify-between">
        <div className="flex justify-between items-center pb-4 border-b">
          <div className="flex items-center gap-3">
            <img src={ocLogo} alt="Origin Connect" className="h-8" />
            <span className="text-xl font-bold text-gray-900">
              Origin Connect
            </span>
          </div>
        </div>
        <div className="my-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Let's Build Global Trade Together
          </h2>
          <div className="w-full p-6 rounded-2xl flex flex-col gap-4 text-left bg-gray-50 border border-gray-200">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Official Support Email:</span>
              <span className="font-medium text-blue-600">
                support@exporterai.com
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Direct Contact Line:</span>
              <span className="font-medium text-gray-900">+91 92270 41987</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureTemplate;
