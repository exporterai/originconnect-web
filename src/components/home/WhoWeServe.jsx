import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from "@/hooks/useLanguage";
import { whoWeServeImages } from "@/data/Home/whoWeServe";

function WhoWeServe() {
    const { whoWeServeContent } = useLanguage();
    return (
        <>
            <div className="whoWeServe section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            {whoWeServeContent.section.tag}
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                {whoWeServeContent.section.title}
                            </h2>
                            <p className="description dark-description max-w-[650px] mx-auto">
                                {whoWeServeContent.section.description}
                            </p>
                        </div>
                    </div>
                    <div className="whoWeServe-grid">
                        {whoWeServeContent.cards.map((item, index) => {
                            const image = whoWeServeImages[index];
                            return (
                                <div className="whoWeServe-card" key={index}>
                                    <div className="whoWeServe-image-wrapper">
                                        <img
                                            src={image.image}
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
                                        <Link
                                            to={item.linkUrl}
                                            aria-label={item.linkText}
                                        >
                                            {item.linkText} ⟶
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeServe