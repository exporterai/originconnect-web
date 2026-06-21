import React from 'react'
import ManufacturingEcosystem1 from '@/assets/images/home/ManufacturingEcosystem-1.png'
import ManufacturingEcosystem2 from '@/assets/images/home/ManufacturingEcosystem-2.png'
import { Link } from 'react-router-dom'

const manufacturingEcosystem = [
    {
        image: ManufacturingEcosystem1,
        title: "Home & Hospitality Manufacturing",
        description: "Connecting buyers with specialized manufacturing partners for hospitality, home, and commercial product programs tailored to international market requirements.",
        linkText: "DISCOVER ⟶",
        isComingSoon: false,
        linkUrl: "/categories",
    },
    {
        image: ManufacturingEcosystem2,
        title: "Emerging Manufacturing Categories",
        description: "Continuously expanding our manufacturing ecosystem to unlock new categories, capabilities, and global sourcing opportunities.",
        linkText: "COMING SOON",
        isComingSoon: true,
    },
]
function ManufacturingEcosystem() {
    return (
        <>
            <section className="manufacturingEcosystem section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div>
                        <span className="category-tag">
                            MANUFACTURING ECOSYSTEM ACCESS
                        </span>

                        <h2 className="heading light-heading">
                            Access India's Manufacturing Ecosystem
                        </h2>
                        <p className="description light-description">
                            Access trusted manufacturing capabilities through a curated network of production partners.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="manufacturingEcosystem-grid">
                        {manufacturingEcosystem.map((item, index) => (
                            <div
                                key={index}
                                className="manufacturingEcosystem-card"
                            >
                                <div className="manufacturingEcosystem-image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="manufacturingEcosystem-image"
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
                                        <Link to={item.linkUrl}>
                                            {item.linkText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ManufacturingEcosystem