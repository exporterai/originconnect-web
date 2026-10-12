{/*const { servicesHero } = useLanguage();
<div className="servicesHero-content">
<h2 className="heading light-heading mb-6">
  {servicesHero.title}
</h2>
<p className="description text-[#C4CDD7] mb-6">
  {servicesHero.description}
</p>
</div> */}


import React from "react";
import servicesHeroImage from "@/assets/images/services/services-hero.webp";
import useLanguage from "@/hooks/useLanguage";
import { countryBarData } from "@/data/layout/countryBar";
import { ArrowUpRight } from "lucide-react";

function ServicesHero() {
  const lang = useLanguage();
  const { homeHeroContent } = lang;

  return (
    <section className="servicesHero">
      <div
        className="servicesHero-wrapper"
        style={{
          backgroundImage: `url(${servicesHeroImage})`,
        }}
      >
        <div className="servicesHero-overlay" />

        <div className="container servicesHero-container">
          <div className="servicesHero-content">

            {/* Main heading */}
            <div className="servicesHero-heading">
              <h1>
                {homeHeroContent.heading.map((item, index) => (
                  <span
                    key={`${item.label}-${index}`}
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                ))}
              </h1>
            </div>

            {/* Global presence / country links */}
            <div className="servicesHero-countries">
              <p className="servicesHero-tag">
                {homeHeroContent.tag}
              </p>
              <div className="servicesHero-countryList">
                {countryBarData.map((country) => {
                  const countryName =
                    lang.countryNames?.[country.id] || country.id;
                  const currentHost = window.location.hostname
                    .replace(/^www\./, "")
                    .toLowerCase();

                  const countryHost = new URL(country.url)
                    .hostname.replace(/^www\./, "")
                    .toLowerCase();

                  const isActive = currentHost === countryHost;
                  return (
                    <a
                      key={country.id}
                      href={country.url}
                      className={`servicesHero-countryCard ${isActive ? "is-active" : ""
                        }`}
                      aria-label={`${countryName} - ${country.domain}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <img
                        className="servicesHero-flag"
                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                        alt={`${countryName} flag`}
                        loading="lazy"
                      />
                      <div className="servicesHero-countryInfo">
                        <span className="servicesHero-countryName">
                          {countryName}
                        </span>
                        <span className="servicesHero-domain">
                          {country.domain}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="servicesHero-arrow"
                        size={21}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;