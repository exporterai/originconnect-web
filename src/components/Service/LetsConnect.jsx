import React from "react";
import { ArrowRight } from "lucide-react";
import letsConnectBg from "@/assets/images/service/letsConnectBg.webp";

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
                {/* LET'S WORK TOGETHER */}
                Let's Work Together
              </h2>
              <div className="letsConnect-heading-border"></div>
              <p className="description mb-6">
                Whether you're looking to source from India, develop a private label program, or expand into international markets, Origin Connect provides the network, expertise, and partnerships to help you move forward.
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