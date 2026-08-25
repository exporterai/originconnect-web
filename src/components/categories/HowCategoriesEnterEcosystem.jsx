import React, { useEffect, useState } from "react";
import { Search, Handshake, Settings, ChartNoAxesColumn, ShieldCheck } from 'lucide-react'
import useLanguage from "@/hooks/useLanguage";

const icons = [
    Search,
    ShieldCheck,
    Settings,
    ChartNoAxesColumn,
    Handshake,
];

function HowCategoriesEnterEcosystem() {
  const { howCategoriesEnter } = useLanguage();
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
      <section className="howCategoriesEnterEcosystem section light-bg">
        <div className="container">
          {/* Header */}
          <div className='text-center'>
            <span className="category-tag">
              {howCategoriesEnter.tag}
            </span>

            <h2 className="heading dark-heading">
              {howCategoriesEnter.title}
            </h2>
          </div>
          <div className="howCategoriesEnterEcosystem-grid">
            {howCategoriesEnter.items.map((item, index) => {
               const Icon = icons[index];
            return(
              <div key={index}>
                <div
                  className="howCategoriesEnterEcosystem-card"
                >
                  <span className="icon">
                    <Icon size={20} strokeWidth={2.0} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
                {
                  index !== howCategoriesEnter.items.length - 1 &&
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

export default HowCategoriesEnterEcosystem