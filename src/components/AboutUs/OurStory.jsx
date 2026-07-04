import React from 'react'
import aboutUsOurStoryImg from '@/assets/images/about/AboutUs-ourstory.webp'
import { Globe, Package, TextSearch, UsersRound } from 'lucide-react'

const ourStoryContent = [
    {
        icon: TextSearch,
        para: "Finding the right manufacturing partner can be time-consuming and uncertain."
    },
    {
        icon: Globe,
        para: "Accessing the right international buyers can be challenging for manufacturers."
    },
    {
        icon: Package,
        para: "Origin Connect was created to bridge this gap through market intelligence and trusted partnerships."
    },
    {
        icon: UsersRound,
        para: "We bring together the right opportunities, people and processes to build long-term global success."
    },
]
function OurStory() {
    return (
        <>
            <div className="ourStory section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            Our Story
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                Bridging The Gap. Creating Global Opportunities.
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
                                alt="aboutUsOurStoryImg"
                                loading='lazy'
                            />
                        </div>
                        {ourStoryContent.map((item, index) => (
                            <div className="ourStory-card" key={index}>
                                <span className="icon">
                                    <item.icon size={20} strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory