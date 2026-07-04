import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CategoriesCard({
  categorySlug,
  item,
}) {
  const navigate = useNavigate();

  return (
    <div className="categoriesCard section">
      <div className="container">
        <img
          src={item.image}
          alt={item.title}
          className="categoriesCard-image"
          loading='lazy'
        />

        <div className="categoriesCard-overlay"></div>

        <div className="categoriesCard-content">

          <h3 className="light-heading categoriesCard-title">
            {item.title}
          </h3>

          <p className="cardsPara">
            {item.description}
          </p>

          <button
            className="explore-btn categoriesCard-btn"
            onClick={() =>
              navigate(
                `/categories/${item.slug}`
              )
            }
          >
            Explore Collection
            <ArrowRight size={14} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default CategoriesCard;