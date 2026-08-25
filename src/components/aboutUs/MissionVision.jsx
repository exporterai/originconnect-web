import React from 'react'
import missionVisionBg from "@/assets/images/about/msisionVisionBg1.webp";
import useLanguage from "@/hooks/useLanguage";

function MissionVision() {
  const { missionVisionContent } = useLanguage();
  return (
    <>
      <div className="missionVision section bg-[#FAF8F5]">
        <div className="container">
          <div className='text-center'>
            <span className="category-tag">
              {missionVisionContent.section.tag}
            </span>
            <div>
              <h2 className="heading dark-heading mb-3">
                {missionVisionContent.section.title}
              </h2>

              <p className="description dark-description max-w-[550px] mx-auto">
                {missionVisionContent.section.description}
              </p>
            </div>
          </div>
          <div
            className="missionVision-grid"
            style={{
              backgroundImage: `url(${missionVisionBg})`,
            }}
          >
            {missionVisionContent.cards.map((item, index) => (
              <div
                key={index}
                className="missionVision-card"
              >
                <h4 className="title">
                  {item.title}
                </h4>
                <div className="title-line"></div>
                <h3>
                  {item.heading}
                </h3>
                <div className="line"></div>
                <p>
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MissionVision