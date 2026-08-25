import React, { useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import useLanguage from "@/hooks/useLanguage";

function ProductMobileFilter({
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
    const [active, setActive] = useState("category");
    return (
        <div className="mobileFilterBody">
            <div className="mobileFilterLeft">
                <div
                    className={active === "category" ? "active" : ""}
                    onClick={() => setActive("category")}
                >
                   {productPage.category}
                </div>
                <div
                    className={active === "productType" ? "active" : ""}
                    onClick={() => setActive("productType")}
                >
                   {productPage.productType}
                </div>
                <div
                    className={active === "industries" ? "active" : ""}
                    onClick={() => setActive("industries")}
                >
                  {productPage.industries}
                </div>
                <div
                    className={active === "manufacturing" ? "active" : ""}
                    onClick={() => setActive("manufacturing")}
                >
                   {productPage.manufacturing}
                </div>
            </div>
            <div className="mobileFilterRight">
                {
                    active === "category"
                    &&
                    <ProductFilter
                        options={categorieFilters}
                        type="category"
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                }
                {
                    active === "productType"
                    &&
                    <ProductFilter
                        type="multiple"
                        options={
                            productFilters[selectedCategory]
                                ?.productTypes
                        }
                        selected={selectedProductTypes}
                        onSelect={setSelectedProductTypes}
                    />
                }
                {
                    active === "industries"
                    &&
                    <ProductFilter
                        type="multiple"
                        options={
                            productFilters[selectedCategory]
                                ?.industries
                        }
                        selected={selectedIndustries}
                        onSelect={setSelectedIndustries}
                    />
                }
                {
                    active === "manufacturing"
                    &&
                    <ProductFilter
                        type="multiple"
                        options={manufacturingOptions}
                        selected={selectedManufacturing}
                        onSelect={setSelectedManufacturing}
                    />
                }
            </div>
        </div>
    )
}
export default ProductMobileFilter;