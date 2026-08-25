import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductFilter from "@/components/product/ProductFilter";
import useLanguage from "@/hooks/useLanguage";

function ProductSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedProductTypes,
  setSelectedProductTypes,
  selectedIndustries,
  setSelectedIndustries,
  selectedManufacturing,
  setSelectedManufacturing
}) {
  const {
    categorieFilters,
    productFilters,
    manufacturingOptions,
    productPage,
  } = useLanguage();

  const resetFilters = () => {
    setSelectedCategory("towels");
    setSelectedProductTypes([]);
    setSelectedIndustries([]);
    setSelectedManufacturing([]);
  }
  const [open, setOpen] = useState({
    category: true,
    productType: false,
    industries: false,
    manufacturing: false,
  });
  const toggleSection = (key) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  return (
    <aside className="productSidebar" aria-label="Product filters">
      <div className="filter-top">
        <h3>
          {productPage.filterTitle}
        </h3>
        <button
          type="reset"
          onClick={resetFilters}
        >
          {productPage.clearAll}
        </button>
      </div>
      <div className="activeFilters">
        {
          selectedCategory
          &&
          <span>
            {selectedCategory}
          </span>
        }
        {
          selectedProductTypes.map(item =>
            <span key={item}>
              {item}
              <button
                type="button"
                aria-label={`Remove ${item} filter`}
                onClick={() =>
                  setSelectedProductTypes(
                    selectedProductTypes.filter(
                      v => v !== item))}>
                ×
              </button>
            </span>
          )
        }
      </div>
      {/* Category */}
      <div className="filter-section">
        <button
          type="button"
          className="filter-header"
          onClick={() => toggleSection("category")}
          aria-expanded={open.category}
        >
          <h4>
            {productPage.category}
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.category ? "rotate" : ""}
            `}
          />
        </button>
        {
          open.category && (
            <ProductFilter
              options={categorieFilters}
              type="category"
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          )
        }
      </div>
      {/* Product Type */}
      <div className="filter-section">
        <button
          type="button"
          className="filter-header"
          onClick={() => toggleSection("productType")}
          aria-expanded={open.productType}
        >
          <h4>
            {productPage.productType}
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.productType ? "rotate" : ""}
            `}
          />
        </button>
        {
          open.productType && (
            <ProductFilter
              type="multiple"
              options={
                productFilters[selectedCategory]?.productTypes
              }
              selected={selectedProductTypes}
              onSelect={setSelectedProductTypes}
            />
          )
        }
      </div>
      {/* Industries */}
      <div className="filter-section">
        <button
          type="button"
          className="filter-header"
          onClick={() => toggleSection("industries")}
          aria-expanded={open.industries}
        >
          <h4>
            {productPage.industries}
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.industries ? "rotate" : ""}
            `}
          />
        </button>
        {
          open.industries && (
            <ProductFilter
              type="multiple"
              options={
                productFilters[selectedCategory]?.industries
              }
              selected={selectedIndustries}
              onSelect={setSelectedIndustries}
            />
          )
        }
      </div>
      {/* Manufacturing */}
      <div className="filter-section">
        <button
          type="button"
          className="filter-header"
          onClick={() => toggleSection("manufacturing")}
          aria-expanded={open.manufacturing}
        >
          <h4>
            {productPage.manufacturing}
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.manufacturing ? "rotate" : ""}
            `}
          />
        </button>
        {
          open.manufacturing && (
            <ProductFilter
              type="multiple"
              options={manufacturingOptions}
              selected={selectedManufacturing}
              onSelect={setSelectedManufacturing}
            />
          )
        }
      </div>
    </aside >
  )
}

export default ProductSidebar