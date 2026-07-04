import React from 'react'
import originConnectModel from '@/assets/images/home/originConnectModel.svg'

function OriginConnectModel() {
    return (
        <>
            <section className="originConnectModel section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div className='text-center'>
                        <span className="category-tag">
                            THE ORIGIN CONNECT MODEL
                        </span>

                        <h2 className="heading light-heading">
                            One Partner. Complete Cross Border Trade Solutions.
                        </h2>
                        {/* <p className="description light-description">
                                Access trusted manufacturing capabilities through a curated network of production partners.
                            </p> */}
                    </div>
                    <div className="text-center mt-5">
                        <img
                            src={originConnectModel}
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