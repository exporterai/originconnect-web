import React, { useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useLanguage from "@/hooks/useLanguage";
import { ArrowRight, Loader2 } from "lucide-react";
import ocLogo from "@/assets/images/logoOC.png";
// import brandBG from "@/assets/images/brands/brandBG.webp";
import brandBG from "@/assets/images/brands/brandBGNew.webp";
import brochureDownload from '@/assets/images/brands/brochure-download.webp'
import { usePdfGenerator } from "@/pages/brochure/usePdfGenerator";
import { BrochureTemplate } from "@/pages/brochure/BrochureTemplate";
import { brandCategoriesData } from "@/data/brands/brandCategoriesData";
import { brandsGridContentImg, brandsData } from "@/data/brands/brandsData";

function BrandsGrid() {
  const {
    brandsGridContent,
    brandsContent,
    brandCollaborationContent,
  } = useLanguage();
  const [sortOrder, setSortOrder] = useState("desc");
  // const [sortOrder, setSortOrder] = useState("asc");
  const { generatePDF } = usePdfGenerator();
  const [generatingSlug, setGeneratingSlug] = useState(null);
  const [activeBrochure, setActiveBrochure] = useState(null);
  // Store standard ref wrapper objects per brand slug safely outside render logic
  const containerRefs = useRef({});
  const handleDownloadBrochure = async (brand) => {
    if (generatingSlug) return;
    setActiveBrochure(brand.slug)
    await new Promise((r) => setTimeout(r, 300));
    const targetRef = containerRefs.current[brand.slug];
    if (!targetRef?.current) {
      console.error("Brochure DOM reference missing");
      return;
    }
    try {
      setGeneratingSlug(brand.slug);
      await document.fonts.ready;
      await new Promise((r) => setTimeout(r, 500));
      await generatePDF(
        targetRef,
        `${brand.slug}-brochure.pdf`
      );
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingSlug(null);
      setActiveBrochure(null);
    }
  };
  const brandList = useMemo(() => {
    const brands = Object.entries(brandsData).map(
      ([slug, brand]) => ({
        slug,
        ...brand,
        displayName: brandsContent?.[slug]?.name || slug,
      })
    );
    return brands.sort((a, b) => {
      return sortOrder === "asc"
        ? a.displayName.localeCompare(b.displayName)
        : b.displayName.localeCompare(a.displayName);
    });
  }, [sortOrder, brandsContent]);
  return (
    <section className="brandsGrid-wrapper light-bg py-4">
      <div className="container">
        <div className="brandsGrid-header">
          <div className="section-heading text-center">
            <h2 className="heading">{brandsGridContent.title}</h2>
          </div>
          <div className="brandsGrid-sort">
            <label htmlFor="brand-sort">
              Sort By
            </label>
            <select
              id="brand-sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Name (A-Z)</option>
              <option value="desc">Name (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="brandShowcase-wrapper">
          {brandList.map((brand) => {
            const isGenerating = generatingSlug === brand.slug;
            // Ensure ref container object exists without reading or mutating during the critical rendering phase violation path
            if (!containerRefs.current[brand.slug]) {
              containerRefs.current[brand.slug] = { current: null };
            }
            const brandRef = containerRefs.current[brand.slug];
            const brandContent = brandsContent?.[brand.slug];
            const brochureBrand = {
              ...brand,
              name: brandContent?.name,
              subtitle: brandContent?.subtitle,
            };
            const categorySlug = Object.keys(
              brand.category
            )[0];
            const category = brand.category[categorySlug];
            const categoryContent =
              brandContent?.category?.[categorySlug];
            const categoryData =
              brandCategoriesData?.[brand.slug]?.[
              categorySlug
              ];
            const count =
              categoryContent?.type === "subcategories"
                ? categoryData?.subcategoryCount
                : categoryData?.productCount;
            const label =
              categoryContent?.type === "subcategories"
                ? "Categories"
                : "Products";
            return (
              <React.Fragment key={brand.slug}>
                <div className="brandCollabCardMain mb-6">
                  <div className="brandCollabCard">
                    {/* LEFT */}
                    <div
                      className="brandCollabCard-left"
                      style={{ backgroundImage: `url(${brandBG})` }}
                    >
                      <div className="brandCollabCard-logos">
                        <img src={ocLogo} alt="Origin Connect" loading="lazy" />
                        <span className="plus">+</span>
                        <img src={brand.logo} alt={brandContent?.name} loading="lazy" />
                      </div>
                      <div className="brandName">
                        <h2>Origin Connect</h2>
                        <p className="description">
                          {" "}
                          ({brandCollaborationContent.subtitle})
                        </p>
                      </div>
                      <p className="collaborationContent">
                        {brandCollaborationContent.collaborationText}
                      </p>
                      <div className="brandName">
                        <h3>{brandContent?.name}</h3>
                        <p className="description">({brandContent?.subtitle})</p>
                      </div>
                      <div className="brandCollab-title mt-4">
                        <span className="oc">
                          {" "}
                          {brandCollaborationContent.titlePrefix}
                        </span>
                        {brandContent?.name?.toUpperCase()}
                      </div>
                    </div>
                    {/* CENTER */}
                    <div
                      className="brandCollabCard-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="brandCollabCard-overlay">
                        <h2>{categoryContent?.title}</h2>
                        <span className="line" />
                        <p>{categoryContent?.description}</p>
                        <Link
                          to={`/brands/${brand.slug}/${category.slug}`}
                          className="cursor-pointer block mt-auto"
                          aria-label={`View ${categoryContent?.title}`}
                        >
                          <div className="brandCollabCard-products">
                            {String(count || 0).padStart(2, "0")}
                            {" "}
                            {label}
                            <span>
                              <ArrowRight size={18} strokeWidth={2} />
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div className="brandCollabCard-right">
                      <h2>
                        {brandCollaborationContent.brochureTitle}
                        <br />
                        <span>{brandCollaborationContent.brochureHighlight}</span>
                      </h2>
                      <span className="blueLine" />
                      <p>{brandCollaborationContent.brochureDescription}</p>
                      <img
                        src={brochureDownload}
                        alt={brandCollaborationContent.brochureHighlight}
                        loading="lazy"
                      />
                      {/* Dynamic Download Action Button */}
                      <button
                        type="button"
                        onClick={() => handleDownloadBrochure(brand)}
                        disabled={isGenerating}
                        className="cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                        aria-label={
                          isGenerating
                            ? "Generating brochure"
                            : `Download brochure `
                        }
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            Generating...
                          </>
                        ) : (
                          <>
                            {brandCollaborationContent.brochureButton}
                            <span>
                              <ArrowRight size={18} strokeWidth={2} />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Hidden Off-Screen Multi-Page Brochure Template for PDF Capture */}
                {activeBrochure === brand.slug && (
                  <div
                    style={{
                      position: "fixed",
                      left: "-10000px",
                      top: "0",
                      pointerEvents: "none",
                    }}
                  >
                    <BrochureTemplate
                      brand={brochureBrand}
                      forwardedRef={brandRef}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="brandsGrid-grid">
          {brandsGridContent.cards.map((item) => {
            const cardAsset = brandsGridContentImg.find(
              (asset) => asset.slug === item.slug,
            );
            const Icon = cardAsset?.icon;
            const cardContent = (
              <>
                <div
                  className={`brandsGrid-media ${item.comingSoon ? "brandsGrid-media-comingSoon" : ""
                    }`}
                >
                  {cardAsset?.image && (
                    <img src={cardAsset.image} alt={item.title} loading="lazy" />
                  )}
                  {Icon && (
                    <span className="brandsGrid-icon">
                      <Icon size={item.comingSoon ? 30 : 18} strokeWidth={2} />
                    </span>
                  )}
                </div>
                <div className="brandsGrid-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="brandsGrid-link">
                    {item.button}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </>
            );
            if (item.comingSoon) {
              return (
                <div
                  key={item.slug}
                  className="brandsGrid-card brandsGrid-card-disabled"
                >
                  {cardContent}
                </div>
              );
            }
            return (
              <Link
                key={item.slug}
                to={item.link}
                className="brandsGrid-card"
                aria-label={item.title}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandsGrid;
