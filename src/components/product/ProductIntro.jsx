import React from 'react'

const stats = [
    {
        value: "8",
        label: "PRODUCT CATEGORIES",
    },
    {
        value: "Custom",
        label: "PRIVATE LABEL MANUFACTURING",
    },
    {
        value: "OEKO-TEX",
        label: "CERTIFIED PRODUCTION",
    },
    {
        value: "Global",
        label: "EXPORT CAPABILITIES",
    },
];

function ProductIntro() {
    return (
        <section className="productIntro">
            <div className="container">
                {/* Header */}
                <div className='text-center'>
                    <span className="category-tag">
                        TEXTILE COLLECTIONS
                    </span>
                    <h2 className="heading dark-heading">
                        Browse Hospitality Collections
                    </h2>
                    <p className="description dark-description productIntro-desc">
                        Explore premium hospitality textiles crafted for hotels,
                        resorts, spas, and global hospitality brands.
                    </p>
                </div>
                {/* Stats */}
                <div className="productIntro-stats">
                    {stats.map((item, index) => (
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