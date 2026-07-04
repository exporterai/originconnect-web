import React from 'react'
// import categoriesHero from "@/assets/images/categories/categories-hero1.webp";
import categoriesHero from "@/assets/images/categories/categories-hero.webp";

function CategoriesHero() {
  return (
      <div className="categoriesHero">
          <div
            className="categoriesHero-wrapper section"
            style={{
              backgroundImage: `url(${categoriesHero})`,
            }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="categoriesHero-content">
                <h2 className="heading light-heading mb-6">
                  {/* LET'S WORK TOGETHER */}
                  Manufacturing Categories. Built For Growth.
                </h2>
                <p className="description text-[#C4CDD7] mb-6">
                  Explore manufacturing categories available through the Origin Connect ecosystem today while discovering opportunities across future production sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CategoriesHero