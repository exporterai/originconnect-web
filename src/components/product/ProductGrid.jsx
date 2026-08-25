import React from "react";
import ProductCard from "@/components/product/ProductCard";
import useLanguage from "@/hooks/useLanguage";

function ProductGrid({ products }) {
    const { productPage } = useLanguage();
    if (products.length === 0) {
        return (
            <div className="no-products">
                {productPage.noProducts}
            </div>
        );
    }
    return (
        <div className="product-grid">
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}

export default ProductGrid;