import { ChartNoAxesCombined, Globe, Package, UsersRound } from 'lucide-react'
import React from 'react'

const whatMakesDifferentConnect=[
    {
        icon: UsersRound,
        title: "We Partner",
        para: "We work alongside manufacturers with extended global business partner."
    },
    {
        icon: Package,
        title: "We Coordinate",
        para: "From sourcing to shipment, we manage the entire process with precision and accountability."
    },
    {
        icon: Globe,
        title: "We Simplify",
        para: "We make international sourcing simple, efficient, and stress-free for global buyers."
    },
    {
        icon: ChartNoAxesCombined,
        title: "We Grow Together",
        para: "We are committed to long-term relationships and shared success."
    },
]

function WhatMakesDifferent() {
    return (
        <>
            <section className="whatMakesDifferent section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div className='text-center'>
                        <span className="category-tag">
                            WHAT MAKES US DIFFERENT
                        </span>

                        <h2 className="heading light-heading">
                            More Than A Connection. A Commitment.
                        </h2>
                        {/* <p className="description light-description">
                                Access trusted manufacturing capabilities through a curated network of production partners.
                            </p> */}
                    </div>
                   <div className="whatMakesDifferent-grid">
                        {whatMakesDifferentConnect.map((item, index) => (
                            <div
                                key={index}
                                className="whatMakesDifferent-card"
                            >
                               <span className="icon">
                                    <item.icon size={20} strokeWidth={2.5}/>
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.para}</p> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatMakesDifferent