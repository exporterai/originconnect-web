import React, { useState } from "react";
import ProductFilter from "@/components/product/ProductFilter";
import { categorieFilters } from "@/data/product/categorieFilters";
import { productFilters } from "@/data/product/productFilters";
import { manufacturingOptions } from "@/data/product/manufacturingOptions";

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
    const [active, setActive] = useState("category");
    return (
        <div className="mobileFilterBody">
            <div className="mobileFilterLeft">
                <div
                    className={active === "category" ? "active" : ""}
                    onClick={() => setActive("category")}
                >
                    Category
                </div>
                <div
                    className={active === "productType" ? "active" : ""}
                    onClick={() => setActive("productType")}
                >
                    Product Type
                </div>
                <div
                    className={active === "industries" ? "active" : ""}
                    onClick={() => setActive("industries")}
                >
                    Industries
                </div>
                <div
                    className={active === "manufacturing" ? "active" : ""}
                    onClick={() => setActive("manufacturing")}
                >
                    Manufacturing
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