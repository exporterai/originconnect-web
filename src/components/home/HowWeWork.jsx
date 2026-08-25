import React from 'react'
import useLanguage from "@/hooks/useLanguage";

function HowWeWork() {
    const { howWeWorkContent } = useLanguage();
  return (
    <>
            <div className="howWeWork section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            {howWeWorkContent.section.tag}
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                {howWeWorkContent.section.title}
                            </h2>
                            {/* <p className="description dark-description max-w-[650px] mx-auto">
                                We bridge the gap between international buyers and trusted Indian manufacturers through sourcing, market development, production coordination, and export execution.
                            </p> */}
                        </div>
                    </div>
                    <div className="howWeWork-grid">
                        {howWeWorkContent.cards.map((item, index) => (
                            <div className="howWeWork-card" key={index}>
                                <h3>{item.step} {item.title}</h3>
                                <p>{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
  )
}

export default HowWeWork