import React from 'react';
import aboutUsHeroImg from '@/assets/images/about/AboutUs-hero.png'

function AboutUsHero() {
  return (
    <div
      className="aboutUsHero text-center"
      style={{
        backgroundImage: `url(${aboutUsHeroImg})`,
      }}
    >
    </div>
  )
}

export default AboutUsHero