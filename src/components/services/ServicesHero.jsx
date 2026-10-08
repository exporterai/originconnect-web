import React from 'react'
import servicesHeroImage from "@/assets/images/services/services-hero.webp";
import useLanguage from "@/hooks/useLanguage";

function ServicesHero() {
  const { servicesHero } = useLanguage();
  return (
    <div className="servicesHero">
      <div
        className="servicesHero-wrapper section"
        style={{
          backgroundImage: `url(${servicesHeroImage})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="servicesHero-content">
            <h2 className="heading light-heading mb-6">
              {servicesHero.title}
            </h2>
            <p className="description text-[#C4CDD7] mb-6">
              {servicesHero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesHero