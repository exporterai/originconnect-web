import React, { useEffect, useState } from "react";
import { Search, Handshake, Settings, ChartNoAxesColumn, ShieldCheck } from 'lucide-react'

const howCategoriesEnterEcosystemConnect = [
  {
    icon: Search,
    title: "Manufacturing Capability Assessment",
    para: "Understanding your sourcing, manufacturing, or growth requirements."
  },
  {
    icon: ShieldCheck,
    title: "Quality Evaluation",
    para: "Ensuring products meet international quality benchmarks."
  },
  {
    icon: Settings,
    title: "Export Readiness",
    para: "Verifying compliance, documentation, and export capabilities."
  },
  {
    icon: ChartNoAxesColumn,
    title: "Commercial Viability",
    para: "Assessing market demand, pricing competitiveness, and scalability."
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership Potential",
    para: "Building sustainable, trust-driven partnerships for long-term growth."
  },
]
function HowCategoriesEnterEcosystem() {
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
              HOW CATEGORIES ENTER THE ECOSYSTEM
            </span>

            <h2 className="heading dark-heading">
              Every Category Is Added Through The Same Standards
            </h2>
            {/* <p className="description dark-description max-w-[650px] mx-auto">
              Every engagement begins with understanding your objectives and aligning the right manufacturing capabilities, resources, and support systems to help you achieve them.
            </p> */}
          </div>
          <div className="howCategoriesEnterEcosystem-grid">
            {howCategoriesEnterEcosystemConnect.map((item, index) => (
              <div key={index}>
                <div
                  className="howCategoriesEnterEcosystem-card"
                >
                  <span className="icon">
                    <item.icon size={20} strokeWidth={2.0} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
                {
                  index !== howCategoriesEnterEcosystemConnect.length - 1 &&
                  <div className="arrow-wrapper">
                    <span className="arrow">
                      {isMobile ? "↓" : "→"}
                    </span>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowCategoriesEnterEcosystem