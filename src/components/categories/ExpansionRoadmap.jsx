import { CalendarDays, Factory, Globe, ShoppingBag } from 'lucide-react'
import useLanguage from "@/hooks/useLanguage";

const roadmapIcons = [
  ShoppingBag,
  Factory,
  Globe,
  CalendarDays,
];

function ExpansionRoadmap() {
  const { expansionRoadmap } = useLanguage();
  return (
    <>
      <section className="expansionRoadmap section brown-bg">
        <div className="container">
          {/* Header */}
          <div className='text-center'>
            <span className="category-tag">
              {expansionRoadmap.tag}
            </span>

            <h2 className="heading light-heading">
              {expansionRoadmap.title}
            </h2>
            <p className="description light-description max-w-[650px] mx-auto">
              {expansionRoadmap.description}
            </p>
          </div>
          <div className="expansionRoadmap-grid">
            {expansionRoadmap.items.map((item, index) => {
              const Icon = roadmapIcons[index];
              return (
                <div
                  className="expansionRoadmap-card"
                  key={index}
                >
                  <span className="icon">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                    />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ExpansionRoadmap