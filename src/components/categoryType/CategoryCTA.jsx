import { ArrowRight } from "lucide-react";

const CategoryCTA = () => {
    return (
        <section className="categoryCta section light-bg">
            <div className="container">

                <div className="categoryCta-wrapper">

                    <span className="category-tag categoryCta-tag">
                        BEGIN YOUR ORDER
                    </span>

                    <h2 className="heading dark-heading">
                        Let's Build Your
                        <br />
                        Hospitality Collection
                    </h2>

                    <p className="description dark-description">
                        Tell us your property type, volume requirements, and specification preferences. We will prepare a tailored collection proposal within 48 hours.
                    </p>

                    <div className="btn-wrapper">
                        <button className="btn dark-btn">
                            ENQUIRE NOW
                        </button>
                        <button className="btn transparent-btn">
                            WHATSAPP INQUIRY
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CategoryCTA;