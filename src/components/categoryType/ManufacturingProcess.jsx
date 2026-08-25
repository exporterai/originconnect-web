import { categoryContent } from "@/data/categoryType/categoryContent";
import useLanguage from "@/hooks/useLanguage";

const ManufacturingProcess = ({ category }) => {
  const { manufacturingProcess } = useLanguage();
const content = manufacturingProcess[category];
const imageData = categoryContent[category];
  if (!content) return null;
  return (
    <section className="manufacturingProcess section brown-bg">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <div>
            <span className="category-tag">
              {content.tag}
            </span>
            <h2 className="heading light-heading">
              {content.title.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <div>
            <p className="description light-description">
              {content.description}
            </p>
          </div>
        </div>
        {/* Steps */}
        <div className="process-grid">
          {content.steps.map((item, index) => (
            <div
              key={index}
              className="process-card"
            >
              <div className="process-image-wrapper">
                <img
                  src={imageData.processSteps[index].image}
                  alt={item.title}
                  className="process-image"
                    loading='lazy'
                />
                <div className="process-overlay"></div>
                <div className="process-step">
                  {imageData.processSteps[index].step} 
                  <span className="line"></span> 
                  <span className="tag">{item.tag}</span>
                </div>
              </div>
              <div className="process-content">
                <span className="process-tag">
                  {item.tag}
                </span>
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;