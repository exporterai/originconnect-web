import React from 'react'
// import categoriesHero from "@/assets/images/categories/categories-hero1.webp";
import categoriesHeroBg from "@/assets/images/categories/categories-hero.webp";
import useLanguage from "@/hooks/useLanguage";

function CategoriesHero() {
  const { categoriesHero } = useLanguage();
  return (
    <div className="categoriesHero">
      <div
        className="categoriesHero-wrapper section"
        style={{
          backgroundImage: `url(${categoriesHeroBg})`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="categoriesHero-content">
            <h2 className="heading light-heading mb-6">
              {categoriesHero.title}
            </h2>
            <p className="description text-[#C4CDD7] mb-6">
              {categoriesHero.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesHero