import { CalendarDays, Factory, Globe, ShoppingBag } from 'lucide-react'
import React from 'react'

const expansionRoadmapConnect = [
  {
    icon: ShoppingBag,
    title: "Consumer & Lifestyle Products",
    para: "Expanding access to high-quality consumer goods, home products, and lifestyle-focused categories."
  },
  {
    icon: Factory,
    title: "Industrial & Specialized Manufacturing",
    para: "Connecting buyers with advanced industrial capabilities and niche production expertise."
  },
  {
    icon: Globe,
    title: "Emerging Opportunities",
    para: "Identifying future categories driven by evolving global demand and market trends."
  },
  {
    icon: CalendarDays,
    title: "Coming Soon",
    para: "New manufacturing categories and capabilities joining the Origin Connect ecosystem."
  },
]
function ExpansionRoadmap() {
  return (
    <>
      <section className="expansionRoadmap section brown-bg">
        <div className="container">
          {/* Header */}
          <div className='text-center'>
            <span className="category-tag">
              CATEGORY EXPANSION ROADMAP
            </span>

            <h2 className="heading light-heading">
              Building A Broader Manufacturing Ecosystem
            </h2>
            <p className="description light-description max-w-[650px] mx-auto">
              Our vision extends beyond a single industry. We are continuously expanding manufacturing access across new sectors, capabilities, and product categories.
            </p>
          </div>
          <div className="expansionRoadmap-grid">
            {expansionRoadmapConnect.map((item, index) => (
              <div
                className="expansionRoadmap-card" key={index}
              >
                <span className="icon">
                  <item.icon size={20} strokeWidth={1.5} />
                </span>
                <span className="step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ExpansionRoadmap