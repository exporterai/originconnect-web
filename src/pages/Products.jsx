import React, {
  useState,
  useEffect,
  useMemo,
} from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SlidersHorizontalIcon } from "lucide-react";
import ProductIntro from "@/components/product/ProductIntro";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSidebar from "@/components/product/ProductSidebar";
import ProductMobileFilter from "@/components/product/ProductMobileFilter";
import useLanguage from "@/hooks/useLanguage";
import { productsData } from "@/data/product/products";
function Products() {
  const { products, productPage, seo } = useLanguage();
  const allProducts = productsData.map((product) => ({
    ...product,
    ...(products.find(
      (item) => item.slug === product.slug
    ) || {}),
  }));
  const [searchParams] = useSearchParams();
  const category =
    searchParams.get("category") || "towels";
  const subcategory =
    searchParams.get("subcategory") || "";
  const [showFilter, setShowFilter] =
    useState(false);
  // Applied Filters
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState(category);
  const [
    selectedProductTypes,
    setSelectedProductTypes,
  ] = useState(
    subcategory ? [subcategory] : []
  );
  const [
    selectedIndustries,
    setSelectedIndustries,
  ] = useState([]);
  const [
    selectedManufacturing,
    setSelectedManufacturing,
  ] = useState([]);
  // Mobile Draft Filters
  const [
    draftFilters,
    setDraftFilters,
  ] = useState({
    category,
    productTypes:
      subcategory ? [subcategory] : [],
    industries: [],
    manufacturing: [],
  });
  useEffect(() => {
    setSelectedCategory(category);
    setSelectedProductTypes(
      subcategory ? [subcategory] : []
    );
    setSelectedIndustries([]);
    setSelectedManufacturing([]);
    setDraftFilters({
      category,
      productTypes:
        subcategory ? [subcategory] : [],
      industries: [],
      manufacturing: [],
    });
  }, [category, subcategory]);
  const filteredProducts = useMemo(() => {
    return allProducts.filter((item) => {
      const categoryMatch =
        item.category === selectedCategory;
      const productTypeMatch =
        selectedProductTypes.length === 0 ||
        selectedProductTypes.includes(
          item.productType
        );
      const industryMatch =
        selectedIndustries.length === 0 ||
        selectedIndustries.includes(
          item.industry
        );
      const manufacturingMatch =
        selectedManufacturing.length === 0 ||
        selectedManufacturing.includes(
          item.manufacturing
        );
      return (
        categoryMatch &&
        productTypeMatch &&
        industryMatch &&
        manufacturingMatch
      );
    });
  }, [
    allProducts,
    selectedCategory,
    selectedProductTypes,
    selectedIndustries,
    selectedManufacturing,
  ]);
  const totalFilters =
    selectedProductTypes.length +
    selectedIndustries.length +
    selectedManufacturing.length;
  const openMobileFilter = () => {
    setDraftFilters({
      category: selectedCategory,
      productTypes: [...selectedProductTypes],
      industries: [...selectedIndustries],
      manufacturing: [...selectedManufacturing],
    });
    setShowFilter(true);
  };
  const applyMobileFilters = () => {
    setSelectedCategory(
      draftFilters.category
    );
    setSelectedProductTypes(
      draftFilters.productTypes
    );
    setSelectedIndustries(
      draftFilters.industries
    );
    setSelectedManufacturing(
      draftFilters.manufacturing
    );
    setShowFilter(false);
  };
  const resetFilters = () => {
    const resetData = {
      category: "towels",
      productTypes: [],
      industries: [],
      manufacturing: [],
    };
    setSelectedCategory(
      resetData.category
    );
    setSelectedProductTypes(
      resetData.productTypes
    );
    setSelectedIndustries(
      resetData.industries
    );
    setSelectedManufacturing(
      resetData.manufacturing
    );
    setDraftFilters(resetData);
  };
  return (
    <>
      <Helmet>
        <title>{seo.products.title}</title>
        <meta
          name="description"
          content={seo.products.description}
        />
        <meta
          name="keywords"
          content={seo.products.keywords}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <link
          rel="canonical"
          href={`${window.location.origin}/products`}
        />
        <meta
          name="author"
          content="Origin Connect"
        />
        <meta
          name="publisher"
          content="Origin Connect"
        />
      </Helmet>
      <main>
        <ProductIntro />
        <section
          className="
            products-page
            section
            light-bg
          "
        >
          <div className="container">
            <div className="products-layout">
              {/* Desktop Sidebar */}
              <div className="desktopSidebar">
                <ProductSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedProductTypes={selectedProductTypes}
                  setSelectedProductTypes={setSelectedProductTypes}
                  selectedIndustries={selectedIndustries}
                  setSelectedIndustries={setSelectedIndustries}
                  selectedManufacturing={selectedManufacturing}
                  setSelectedManufacturing={setSelectedManufacturing}
                />
              </div>
              {/* Mobile Filter Button */}
              <div className="mobile-filter-btn-wrap">
                <button
                  type="button"
                  className="mobile-filter-btn"
                  onClick={openMobileFilter}
                  aria-label="Open product filters"
                >
                  <span className="filter-icon">
                    <SlidersHorizontalIcon size={15} />
                    {totalFilters > 0 && (
                      <span
                        aria-label={`${totalFilters} active filters`}
                      >
                        {totalFilters}
                      </span>
                    )}
                  </span>
                  {productPage.filterButton}
                </button>
              </div>
              {/* Mobile Filter Drawer */}
              {showFilter && (
                <div className="mobileFilter">
                  <button
                    type="button"
                    className="mobileFilter-overlay"
                    aria-label="Close filters"
                    onClick={() => setShowFilter(false)}
                  />
                  <div className="mobileFilter-wrapper">
                    <div className="mobileFilter-header">
                      <button
                        type="button"
                        aria-label="Close filters"
                        onClick={() => setShowFilter(false)}
                      >
                        ←
                      </button>
                      <h4>
                        {productPage.filterTitle}
                      </h4>
                    </div>
                    <ProductMobileFilter
                      selectedCategory={draftFilters.category}
                      setSelectedCategory={(value) =>
                        setDraftFilters((prev) => ({
                          ...prev,
                          category: value,
                        }))
                      }
                      selectedProductTypes={
                        draftFilters.productTypes
                      }
                      setSelectedProductTypes={(value) =>
                        setDraftFilters((prev) => ({
                          ...prev,
                          productTypes: value,
                        }))
                      }
                      selectedIndustries={
                        draftFilters.industries
                      }
                      setSelectedIndustries={(value) =>
                        setDraftFilters((prev) => ({
                          ...prev,
                          industries: value,
                        }))
                      }
                      selectedManufacturing={
                        draftFilters.manufacturing
                      }
                      setSelectedManufacturing={(value) =>
                        setDraftFilters((prev) => ({
                          ...prev,
                          manufacturing: value,
                        }))
                      }
                    />
                    <div className="mobileFilter-footer">
                      <button
                        type="button"
                        className="reset-btn"
                        onClick={() => {
                          resetFilters();
                          setShowFilter(false);
                        }}
                      >
                        {productPage.resetButton}
                      </button>
                      <button
                        type="button"
                        className="apply-btn"
                        onClick={applyMobileFilters}
                      >
                        {productPage.applyButton}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* Product Grid */}
              <ProductGrid
                products={filteredProducts}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;