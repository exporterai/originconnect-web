import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import BrandCard from "@/components/brands/BrandCard";
import { countriesData } from "@/data/brands/countriesData";
import { brandsData } from "@/data/brands/brandsData";
import useLanguage from "@/hooks/useLanguage";

function BrandsGrid() {
  const { country } = useParams();

  const {
    countryBrandsPage,
    brandsContent,
  } = useLanguage();
  // const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrder, setSortOrder] = useState("desc");
  const countryData =
    countriesData?.[country];
  const countryBrandData =
    brandsData?.[country]?.brands || {};
  const countryContent =
    brandsContent?.[country];
  const brandList = useMemo(() => {
    const list = Object.entries(
      countryBrandData
    ).map(([brandSlug, brandData]) => {
      const content =
        countryContent?.brands?.[
        brandSlug
        ];
      return {
        brandSlug,
        brandData,
        content,
        displayName:
          content?.name || brandSlug,
      };
    });
    return list.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.displayName.localeCompare(
          b.displayName
        );
      }
      return b.displayName.localeCompare(
        a.displayName
      );
    });
  }, [
    countryBrandData,
    countryContent,
    sortOrder,
  ]);

  if (!countryData) return null;

  return (
    <section className="countryBrands">
      <div className="container">
        <div className="brandsGrid-header">
          <h2 className="heading dark-heading">
            {
              countryBrandsPage.listing
                .title
            }
          </h2>

          <div className="brandsGrid-sort">
            <label htmlFor="brand-sort">
              {
                countryBrandsPage.listing
                  .sortBy
              }
            </label>

            <select
              id="brand-sort"
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(
                  e.target.value
                )
              }
            >
              <option value="asc">
                {
                  countryBrandsPage
                    .listing.sortOptions.az
                }
              </option>

              <option value="desc">
                {
                  countryBrandsPage
                    .listing.sortOptions.za
                }
              </option>
            </select>
          </div>
        </div>

        <div className="countryBrands-list">
          {brandList.length > 0 ? (
            brandList.map(
              ({
                brandSlug,
                brandData,
              }) => (
                <BrandCard
                  key={brandSlug}
                  country={country}
                  countryData={
                    countryData
                  }
                  brandSlug={
                    brandSlug
                  }
                  brandData={
                    brandData
                  }
                />
              )
            )
          ) : (
            <div className="countryBrands-empty">
              No Brands Found
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandsGrid;