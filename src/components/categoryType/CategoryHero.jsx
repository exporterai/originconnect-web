import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryHero = ({ category }) => {
  const navigate = useNavigate();

  return (
    <section
      className="category-hero section"
      style={{
        backgroundImage: `url(${category.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="category-hero-content">
          <span className="category-tag">
            {category.title}
          </span>

          <h1 id="categoryHeroHeading">
            {category.shortTitle.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="category-description">
            {category.description}
          </p>

          <button
            onClick={() =>
              navigate(`/products?category=${category.slug}`)
            }
            className="explore-btn"
          >
            {category.buttonText}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;