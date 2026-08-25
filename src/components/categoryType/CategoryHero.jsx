import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

const CategoryHero = ({ category }) => {
  const { categoriesBanner } = useLanguage();
  const localeData = categoriesBanner[category.slug];
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
            {localeData.title}
          </span>
          <h1 id="categoryHeroHeading">
            {localeData.shortTitle.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="category-description">
            {localeData.description}
          </p>
          <button
            onClick={() =>
              navigate(`/products?category=${category.slug}`)
            }
            className="explore-btn"
            aria-label={`Explore ${category.slug}`}
          >
            {localeData.buttonText}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;