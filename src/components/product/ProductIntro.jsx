import React from 'react'
import useLanguage from "@/hooks/useLanguage";

function ProductIntro() {
    const { productIntro } = useLanguage();
    return (
        <section className="productIntro">
            <div className="container">
                {/* Header */}
                <div className='text-center'>
                    <span className="category-tag">
                       {productIntro.section.tag}
                    </span>
                    <h2 className="heading dark-heading">
                        {productIntro.section.title}   
                    </h2>
                    <p className="description dark-description productIntro-desc">
                        {productIntro.section.description}
                    </p>
                </div>
                {/* Stats */}
                <div className="productIntro-stats">
                    {productIntro.cards.map((item, index) => (
                        <div
                            className="productIntro-stat"
                            key={index}
                        >
                            <h3>
                                {item.value}
                            </h3>
                            <span>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ProductIntro