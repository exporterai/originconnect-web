import React from 'react'
import serviceHero from "@/assets/images/service/service-hero.png";

function ServiceHero() {
  return (
    <div className="serviceHero">
      <div
        className="serviceHero-wrapper section"
        style={{
          backgroundImage: `url(${serviceHero})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="serviceHero-content">
            <h2 className="heading light-heading mb-6">
              {/* LET'S WORK TOGETHER */}
              Flexible Partnership Models For Global Growth
            </h2>
            <p className="description text-[#C4CDD7] mb-6">
              Whether you're sourcing from India, building a private label brand, or expanding into new markets, Origin Connect provides the expertise and manufacturing access to help you grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero