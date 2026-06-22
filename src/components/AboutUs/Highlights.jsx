import React, { useEffect, useState } from "react";

const highlights = [
  "Curated Manufacturing Network",
  "Quality & Compliance Assured",
  "End-to-End Export Solutions",
  "Reliable, Transparent Partnership",
  "Global Trade Expertise",
];

function AboutUsHighlights() {
    const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setActive(true);
      }
      else{
        setActive(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <section className={`aboutUsHighlights ${active ? "active" : ""}`}>
      <div className="marquee">
        <div className="marquee-content">
          {[...highlights, ...highlights].map((item, index) => (
            <div className="highlight-item" key={index}>
              <span className="dot"></span>
              <span className="text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUsHighlights;