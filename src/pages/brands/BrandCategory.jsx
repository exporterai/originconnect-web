import { useParams } from "react-router-dom";
import BrandCategoryHero from "@/components/brandDetail/BrandCategoryDetailHero";
import BrandProductsGrid from "@/components/brandDetail/BrandProductsGrid";
import BrandSubCategoryGrid from "@/components/brandDetail/BrandSubCategoryGrid";
import BrandCTA from "@/components/brands/BrandCTA";
import { brandCategoriesData } from "@/data/brands/brandCategoriesData";
import { Helmet } from "react-helmet-async";
import useLanguage from "@/hooks/useLanguage";

function BrandCategory() {
  const { brandSlug, categorySlug } = useParams();
  const { brandCategoriesContent } = useLanguage()
  const categoryData =
    brandCategoriesData?.[brandSlug]?.[categorySlug];
  const categoryContent =
    brandCategoriesContent?.[brandSlug]?.[categorySlug];
  if (!categoryData) return null;
  return (
    <>
      <Helmet>
        <title>
          {`${categoryContent?.title} | Origin Connect`}
        </title>
        <meta
          name="description"
          content={categoryContent?.description}
        />
        <meta
          name="keywords"
          content={`
            ${categoryContent?.title},
            ${brandSlug},
            Indian manufacturer,
            textile supplier
          `}
        />
        <meta
          name="author"
          content="Origin Connect"
        />
        <meta
          name="publisher"
          content="Origin Connect"
        />
        <link
          rel="canonical"
          href={`https://originconnect.uk/brands/${brandSlug}/${categorySlug}`}
        />
      </Helmet>
      <main>
        <BrandCategoryHero />
        {categoryData?.type === "subcategories" ? (
          <BrandSubCategoryGrid />
        ) : (
          <BrandProductsGrid />
        )}
        <BrandCTA />
      </main>
    </>
  );
}

export default BrandCategory;