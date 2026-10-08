import {
  ArrowRight,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import ocLogo from "@/assets/images/logoOC.png";
import brochureDownload from "@/assets/images/brands/brochure-download.webp";
import { brandCategoriesData } from "@/data/brands/brandCategoriesData";
import useLanguage from "@/hooks/useLanguage";

function BrandCard({
  country,
  countryData,
  brandSlug,
  brandData,
}) {
  const {
    brandsContent,
    countryBrandsPage,
    brandCollaborationContent,
  } = useLanguage();
  const brandContent =
    brandsContent?.[country]?.brands?.[
    brandSlug
    ];
  const categoryEntries =
    Object.entries(
      brandData?.category || {}
    );
  if (!brandContent) return null;
  if (!categoryEntries.length)
    return null;
  const [
    categorySlug,
    categoryData,
  ] = categoryEntries[0];
  const categoryContent =
    brandContent?.category?.[
    categorySlug
    ];
  const categoryStats =
    brandCategoriesData?.[
      country
    ]?.brands?.[
    brandSlug
    ]?.[
    categorySlug
    ];
  const isSubcategory =
    categoryData.type ===
    "subcategories";
  const count = isSubcategory
    ? categoryStats?.subcategoryCount ||
    0
    : categoryStats?.productCount ||
    0;
  const countLabel = isSubcategory
    ? countryBrandsPage.listing
      .categories
    : countryBrandsPage.listing
      .products;
  const categoryLink = `/brands/${country}/${brandSlug}/${categorySlug}`;
  return (
    <article className="brandCollabCardMain">
      <div className="brandCollabCard">
        {/* =====================
            LEFT
        ====================== */}
        <div
          className="brandCollabCard-left"
          style={{
            backgroundImage: `url(${countryData.brandBackground})`,
          }}
        >
          <div className="brandCollabCard-logos">
            <img
              src={ocLogo}
              alt="Origin Connect"
              loading="lazy"
            />
            <span className="plus">
              +
            </span>
            <img
              src={brandData.logo}
              alt={brandContent.name}
              loading="lazy"
            />
          </div>
          <div className="brandName">
            <h2>
              Origin Connect
            </h2>
            <p className="description">
              (
              {
                brandCollaborationContent.subtitle
              }
              )
            </p>
          </div>
          <p className="collaborationContent">
            {
              brandCollaborationContent.collaborationText
            }
          </p>
          <div className="brandName">
            <h3>
              {brandContent.name}
            </h3>
            <p className="description">
              ({brandContent.subtitle})
            </p>
          </div>
          <div className="brandCollab-title">
            <span className="oc">
              {
                brandCollaborationContent.titlePrefix
              }
            </span>
            {brandContent.name.toUpperCase()}
          </div>
        </div>
        {/* =====================
            CENTER
        ====================== */}
        <div
          className="brandCollabCard-center"
          style={{
            backgroundImage: `url(${categoryData.image})`,
          }}
        >
          <div className="brandCollabCard-overlay">
            <h2>
              {categoryContent?.title}
            </h2>
            <span className="line" />
            <p>
              {
                categoryContent?.description
              }
            </p>
            <Link
              to={categoryLink}
              className="brandCollabCard-products"
            >
              <span>
                {String(
                  count
                ).padStart(2, "0")}{" "}
                {countLabel}
              </span>
              <ArrowRight
                size={18}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
        {/* =====================
            RIGHT
        ====================== */}
        <div className="brandCollabCard-right">
          <h2>
            {
              brandCollaborationContent.brochureTitle
            }
            <br />
            <span>
              {
                brandCollaborationContent.brochureHighlight
              }
            </span>
          </h2>
          <span className="blueLine" />
          <p>
            {
              brandCollaborationContent.brochureDescription
            }
          </p>
          <img
            src={brochureDownload}
            alt={
              brandCollaborationContent.brochureHighlight
            }
            loading="lazy"
          />
          <button
            type="button"
            className="brandCollabCard-download"
          >
            <Download size={17} />

            {
              brandCollaborationContent.brochureButton
            }

            <ArrowRight
              size={17}
            />
          </button>
        </div>

      </div>
    </article>
  );
}

export default BrandCard;