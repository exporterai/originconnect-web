import React from 'react'
import homeBuyer from '@/assets/images/home/homeBuyer.webp'
import homeManufactorer from '@/assets/images/home/homeManufactorer.webp'
import { Link } from 'react-router-dom'

const whoWeServeContent = [
    {
        image: homeBuyer,
        tag: "Buyers",
        title: "Source With Confidence",
        para: "Get access to reliable products, competitive pricing, and a trusted manufacturing network through a single point of contact.",
        linkText: "Start Sourcing",
        linkUrl: ""
    },
    {
        image: homeManufactorer,
        tag: "For Manufacturers",
        title: "Grow Your Global Business",
        para: "Partner with us to reach international buyers, explore new markets, and build a sustainable export business.",
        linkText: "Become a Partner",
        linkUrl: ""
    },
]
function WhoWeServe() {
    return (
        <>
            <div className="whoWeServe section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            Who We Serve
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                Built For Buyers & Manufacturers
                            </h2>
                            <p className="description dark-description max-w-[650px] mx-auto">
                                Whether you're sourcing quality products or expanding your manufacturing reach,
                                we help you connect, grow, and build long-term global partnerships.
                            </p>
                        </div>
                    </div>
                    <div className="whoWeServe-grid">
                        {whoWeServeContent.map((item, index) => (
                            <div className="whoWeServe-card" key={index}>
                                <div className="whoWeServe-image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="whoWeServe-image"
                                        loading='lazy'
                                    />
                                </div>

                                <div className="whoWeServe-content">
                                    <span className="category-tag">
                                        {item.tag}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p className="cardsPara">{item.para}</p>
                                    <Link to={item.linkUrl}>
                                        {item.linkText} ⟶
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeServe