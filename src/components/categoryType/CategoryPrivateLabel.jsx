import useLanguage from "@/hooks/useLanguage";
import { privateLabelData } from "@/data/categoryType/privateLabelData";


function CategoryPrivateLabel() {
  const { privateLabel } = useLanguage();
  return (
    <section className="categoryPrivateLabel section light-bg">
      <div className="container">
        <div className="privateLabelWrapper">
          {/* LEFT */}
          <div className="privateLabelContent">
            <span className="category-tag">
              {privateLabel.tag}
            </span>
            <h2 className="heading dark-heading">
              {privateLabel.title.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="description dark-description">
              {privateLabel.description}
            </p>
            <div className="privateLabelPoints">
              {privateLabel.points.map((item, index) => (
                <div
                  key={index}
                  className="privateLabelPoint"
                >
                  {item}
                </div>
              ))}
            </div>
            <button className="btn transparent-btn" aria-label={privateLabel.button}>
              {privateLabel.button}
            </button>
          </div>
          {/* RIGHT */}
          <div className="privateLabelGrid">
            {privateLabelData.images.map(
              (item, index) => (
                <div
                  key={index}
                  className="privateLabelCard"
                >
                  <img
                    src={item.image}
                    alt={privateLabel.images[index].label}
                    loading='lazy'
                  />
                  <div className="privateLabelOverlay">
                    {privateLabel.images[index].label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPrivateLabel;