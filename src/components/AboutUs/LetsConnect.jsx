import React from "react";
import { ArrowRight } from "lucide-react";
import letsConnectBg from "@/assets/images/about/letsConnectBg.webp";

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
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="letsConnect-content">
                            <h2 className="heading light-heading mb-4">
                                Let's Build Global Trade Together
                            </h2>
                            <div className="letsConnect-heading-border"></div>
                            <p className="description text-[#e0e0e0] mb-6">
                                Whether you are a buyer looking for the right sourcing partner
                                or a manufacturer aiming to grow globally, we are here to help.
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