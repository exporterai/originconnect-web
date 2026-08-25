import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from "@/hooks/useLanguage";
import { manufacturingEcosystemImages } from "@/data/Home/manufacturingEcosystem";

function ManufacturingEcosystem() {
    const { manufacturingEcosystemContent } = useLanguage();
    return (
        <>
            <section className="manufacturingEcosystem section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div>
                        <span className="category-tag">
                            {manufacturingEcosystemContent.section.tag}
                        </span>

                        <h2 className="heading light-heading mb-4">
                            {manufacturingEcosystemContent.section.title}
                        </h2>
                        <p className="description light-description">
                            {manufacturingEcosystemContent.section.description}
                        </p>
                    </div>
                    {/* Steps */}
                    <div className="manufacturingEcosystem-grid">
                        {manufacturingEcosystemContent.cards.map((item, index) => {
                            const image = manufacturingEcosystemImages[index];
                            return (
                                <div
                                    key={index}
                                    className="manufacturingEcosystem-card"
                                >
                                    <div className="manufacturingEcosystem-image-wrapper">
                                        <img
                                            src={image.image}
                                            alt={item.title}
                                            className="manufacturingEcosystem-image"
                                            loading='lazy'
                                        />
                                        <div className="manufacturingEcosystem-overlay"></div>
                                    </div>
                                    <div className="manufacturingEcosystem-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        {item.isComingSoon ? (
                                            <span className="comingSoon">
                                                {item.linkText}
                                            </span>
                                        ) : (
                                            <Link
                                                to={item.linkUrl}
                                                aria-label={item.linkText}
                                            >
                                                {item.linkText} ⟶
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManufacturingEcosystem