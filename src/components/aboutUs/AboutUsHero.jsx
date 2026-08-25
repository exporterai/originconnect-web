import React from 'react';
import useLanguage from "@/hooks/useLanguage";

function AboutUsHero() {
  const { aboutUsHero } = useLanguage();
  return (
    <div
      className="aboutUsHero text-center"
      style={{
        backgroundImage: `url(${aboutUsHero.image})`,
      }}
    >
    </div>
  )
}

export default AboutUsHero