import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SubCategoryCard({
  categorySlug,
  item,
}) {
  const navigate = useNavigate();

  return (
    <div className="subCategoryCard section">
      <div className="container">

        <img
          src={item.image}
          alt={item.title}
          className="subCategoryCard-image"
        />

        <div className="subCategoryCard-overlay"></div>

        <div className="subCategoryCard-content">

          <span
            className="category-tag"
            style={{
              color: "rgba(245,241,236,.55)"
            }}
          >
            {item.tag}
          </span>

          <h3 className="light-heading subCategoryCard-title">
            {item.title}
          </h3>

          <p className="cardsPara">
            {item.description}
          </p>

          <div className="tags">
            {item.tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>

          <button
            className="explore-btn subCategoryCard-btn"
            onClick={() =>
              navigate(
                `/products?category=${categorySlug}&subcategory=${item.slug}`
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

export default SubCategoryCard;