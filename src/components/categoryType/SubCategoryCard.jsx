import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useLanguage from "@/hooks/useLanguage";

function SubCategoryCard({
  categorySlug,
  item,
}) {
  const { subcategories, buttons } = useLanguage();
  const localeItem =
    subcategories[categorySlug].find(
      x => x.slug === item.slug
    );
  const navigate = useNavigate();
  return (
    <div className="subCategoryCard section">
      <div className="container">
        <img
          src={item.image}
         alt={localeItem.title}
          className="subCategoryCard-image"
          loading='lazy'
        />
        <div className="subCategoryCard-overlay"></div>
        <div className="subCategoryCard-content">
          <span
            className="category-tag"
            style={{
              color: "rgba(245,241,236,.55)"
            }}
          >
            {localeItem.tag}
          </span>
          <h3 className="light-heading subCategoryCard-title">
            {localeItem.title}
          </h3>
          <p className="cardsPara">
            {localeItem.description}
          </p>
          <div className="tags">
            {localeItem.tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>
          <button
            className="explore-btn subCategoryCard-btn"
             aria-label={`Explore ${item.slug}`}
            onClick={() =>
              navigate(
                `/products?category=${categorySlug}&subcategory=${item.slug}`
              )
            }
          >
           {buttons.exploreCollection}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;