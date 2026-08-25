import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import { brandSubcategoriesData } from "@/data/brands/brandSubcategoriesData";

function BrandSubCategoryGrid() {
  const { brandSlug, categorySlug } = useParams();
  const { brandCategoriesContent } = useLanguage();
  const categoryContent =
    brandCategoriesContent?.[brandSlug]?.[categorySlug];
  const subCategories =
    categoryContent?.subCategoriesSection?.subCategories || {};
  const subCategoryData =
    brandSubcategoriesData?.[brandSlug]?.[categorySlug] || {};
  return (
    <section className="brandProductsGrid section">
      <div className="container">
        <div className="brandProductsGrid-header">
          <div className="brandProductsGrid-heading">
            <h2 className="brandProductsGrid-title">
              {categoryContent?.subCategoriesSection?.title}
            </h2>
            <div className="brandProductsGrid-line" />
            <p className="brandProductsGrid-description">
              {categoryContent?.subCategoriesSection?.description}
            </p>
          </div>
        </div>
        <div className="brandProductsGrid-list">
          {Object.entries(subCategories).map(([slug, item]) => {
            const image =
              subCategoryData?.[slug]?.image;
            return (
              <Link
                key={slug}
                to={`/brands/${brandSlug}/${categorySlug}/subcategory/${slug}`}
              >
                <article className="brandProductCard">
                  <div className="brandProductCard-image">
                    <img
                      src={image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="brandProductCard-content">
                    <h3 className="brandProductCard-title">
                      {item.title}
                    </h3>
                    <p className="brandProductsGrid-description">
                      {item.description}
                    </p>
                    <div className="brandProductCard-footer">
                      <span className="brandProductCard-details">
                        {item.productsSection?.viewDetails}
                      </span>
                      <span className="brandProductCard-arrow">
                        <ArrowRight
                          size={17}
                          strokeWidth={1.8}
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandSubCategoryGrid;