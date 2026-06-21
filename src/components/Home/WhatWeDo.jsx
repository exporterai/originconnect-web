import React from 'react'
import { Handshake, ShieldCheck, UserRoundSearch, UserStar } from "lucide-react"

const whatWeDoContent = [
    {
        icon: UserRoundSearch,
        title: "Curated Manufacturing Network",
        para: "Access trusted production partners across India's home textile sector."
    },
    {
        icon: UserStar,
        title: "Buyer-Focused Sourcing",
        para: "Solutions tailored to your product, quality, and commercial requirements."
    },
    {
        icon: ShieldCheck,
        title: "End-to-End Coordination",
        para: "From supplier selection to shipment delivery — we handle it all."
    },
    {
        icon: Handshake,
        title: "Long-Term Partnerships",
        para: "Built on reliability, transparency, and sustainable growth."
    },
]

function WhatWeDo() {
    return (
        <>
            <div className="whatWeDo section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            What We Do
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                One Partner. Complete Cross Border Trade Solutions.
                            </h2>

                            <p className="description dark-description max-w-[650px] mx-auto">
                                We bridge the gap between international buyers and trusted Indian manufacturers through sourcing, market development, production coordination, and export execution.
                            </p>
                        </div>
                    </div>
                    <div className="whatWeDo-grid">
                        {whatWeDoContent.map((item, index) => (
                            <div className="whatWeDo-card" key={index}>
                                <span className="icon">
                                    <item.icon size={18} strokeWidth={1.5}/>
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo