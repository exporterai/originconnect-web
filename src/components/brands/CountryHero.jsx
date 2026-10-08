import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { countriesData } from "@/data/brands/countriesData";
import useLanguage from "@/hooks/useLanguage";
function CountryHero() {
  const { country } = useParams();
  const { brandsContent,brandsCountryGrid } = useLanguage();
  const countryData = countriesData[country];
  if (!countryData) return null;
  const content =
    brandsCountryGrid?.countries?.[country];
  return (
    <section
      className="countryHero"
      style={{
        backgroundImage: `url(${countryData.heroImage})`,
      }}
    >
      <div className="countryHero-overlay">
        <div className="container">
          {/* Breadcrumb */}
          <div className="countryHero-breadcrumb">
            <Link to="/">
              {brandsContent.label.homeLabel}
            </Link>
            <ChevronRight size={16} />
            <Link to="/brands">
              {brandsContent.label.brandsLabel}
            </Link>
            <ChevronRight size={16} />
            <span className="capitalize">
              {content?.title}
            </span>
          </div>
          {/* Content */}
          <div className="countryHeroContent">
            <div className="countryHeroFlag">
              <ReactCountryFlag
                countryCode={countryData.code}
                svg
                className="countryHeroFlag-icon"
              />
            </div>
            <div className="countryHeroContent-text">
              <h1>
                {brandsContent[country]?.hero.title}
              </h1>
              <p>
                {brandsContent[country]?.hero.description}
              </p>
            </div>
          </div>
        </div> </div>
    </section>
  );
}
export default CountryHero;