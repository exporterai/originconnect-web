import React from 'react'
import { howCreateValueData } from '@/data/service/howCreateValue'
import useLanguage from "@/hooks/useLanguage";

function HowCreateValue() {
  const { howCreateValueContent } = useLanguage();
  return (
    <>
      <div className="howCreateValue section light-bg">
        <div className="container">
          <div className='text-center'>
            <span className="category-tag">
              {howCreateValueContent.section.tag}
            </span>
            <div>
              <h2 className="heading dark-heading mb-3">
                {howCreateValueContent.section.title}
              </h2>

              <p className="description dark-description max-w-[600px] mx-auto">
                {howCreateValueContent.section.description}
              </p>
            </div>
          </div>
          <div className="howCreateValue-grid">
            {howCreateValueContent.cards.map((item, index) => {
              const data = howCreateValueData[index];
              return (
                <div
                  key={index}
                  className="howCreateValue-card"
                >
                  <div className="howCreateValue-content">
                    <div className="howCreateValue-icon">
                      <data.icon strokeWidth={2.5} className="icon-svg" />
                    </div>
                    <h3>
                      {item.title}
                    </h3>
                    <p>
                      {item.para}
                    </p>
                  </div>
                  <div className="howCreateValue-image-wrapper">
                    <img
                      src={data.image}
                      alt={item.title}
                      className="howCreateValue-image"
                      loading='lazy'
                    />
                  </div>
                  <div className="howCreateValue-pointer">
                    <h4>
                      {howCreateValueContent.pointerTitle}
                    </h4>
                    <ul>
                      {
                        item.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))
                      }
                    </ul>
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