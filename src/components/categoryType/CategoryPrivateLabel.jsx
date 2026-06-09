import { privateLabelData } from "@/data/privateLabelData";

function CategoryPrivateLabel() {
  return (
    <section className="categoryPrivateLabel section light-bg">
      <div className="container">

        <div className="privateLabelWrapper">

          {/* LEFT */}

          <div className="privateLabelContent">

            <span className="category-tag">
              {privateLabelData.tag}
            </span>

            <h2 className="heading dark-heading">
              {privateLabelData.title.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p className="description dark-description">
              {privateLabelData.description}
            </p>

            <div className="privateLabelPoints">
              {privateLabelData.points.map((item, index) => (
                <div
                  key={index}
                  className="privateLabelPoint"
                >
                  {item}
                </div>
              ))}
            </div>

            <button className="btn transparent-btn">
              Explore Private Label
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
                    alt={item.label}
                  />

                  <div className="privateLabelOverlay">
                    {item.label}
                  </div>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default CategoryPrivateLabel;