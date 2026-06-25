import React from "react";
import { ArrowRight } from "lucide-react";
import letsConnectBg from "@/assets/images/categories/letsConnectBg.png";

function LetsConnect() {
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
                Looking For A Specific Manufacturing Category?
              </h2>
              <div className="letsConnect-heading-border"></div>
              <p className="description mb-6">
                Whether you're sourcing from an existing category or exploring new manufacturing opportunities, Origin Connect can help connect your requirements with the right capabilities.
              </p>
              <button className="letsConnect-btn">
                LET'S CONNECT
                <span>
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsConnect;