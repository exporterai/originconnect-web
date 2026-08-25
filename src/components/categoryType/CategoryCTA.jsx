import useLanguage from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const CategoryCTA = () => {
    const { categoryCTA } = useLanguage();
    return (
        <section className="categoryCta section light-bg">
            <div className="container">
                <div className="categoryCta-wrapper">
                    <span className="category-tag categoryCta-tag">
                        {categoryCTA.tag}
                    </span>
                    <h2 className="heading dark-heading">
                        {categoryCTA.title.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </h2>
                    <p className="description dark-description">
                        {categoryCTA.description}
                    </p>
                    <div className="btn-wrapper">
                        <Link
                            to="/contact"
                            className="btn dark-btn"
                            aria-label="Contact Origin Connect"
                        >
                            {categoryCTA.enquireButton}
                        </Link>
                        <a
                            href="https://wa.me/919227041987"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us on WhatsApp"
                            className="btn transparent-btn"
                        >
                            {categoryCTA.whatsappButton}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryCTA;