import React from 'react'
import howCreateValue1 from '@/assets/images/service/howCreateValue1.png'
import howCreateValue2 from '@/assets/images/service/howCreateValue2.png'
import howCreateValue3 from '@/assets/images/service/howCreateValue3.png'
import howCreateValue4 from '@/assets/images/service/howCreateValue4.png'
import { ChartNoAxesCombined, Hospital, Tag, UsersRound } from 'lucide-react'

const howCreateValueContent = [
  {
    image: howCreateValue1,
    icon: UsersRound,
    title: "Sourcing Partner",
    para: "Helping buyers identify, evaluate, and access trusted manufacturing capabilities.",
    tags: [
      "Importers",
      "Distributors",
      "Retail Buyers",
    ]
  },
  {
    image: howCreateValue2,
    icon: Tag,
    title: "Private Label Partner",
    para: "Supporting custom manufacturing programs tailored to your brand requirements.",
    tags: [
      "DTC Brands",
      "Retail Brands",
      "E-Commerce Companies",
    ]
  },
  {
    image: howCreateValue3,
    icon: Hospital,
    title: "Hospitality Partner",
    para: "Specialized sourcing support for hospitality groups and institutional buyers.",
    tags: [
      "Hotels",
      "Resorts",
      "Spa Groups",
    ]
  },
  {
    image: howCreateValue4,
    icon: ChartNoAxesCombined,
    title: "Market Expansion Partner",
    para: "Helping manufacturers connect with international opportunities and build sustainable export channels.",
    tags: [
      "Manufacturers",
      "Production Partners",
      "Export-Ready Businesses",
    ]
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
                <div className="howCreateValue-content">
                  <div className="howCreateValue-icon">
                    <item.icon strokeWidth={2.5} className="icon-svg" />
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
                    src={item.image}
                    alt={item.title}
                    className="howCreateValue-image"
                  />
                </div>
                <div className="howCreateValue-pointer">
                  <h4>
                    Ideal for
                  </h4>
                  <ul>
                    {
                    item.tags.map((tag,index)=>(
                      <li key={index}>{tag}</li>
                    ))
                  }
                  </ul>
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