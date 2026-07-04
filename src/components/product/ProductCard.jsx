import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
    return (
        <div className="productCard">
            <div className="productCard-image">
                <img
                    src={item.image}
                    alt={item.title}
                    loading='lazy'
                />
                <span className="productCard-label">
                    {item.label}
                </span>
            </div>
            <div className="productCard-content">
                <h3>
                    {item.title}
                </h3>
                <p>
                    {item.description}
                </p>
                <div className="productCard-tags">
                    {
                        item.tags.map((tag, index) => (
                            <span key={index}>
                                {tag}
                            </span>
                        ))
                    }
                </div>
                <div className="productCard-buttons">
                    <Link
                        to={`/products/${item.slug}`}
                        // className="product-btn product-btn-dark"
                        className="product-btn dark-btn"
                    >
                        View Collection
                    </Link>
                    <Link
                        to="/contact"
                        // className="product-btn product-btn-light"
                        className="product-btn transparent-btn"
                    >
                        Request Quote
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard