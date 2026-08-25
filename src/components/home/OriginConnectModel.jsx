import React from 'react'
import useLanguage from "@/hooks/useLanguage";

function OriginConnectModel() {
    const { originConnectModelContent } = useLanguage();
    return (
        <>
            <section className="originConnectModel section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div className='text-center'>
                        <span className="category-tag">
                            {originConnectModelContent.tag}
                        </span>

                        <h2 className="heading light-heading">
                            {originConnectModelContent.title}
                        </h2>
                        {/* <p className="description light-description">
                                Access trusted manufacturing capabilities through a curated network of production partners.
                            </p> */}
                    </div>
                    <div className="text-center mt-5">
                        <img
                            src={originConnectModelContent.image}
                            alt="originConnectModel"
                            className='w-full'
                            loading='lazy'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OriginConnectModel