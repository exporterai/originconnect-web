import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import { brandCategoriesData } from "@/data/brands/brandCategoriesData";
import { brandProductsData } from "@/data/brands/brandProductsData";

function BrandProductsGrid() {
    const { brandSlug, categorySlug, subcategorySlug } = useParams();
    const { brandCategoriesContent } = useLanguage();
    const categoryData =
        brandCategoriesData?.[brandSlug]?.[categorySlug];
    const pageContent = subcategorySlug
        ? brandCategoriesContent?.[brandSlug]
            ?.[categorySlug]
            ?.subCategoriesSection
            ?.subCategories
        ?.[subcategorySlug]
        : brandCategoriesContent?.[brandSlug]
        ?.[categorySlug];
    const brandProducts =
        subcategorySlug
            ? brandProductsData?.[brandSlug]?.[
            categorySlug
            ]?.[subcategorySlug]
            : brandProductsData?.[brandSlug]?.[
            categorySlug
            ];
    const [sortBy, setSortBy] = useState("default");
    if (!categoryData || !pageContent) {
        return null;
    }
    const products = useMemo(() => {
        return Object.keys(brandProducts)
            .map((productSlug) => {
                const productData = brandProducts?.[productSlug];
                return {
                    slug: productSlug,
                    title:
                        pageContent?.productsSection?.products?.[
                            productSlug
                        ]?.title || productSlug,
                    description:
                        pageContent?.productsSection?.products?.[
                            productSlug
                        ]?.description || "",
                    image: productData?.gallery?.[0],
                    specifications:
                        productData?.specifications || [],
                };
            })
            .filter(Boolean);
    }, [pageContent, brandProducts]);
    const sortedProducts = useMemo(() => {
        const sorted = [...products];
        switch (sortBy) {
            case "name-asc":
                return sorted.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
            case "name-desc":
                return sorted.sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
            default:
                return sorted;
        }
    }, [products, sortBy]);
    return (
        <section className="brandProductsGrid section">
            <div className="container">
                {/* Header */}
                <div className="brandProductsGrid-header">
                    <div className="brandProductsGrid-heading">
                        <h2 className="brandProductsGrid-title">
                            {pageContent.productsSection?.title ||
                                `Our ${pageContent.title}`}
                        </h2>
                        <div className="brandProductsGrid-line" />
                        <p className="brandProductsGrid-description">
                            {pageContent.productsSection?.description ||
                                pageContent.description}
                        </p>
                    </div>
                    {/* Sort */}
                    <div className="brandProductsGrid-sort">
                        <label htmlFor="brand-product-sort">
                            {pageContent.productsSection?.sortLabel ||
                                "SORT BY:"}
                        </label>
                        <select
                            id="brand-product-sort"
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(event.target.value)
                            }
                        >
                            <option value="default">
                                Default
                            </option>
                            <option value="name-asc">
                                Name - A to Z
                            </option>
                            <option value="name-desc">
                                Name - Z to A
                            </option>
                        </select>
                    </div>
                </div>
                {/* Products */}
                <div className="brandProductsGrid-list">
                    {sortedProducts.map((product, index) => (
                        <Link
                            key={product.slug}
                            to={
                                subcategorySlug
                                    ? `/brands/${brandSlug}/${categorySlug}/subcategory/${subcategorySlug}/${product.slug}`
                                    : `/brands/${brandSlug}/${categorySlug}/${product.slug}`
                            }
                            aria-label={`View details for ${product.title}`}
                        >
                            <article className="brandProductCard">
                                {/* Image */}
                                <div className="brandProductCard-image">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                    />
                                </div>
                                {/* Content */}
                                <div className="brandProductCard-content">
                                    <h3 className="brandProductCard-title">
                                        {product.title}
                                    </h3>
                                    {/* <p className="brandProductsGrid-description">
                                        {product.description}
                                    </p> */}
                                    <div className="brandProductCard-footer">
                                        <span className="brandProductCard-details">
                                            {pageContent.productsSection?.viewDetails ||
                                                "VIEW DETAILS"}
                                        </span>
                                        <span
                                            className="brandProductCard-arrow"
                                            aria-label={`View ${product.title}`}
                                            aria-hidden="true"
                                        >
                                            <ArrowRight
                                                size={17}
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandProductsGrid;