import { categoryContent } from "@/data/categoryType/categoryContent";

const CategoryAbout = ({ category }) => {
    const content = categoryContent[category];

    if (!content) return null;

    return (
        <section className="categoryAbout section light-bg">
            <div className="container">
                <div>
                    <span className="category-tag">
                        {content.aboutTag}
                    </span>
                    <div className="about-header">
                        <h2
                            className="heading dark-heading"
                        >
                            {content.aboutTitle.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </h2>

                        <p className="description dark-description">
                            {content.aboutDescription}
                        </p>
                    </div>
                </div>

                {/* Images */}
                <div className="about-grid">
                    {content.aboutSteps.map((step, index) => (
                        <div
                            key={index}
                            className="about-card group"
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                className="about-card-image"
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