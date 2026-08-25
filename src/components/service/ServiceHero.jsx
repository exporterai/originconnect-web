import React from 'react'
import serviceHeroImage from "@/assets/images/service/service-hero.webp";
import useLanguage from "@/hooks/useLanguage";

function ServiceHero() {
  const { serviceHero } = useLanguage();
  return (
    <div className="serviceHero">
      <div
        className="serviceHero-wrapper section"
        style={{
          backgroundImage: `url(${serviceHeroImage})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="serviceHero-content">
            <h2 className="heading light-heading mb-6">
              {serviceHero.title}
            </h2>
            <p className="description text-[#C4CDD7] mb-6">
              {serviceHero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero