import { Factory, Globe, PackageCheck } from 'lucide-react'
import React from 'react'
import howCreateValue1 from '@/assets/images/about/howCreateValue1.png'
import howCreateValue2 from '@/assets/images/about/howCreateValue2.png'
import howCreateValue3 from '@/assets/images/about/howCreateValue3.png'

const howCreateValueContent = [
  {
    image:howCreateValue1,
    icon: Factory,
    title: "Trusted Manufacturing Network",
    para: "Access a curated network of export-ready manufacturers selected for capability, quality standards, and long-term reliability."
  },
  {
    image:howCreateValue2,
    icon: Globe,
    title: "Market Intelligence Driven",
    para: "Leverage trade data, market research, and buyer insights to identify opportunities, reduce risk, and make smarter decisions."
  },
  {
    image:howCreateValue3,
    icon: PackageCheck,
    title: "End-to-End Execution",
    para: "From supplier coordination and production oversight to logistics and documentation, we ensure seamless export execution."
  },
]

function HowCreateValue() {
  return (
    <>
      <div className="howCreateValue section light-bg">
        <div className="container">
          <div className='text-center'>
            <span className="category-tag">
              HOW ORIGIN CONNECT CREATES VALUE
            </span>
            <div>
              <h2 className="heading dark-heading mb-3">
                From Insight to Impact. Every Step, Covered.
              </h2>

              <p className="description dark-description max-w-[600px] mx-auto">
                  We combine a trusted manufacturing network, market intelligence, and end-to-end execution to create long-term value for buyers and manufacturers.
                </p>
            </div>
          </div>
          <div className="howCreateValue-grid">
            {howCreateValueContent.map((item, index) => (
              <div
                key={index}
                className="howCreateValue-card"
              >
                <div className="howCreateValue-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="howCreateValue-image"
                  />
                  <div className="howCreateValue-icon">
                    <item.icon strokeWidth={2} className="icon-svg" />
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
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HowCreateValue