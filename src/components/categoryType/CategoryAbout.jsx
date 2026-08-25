import { categoryContent } from "@/data/categoryType/categoryContent";
import useLanguage from "@/hooks/useLanguage";

const CategoryAbout = ({ category }) => {
    const { categoryAbout } = useLanguage();
    const content = categoryAbout[category];
    const imageData = categoryContent[category];
    if (!content) return null;
    return (
        <section className="categoryAbout section light-bg">
            <div className="container">
                <div>
                    <span className="category-tag">
                        {content.tag}
                    </span>
                    <div className="about-header">
                        <h2
                            className="heading dark-heading"
                        >
                            {content.title.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </h2>
                        <p className="description dark-description">
                            {content.description}
                        </p>
                    </div>
                </div>
                {/* Images */}
                <div className="about-grid">
                    {content.steps.map((step, index) => (
                        <div
                            key={index}
                            className="about-card group"
                        >
                            <img
                                src={imageData.aboutSteps[index].image}
                                alt={step.title}
                                className="about-card-image"
                                loading='lazy'
                            />
                            {/* Default Gradient */}
                            <div className="about-card-gradient" />
                            {/* Hover Overlay */}
                            <div className="about-card-hover" />
                            <div className="about-card-content">
                                <h3>{step.title}</h3>
                                <p className="cardsPara">{step.description}</p>
                                <div className="tags">
                                    {step.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryAbout;