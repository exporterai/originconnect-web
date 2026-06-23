import React from 'react'
// import missionVisionBg from "@/assets/images/about/missionVisionBg.png";
import missionVisionBg from "@/assets/images/about/msisionVisionBg1.png";

const missionVisionContent = [
  {
    title: "Our Mission",
    heading: "Creating sustainable global business opportunities.",
    para: "Through trusted manufacturing partnerships, we connect global buyers with reliable partners, enable long-term growth, and create value that extends far beyond transactions."
  },
  {
    title: "OUR VISION",
    heading: "To become the most trusted bridge between global buyers and India's manufacturing ecosystem.",
    para: "We aim to build a future where reliable partnerships, transparency, and intelligence unlock global opportunities and drive sustainable success for all stakeholders."
  },
]

function MissionVision() {
  return (
    <>
      <div className="missionVision section bg-[#FAF8F5]">
        <div className="container">
          <div className='text-center'>
            <span className="category-tag">
              MISSION & VISION
            </span>
            <div>
              <h2 className="heading dark-heading mb-3">
                The Purpose Behind Origin Connect
              </h2>

              <p className="description dark-description max-w-[550px] mx-auto">
                We believe global business grows when trusted partnerships, market intelligence, and execution excellence come together.
              </p>
            </div>
          </div>
          <div
            className="missionVision-grid"
            style={{
              backgroundImage: `url(${missionVisionBg})`,
            }}
          >
            {missionVisionContent.map((item, index) => (
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