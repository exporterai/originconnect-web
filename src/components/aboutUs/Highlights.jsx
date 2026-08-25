import React, { useEffect, useState } from "react";
import useLanguage from "@/hooks/useLanguage";

function AboutUsHighlights() {
  const { highlights } = useLanguage();
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