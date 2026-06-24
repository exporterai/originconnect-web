import React, { useEffect, useState } from "react";
import { ChartNoAxesCombined, NotepadText, Search, Handshake, Settings } from 'lucide-react'

const howWorkTogetherConnect = [
  {
    icon: Search,
    step: "01",
    title: "Understand Objectives",
    para: "Understanding your sourcing, manufacturing, or growth requirements."
  },
  {
    icon: NotepadText,
    step: "02",
    title: "Align Requirements",
    para: "Defining expectations around quality, capacity, timelines, and commercial objectives."
  },
  {
    icon: Handshake,
    step: "03",
    title: "Build The Right Partnership",
    para: "We make international sourcing simple, efficient, and stress-free for global buyers."
  },
  {
    icon: Settings,
    step: "04",
    title: "Coordinate Execution",
    para: "Supporting smooth collaboration across the engagement."
  },
  {
    icon: ChartNoAxesCombined,
    step: "05",
    title: "Support Long-Term Growth",
    para: "Building sustainable relationships designed for continued growth."
  },
]
function HowWorkTogether() {
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
              HOW WE WORK TOGETHER
            </span>

            <h2 className="heading light-heading">
              Built Around Long-Term Partnerships
            </h2>
            <p className="description light-description max-w-[650px] mx-auto">
              Every engagement begins with understanding your objectives and aligning the right manufacturing capabilities, resources, and support systems to help you achieve them.
            </p>
          </div>
          <div className="howWorkTogether-grid">
            {howWorkTogetherConnect.map((item, index) => (
              <div key={index}>
                <div
                  className="howWorkTogether-card"
                >
                  <span className="icon">
                    <item.icon size={20} strokeWidth={2.0} />
                  </span>
                  <span className="step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
                {
                  index !== howWorkTogetherConnect.length - 1 &&
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

export default HowWorkTogether