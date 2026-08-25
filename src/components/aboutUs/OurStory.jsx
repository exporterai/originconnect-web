import React from 'react'
import aboutUsOurStoryImg from "@/assets/images/about/AboutUs-ourstory.webp";
import useLanguage from "@/hooks/useLanguage";
import { Globe, Package, TextSearch, UsersRound } from "lucide-react";

const Icons = [
    TextSearch,
    Globe,
    Package,
    UsersRound,
];


function OurStory() {
    const { ourStoryContent } = useLanguage();
    return (
        <>
            <div className="ourStory section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            {ourStoryContent.section.tag}
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                {ourStoryContent.section.title}
                            </h2>
                            {/* <p className="description dark-description max-w-[650px] mx-auto">
                                We bridge the gap between international buyers and trusted Indian manufacturers through sourcing, market development, production coordination, and export execution.
                            </p> */}
                        </div>
                    </div>
                    <div className="ourStory-grid">
                        <div className="ourStory-image">
                            <img
                                src={aboutUsOurStoryImg}
                                alt={ourStoryContent.section.title}
                                loading='lazy'
                            />
                        </div>
                        {ourStoryContent.cards.map((item, index) => {
                            const Icon = Icons[index];
                            return (
                                <div className="ourStory-card" key={index}>
                                    <span className="icon">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <p>{item.para}</p>
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

export default OurStory;