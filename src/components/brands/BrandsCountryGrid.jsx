import Countrycard from "@/components/brands/Countrycard";
import { countriesData } from "@/data/brands/countriesData";
import useLanguage from "@/hooks/useLanguage";

function BrandsCountryGrid() {
  const { brandsCountryGrid } =    useLanguage();
  return (
    <section className="brandsCountryGrid">
      <div className="container">
        <div className="brandsCountryGrid-grid">
          {Object.entries(countriesData).map(
            ([countryKey, countryData]) => (
              <Countrycard
                key={countryKey}
                countryKey={countryKey}
                countryData={countryData}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandsCountryGrid;