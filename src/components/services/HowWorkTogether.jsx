import React, { useEffect, useState } from "react";
import { ChartNoAxesCombined, NotepadText, Search, Handshake, Settings } from 'lucide-react'
import useLanguage from "@/hooks/useLanguage";
const Icons = [
  Search,
  NotepadText,
  Handshake,
  Settings,
  ChartNoAxesCombined,
];

function HowWorkTogether() {
  const { howWorkTogetherContent } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="howWorkTogether section brown-bg">
        <div className="container">
          {/* Header */}
          <div className='text-center'>
            <span className="category-tag">
              {howWorkTogetherContent.section.tag}
            </span>

            <h2 className="heading light-heading">
              {howWorkTogetherContent.section.title}
            </h2>
            <p className="description light-description max-w-[650px] mx-auto">
              {howWorkTogetherContent.section.description}
            </p>
          </div>
          <div className="howWorkTogether-grid">
            {howWorkTogetherContent.cards.map((item, index) => {
              const Icon = Icons[index];
              return(
              <div key={index}>
                <div
                  className="howWorkTogether-card"
                >
                  <span className="icon">
                    <Icon size={20} strokeWidth={2.0} />
                  </span>
                  <span className="step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
                {
                  index !== howWorkTogetherContent.cards.length - 1 &&
                  <div className="arrow-wrapper">
                    <span className="arrow">
                      {isMobile ? "↓" : "→"}
                    </span>
                  </div>
                }
              </div>
            )})}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowWorkTogether