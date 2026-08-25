import React from 'react'
import useLanguage from "@/hooks/useLanguage";
import {
    ChartNoAxesCombined,
    Globe,
    Package,
    UsersRound,
} from "lucide-react";

const Icons = [
    UsersRound,
    Package,
    Globe,
    ChartNoAxesCombined,
];

function WhatMakesDifferent() {
    const { whatMakesDifferentContent } = useLanguage();
    return (
        <>
            <section className="whatMakesDifferent section brown-bg">
                <div className="container">
                    {/* Header */}
                    <div className='text-center'>
                        <span className="category-tag">
                            {whatMakesDifferentContent.section.tag ?? ""}
                        </span>
                        <h2 className="heading light-heading">
                            {whatMakesDifferentContent.section.title ?? ""}
                        </h2>
                        {/* <p className="description light-description">
                                Access trusted manufacturing capabilities through a curated network of production partners.
                            </p> */}
                    </div>
                    <div className="whatMakesDifferent-grid">
                        {whatMakesDifferentContent.cards.map((item, index) => {
                            const Icon = Icons[index];
                            return (
                                <div
                                    key={index}
                                    className="whatMakesDifferent-card"
                                >
                                    <span className="icon">
                                        <Icon size={20} strokeWidth={2.5} />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.para}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatMakesDifferent