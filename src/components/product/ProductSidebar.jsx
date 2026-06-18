import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductFilter from "@/components/product/ProductFilter";
import { categorieFilters } from "@/data/product/categorieFilters";
import { productFilters } from "@/data/product/productFilters";
import { manufacturingOptions } from "@/data/product/manufacturingOptions";


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
    <aside className="productSidebar">
      {/* Category */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("category")}
        >
          <h4>
            Category
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.category ? "rotate" : ""}
            `}
          />
        </div>
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
        <div
          className="filter-header"
          onClick={() => toggleSection("productType")}
        >
          <h4>
            Product Type
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.productType ? "rotate" : ""}
            `}
          />
        </div>
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
        <div
          className="filter-header"
          onClick={() => toggleSection("industries")}
        >
          <h4>
            Industries
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.industries ? "rotate" : ""}
            `}
          />
        </div>
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
        <div
          className="filter-header"
          onClick={() => toggleSection("manufacturing")}
        >
          <h4>
            Manufacturing
          </h4>
          <ChevronDown
            size={18}
            className={`
            filter-arrow
            ${open.manufacturing ? "rotate" : ""}
            `}
          />
        </div>
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
    </aside>
  )
}

export default ProductSidebar