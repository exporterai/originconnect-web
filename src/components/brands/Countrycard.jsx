import { Link } from "react-router-dom";
import { ArrowRight, Layers, BarChart3, ShieldCheck, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import useLanguage from "@/hooks/useLanguage";
import { brandsData } from "@/data/brands/brandsData";

function Countrycard({ countryKey, countryData }) {
  const { brandsCountryGrid } = useLanguage();
  const content =
    brandsCountryGrid.countries[countryKey];
  const totalBrands =
    Object.keys(
      brandsData[countryKey]?.brands || {}
    ).length;
  const stats = [
    {
      icon: Layers,
      value: totalBrands,
      label: brandsCountryGrid.commonText.brands,
    },
    {
      icon: BarChart3,
      value: 0,
      label: brandsCountryGrid.commonText.emergingBrands,
    },
    {
      icon: ShieldCheck,
      value: 0,
      label: brandsCountryGrid.commonText.verifiedBrands,
    },
    {
      icon: Star,
      value: 0,
      label: brandsCountryGrid.commonText.recommendedBrands,
    },
  ];
  return (
    <Link
      to={`/brands/${countryKey}`}
      className="countryCard"
    >
      {/* LEFT */}
      <div className="countryCard-left">
        <div className="countryCardLeft-content">
          <ReactCountryFlag
            countryCode={countryData.code}
            svg
            className="countryCard-flag"
          />
          <h3>{content.title}</h3>
          <div className="countryCard-divider" />
          <p>{content.tag}</p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="countryCard-right">
        <div className="countryCard-top">
          <h4>{content.headline}</h4>
        </div>
        <div className="countryCard-stats">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="countryCard-statBox"
              >
                <div className="icon">
                  <Icon size={20} />
                </div>
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="countryCard-action">
          <span>
            {brandsCountryGrid.commonText.viewbrands}
          </span>
          <div className="countryCard-arrow">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Countrycard;