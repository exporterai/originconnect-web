import React from 'react'
import useLanguage from "@/hooks/useLanguage";
import { howCreateValueAssets } from "@/data/about/howCreateValueAssets";

function HowCreateValue() {
  const { aboutHowCreateValueContent } = useLanguage();
  
  return (
    <>
      <div className="howCreateValue section light-bg">
        <div className="container">
          <div className='text-center'>
            <span className="category-tag">
              {aboutHowCreateValueContent.header.tag}
            </span>
            <div>
              <h2 className="heading dark-heading mb-3">
                {aboutHowCreateValueContent.header.title}
              </h2>

              <p className="description dark-description max-w-[600px] mx-auto">
                {aboutHowCreateValueContent.header.description}
              </p>
            </div>
          </div>
          <div className="howCreateValue-grid">
            {aboutHowCreateValueContent.cards.map((item, index) => {
              const asset = howCreateValueAssets[index];
              const Icon = asset.icon;
              return (
                <div
                  key={index}
                  className="howCreateValue-card"
                >
                  <div className="howCreateValue-image-wrapper">
                    <img
                      src={asset.image}
                      alt={item.title}
                      className="howCreateValue-image"
                      loading='lazy'
                    />
                    <div className="howCreateValue-icon">
                      <Icon strokeWidth={2} className="icon-svg" />
                    </div>
                  </div>
                  <div className="howCreateValue-content">
                    <h3>
                      {item.title}
                    </h3>
                    <div className="line"></div>
                    <p>
                      {item.para}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HowCreateValue