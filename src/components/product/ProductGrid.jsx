import React from "react";
import ProductCard from "@/components/product/ProductCard";

function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {
                products.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    );
}

export default ProductGrid;