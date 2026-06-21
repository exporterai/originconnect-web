import React from 'react'

const howWeWorkContent=[
    {
        step:"01",
        title:"Understand Requirements",
        para:"We begin by understanding your product specifications, quality standards, target market, and commercial objectives."
    },
    {
        step:"02",
        title:"Match The Right Manufacturer",
        para:"Based on your requirements, we identify and connect you with the most suitable manufacturing partner from our trusted network."
    },
    {
        step:"03",
        title:"Sampling & Approval",
        para:"Product samples are developed and refined to meet your exact expectations before production begins."
    },
    {
        step:"04",
        title:"Production Coordination",
        para:"We coordinate with manufacturing partners throughout the production cycle to ensure consistency and quality."
    },
    {
        step:"05",
        title:"Export & Delivery",
        para:"Once production is completed, we manage export documentation, logistics coordination, and shipment execution."
    },
]

function HowWeWork() {
  return (
    <>
            <div className="howWeWork section light-bg">
                <div className="container">
                    <div className='text-center'>
                        <span className="category-tag">
                            How We Work
                        </span>
                        <div>
                            <h2 className="heading dark-heading mb-5">
                                Simple Process. Strong Results.
                            </h2>
                            {/* <p className="description dark-description max-w-[650px] mx-auto">
                                We bridge the gap between international buyers and trusted Indian manufacturers through sourcing, market development, production coordination, and export execution.
                            </p> */}
                        </div>
                    </div>
                    <div className="howWeWork-grid">
                        {howWeWorkContent.map((item, index) => (
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