import React, { useState, useEffect } from "react";
import {
  useSearchParams
} from "react-router-dom";
import ProductIntro from "@/components/product/ProductIntro";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSidebar from "@/components/product/ProductSidebar";
import { products } from "@/data/product/products";
import ProductMobileFilter from "@/components/product/ProductMobileFilter";
import { SlidersHorizontalIcon } from "lucide-react";

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "towels";
  const subcategory = searchParams.get("subcategory") || "";
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedProductTypes, setSelectedProductTypes] = useState(subcategory ? [subcategory] : []);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedManufacturing, setSelectedManufacturing] = useState([]);

  const [showFilter, setShowFilter] = useState(false);
  const [tempCategory, setTempCategory] = useState(selectedCategory);
  const [tempProductTypes, setTempProductTypes] = useState(selectedProductTypes);
  const [tempIndustries, setTempIndustries] = useState(selectedIndustries);
  const [tempManufacturing, setTempManufacturing] = useState(selectedManufacturing);
  const filteredProducts = products.filter(
    (item) => {
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
      )
    }
  )
  const totalFilters = selectedProductTypes.length + selectedIndustries.length + selectedManufacturing.length;
  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    setSelectedProductTypes(
      subcategory
        ?
        [subcategory]
        :
        []
    );
  }, [subcategory]);

  useEffect(() => {
    setSelectedIndustries([]);
    setSelectedManufacturing([]);
  }, [selectedCategory]);
  const resetFilters = () => {
    setSelectedCategory("towels");
    setSelectedProductTypes([]);
    setSelectedIndustries([]);
    setSelectedManufacturing([]);
    setTempCategory("towels");
    setTempProductTypes([]);
    setTempIndustries([]);
    setTempManufacturing([]);
  }
  return (
    <>
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
            <div className="mobile-filter-btn-wrap">
              <button
                className="mobile-filter-btn"
                onClick={() => setShowFilter(true)}
              >
                <span className="filter-icon">
                  <SlidersHorizontalIcon size={15} />
                  {
                    totalFilters > 0
                    &&
                    <span>
                      {totalFilters}
                    </span>
                  }
                </span>
                FILTER
              </button>
            </div>
            {
              showFilter && (
                <div className="mobileFilter">
                  <div
                    className="mobileFilter-overlay"
                    onClick={() => setShowFilter(false)}
                  ></div>
                  <div className="mobileFilter-wrapper">
                    <div className="mobileFilter-header">
                      <button
                        onClick={() => setShowFilter(false)}
                      >
                        ←
                      </button>
                      <h4>
                        Filters
                      </h4>
                    </div>
                    <ProductMobileFilter
                      selectedCategory={tempCategory}
                      setSelectedCategory={setTempCategory}
                      selectedProductTypes={tempProductTypes}
                      setSelectedProductTypes={setTempProductTypes}
                      selectedIndustries={tempIndustries}
                      setSelectedIndustries={setTempIndustries}
                      selectedManufacturing={tempManufacturing}
                      setSelectedManufacturing={setTempManufacturing}
                    />
                    <div className="mobileFilter-footer">
                      <button
                        className="reset-btn"
                        onClick={() => {
                          resetFilters();
                          setShowFilter(false);
                        }}>
                        RESET
                      </button>
                      <button
                        className="apply-btn"
                        onClick={() => {
                          setSelectedCategory(tempCategory)
                          setSelectedProductTypes(
                            tempProductTypes
                          )
                          setSelectedIndustries(
                            tempIndustries
                          )
                          setSelectedManufacturing(
                            tempManufacturing
                          )
                          setShowFilter(false)
                        }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
            <ProductGrid
              products={filteredProducts}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Products;