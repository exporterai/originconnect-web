import React, { useState, useEffect } from "react";
import {
  useSearchParams
} from "react-router-dom";
import ProductIntro from "@/components/product/ProductIntro";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSidebar from "@/components/product/ProductSidebar";
import {
  products
} from "@/data/product/products";

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "towels";
  const subcategory = searchParams.get("subcategory") || "";
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedProductTypes, setSelectedProductTypes] = useState(subcategory ? [subcategory] : []);
  // const category = searchParams.get("category") || "bedsheets";

  const [selectedIndustries, setSelectedIndustries]
    = useState([]);
  const [selectedManufacturing, setSelectedManufacturing]
    = useState([]);
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