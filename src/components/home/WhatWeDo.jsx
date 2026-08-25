import React from 'react'
import useLanguage from "@/hooks/useLanguage";
import {
    Handshake,
    ShieldCheck,
    UserRoundSearch,
    UserStar,
} from "lucide-react";

const icons = [
    UserRoundSearch,
    UserStar,
    ShieldCheck,
    Handshake,
];

function WhatWeDo() {
    const { whatWeDoContent } = useLanguage();
    return (
        <>
            <div className="whatWeDo section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            {whatWeDoContent.section.tag}
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                {whatWeDoContent.section.title}
                            </h2>

                            <p className="description dark-description max-w-[650px] mx-auto">
                                {whatWeDoContent.section.description}
                            </p>
                        </div>
                    </div>
                    <div className="whatWeDo-grid">
                        {whatWeDoContent.cards.map((item, index) => {
                            const Icon = icons[index];
                            return (
                                <div className="whatWeDo-card" key={index}>
                                    <span className="icon">
                                        <Icon size={18} strokeWidth={1.5} />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.para}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo