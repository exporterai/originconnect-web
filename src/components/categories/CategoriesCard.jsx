import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useLanguage from "@/hooks/useLanguage";

function CategoriesCard({ item, }) {
  const navigate = useNavigate();
  const { categoriesData, buttons } = useLanguage();

  const localeItem = categoriesData[item.slug] ?? {
    title: item.slug,
    description: "",
};

  return (
    <div className="categoriesCard section">
      <div className="container">
        <img
          src={item.image}
          alt={localeItem.title}
          className="categoriesCard-image"
          loading="lazy"
        />

        <div className="categoriesCard-overlay"></div>

        <div className="categoriesCard-content">

          <h3 className="light-heading categoriesCard-title">
            {localeItem.title}
          </h3>

          <p className="cardsPara">
            {localeItem.description}
          </p>

          <button
            className="explore-btn categoriesCard-btn"
            onClick={() =>
              navigate(
                `/categories/${item.slug}`
              )
            }
             aria-label={`Explore ${item.slug} collection`}
          >
            {buttons.exploreCollection}
            <ArrowRight size={14} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default CategoriesCard;