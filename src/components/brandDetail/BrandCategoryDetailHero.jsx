import React from "react";
import { Link, useParams } from "react-router-dom";
import {
    House,
    ChevronRight,
    Layers3,
    Feather,
    ShieldCheck,
} from "lucide-react";

import useLanguage from "@/hooks/useLanguage";
import { brandCategoriesData } from "@/data/brands/brandCategoriesData";
import { brandSubcategoriesData } from "@/data/brands/brandSubcategoriesData";

function BrandCategoryHero() {
    const { brandSlug, categorySlug, subcategorySlug } = useParams();
    const {
        brandCategoriesContent,
        brandsContent,
        brandCollaborationContent,
    } = useLanguage();
    const categoryData =
        brandCategoriesData?.[brandSlug]?.[categorySlug];
    const categoryContent = subcategorySlug
        ? brandCategoriesContent?.[brandSlug]
            ?.[categorySlug]
            ?.subCategoriesSection
            ?.subCategories
        ?.[subcategorySlug]
        : brandCategoriesContent?.[brandSlug]
        ?.[categorySlug];
    const heroContent = brandsContent?.hero;
    const brandContent = brandsContent?.[brandSlug];
    if (
        !categoryData ||
        !categoryContent ||
        !brandContent
    ) {
        return null;
    }
    const featureIcons = [
        Layers3,
        Feather,
        ShieldCheck,
    ];
    const features =
        categoryContent?.features || [];

    const heroImage = subcategorySlug
        ? brandSubcategoriesData?.[brandSlug]
            ?.[categorySlug]
            ?.[subcategorySlug]
            ?.image
        : categoryData.image;
    return (
        <section className="brandCategoryHero section">
            {/* Hero Background Image */}
            <div
                className="brandCategoryHero-background"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />
            {/* Beige Overlay */}
            <div className="brandCategoryHero-overlay" />
            <div className="container brandCategoryHero-container">
                <div className="brandCategoryHero-content">
                    <div className="brandCollab-title">
                        <span className="oc"> {brandCollaborationContent.titlePrefix}</span>
                        {brandContent.name}
                    </div>
                    <nav
                        className="brandCategoryHero-breadcrumb"
                        aria-label="Breadcrumb"
                    >
                        {/* Home */}
                        <Link
                            to="/"
                            className="brandCategoryHero-breadcrumb-link brandCategoryHero-breadcrumb-home"
                            aria-label="Go to Home page"
                        >
                            <House
                                aria-hidden="true"
                                size={13}
                                strokeWidth={1.6}
                            />
                            <span>
                                {heroContent?.homeLabel}
                            </span>
                        </Link>
                        <ChevronRight
                            aria-hidden="true"
                            className="brandCategoryHero-breadcrumb-separator"
                            size={13}
                        />
                        {/* Brands */}
                        <Link
                            to="/brands"
                            className="brandCategoryHero-breadcrumb-link"
                            aria-label="Go to Brands page"
                        >
                            {heroContent?.brandsLabel}
                        </Link>
                        <ChevronRight
                            aria-hidden="true"
                            className="brandCategoryHero-breadcrumb-separator"
                            size={13}
                        />
                        {/* BrandName */}
                        {/* <Link
                        to={`/brands/${brandSlug}`}
                        className="brandCategoryHero-breadcrumb-link"
                    >
                        {brandContent.name}
                    </Link> */}
                        <span
                            className="brandCategoryHero-breadcrumb-link"
                        >
                            <span className="oc">{brandCollaborationContent.titlePrefix}</span>
                            {brandContent.name}
                        </span>
                        {subcategorySlug && (
                            <>
                                <ChevronRight
                                    className="brandCategoryHero-breadcrumb-separator"
                                    size={13}
                                />
                                <Link
                                    to={`/brands/${brandSlug}/${categorySlug}`}
                                    className="brandCategoryHero-breadcrumb-link"
                                    aria-label="Go to Category page"
                                >
                                    {brandCategoriesContent?.[brandSlug]?.[categorySlug]?.title}
                                </Link>
                            </>
                        )}
                        <ChevronRight
                            className="brandCategoryHero-breadcrumb-separator"
                            size={13}
                        />
                        {/* Current Category */}
                        <span className="brandCategoryHero-breadcrumb-current">
                            {categoryContent.title}
                        </span>
                    </nav>
                    {/* Brand */}
                    {/* Title */}
                    <h1 className="brandCategoryHero-title">
                        {categoryContent.title}
                    </h1>
                    {/* Description */}
                    <p className="brandCategoryHero-description">
                        {categoryContent.description}
                    </p>
                    {/* Features */}
                    <div className="brandCategoryHero-features">
                        {features.map((feature, index) => {
                            const Icon = featureIcons[index];

                            return (
                                <div
                                    className="brandCategoryHero-feature"
                                    key={index}
                                >
                                    <div className="brandCategoryHero-feature-icon">
                                        <Icon
                                            size={30}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div className="brandCategoryHero-feature-content">
                                        <h3>{feature.title}</h3>

                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandCategoryHero;