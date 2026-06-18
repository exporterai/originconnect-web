import React from "react";
import ProductCard from "./ProductCard";

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