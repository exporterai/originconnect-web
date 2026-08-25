import brandsHeroBg from "@/assets/images/brands/brandsHeroBg.webp";
import useLanguage from "@/hooks/useLanguage";

const BrandsHero = () => {
  const { brandsHero } = useLanguage();
  return (
    <section
      className="brandsHero-wrapper"
      style={{
        backgroundImage: `url(${brandsHeroBg})`,
      }}
    >
      <div className="brandsHero-overlay">
        <div className="container">
          <div className="brandsHero-content">
            {/* <span className="brandsHero-tag">
              {brandsHero.tag}
            </span> */}
            <h1>{brandsHero.title}</h1>
            {/* <div className="brandsHero-divider" /> */}
            {/* <p>{brandsHero.description}</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsHero;