import ReactCountryFlag from "react-country-flag";
import { countryBarData } from "@/data/layout/countryBar";
import useLanguage from "@/hooks/useLanguage";
import React from "react";

const CountryBar = () => {
    const lang = useLanguage();
    const host =
        typeof window !== "undefined"
            ? window.location.hostname.toLowerCase()
            : "";
    const currentDomain =
        host.includes("localhost")
            ? "originconnect.in"
            : host.replace(/^www\./, "");
    const visibleCountries = countryBarData.filter(
        item => item.domain !== currentDomain
    );
    return (
        <div className="country-bar">
            <div className="container country-bar-container">
                {visibleCountries.map((country, index) => (
                    <React.Fragment key={country.id}>
                        <div className="country-item">
                            <a
                                href={country.url}
                                className="country-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ReactCountryFlag
                                    countryCode={country.code}
                                    svg
                                    className="country-flag"
                                    alt={country.code}
                                />
                                <span className="country-name">
                                    {lang.countryNames[country.id]}
                                </span>
                                <span className="country-domain">
                                    {country.domain} 
                                    {/* ↗ */}
                                </span>
                            </a>
                        </div>
                        {index !== visibleCountries.length - 1 && (
                            <div className="country-divider" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CountryBar;