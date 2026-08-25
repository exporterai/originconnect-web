import React from "react";
import { ArrowRight } from "lucide-react";
import letsConnectBg from "@/assets/images/categories/letsConnectBg.webp";
import useLanguage from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

function LetsConnect() {
  const { categoriesLetsConnect } = useLanguage();
  return (
    <>
      <div className="letsConnect">
        <div
          className="letsConnect-wrapper section"
          style={{
            backgroundImage: `url(${letsConnectBg})`,
          }}
        >
          <div className="container">
            <div className="letsConnect-content">
              <h2 className="heading dark-heading mb-4">
                {categoriesLetsConnect.title}
              </h2>
              <div className="letsConnect-heading-border"></div>
              <p className="description mb-6">
                {categoriesLetsConnect.description}
              </p>
              <Link
                to="/contact"
                className="letsConnect-btn"
                aria-label="Contact Origin Connect"
              >
                {categoriesLetsConnect.button}
                <span aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsConnect;