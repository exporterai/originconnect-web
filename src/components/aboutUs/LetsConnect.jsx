import React from "react";
import { ArrowRight } from "lucide-react";
import letsConnectBg from "@/assets/images/about/letsConnectBg.webp";
import useLanguage from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

function LetsConnect() {
    const { letsConnectContent } = useLanguage();
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
                                {letsConnectContent.title}
                            </h2>
                            <div className="letsConnect-heading-border"></div>
                            <p className="description text-[#e0e0e0] mb-6">
                                {letsConnectContent.description}
                            </p>
                            <Link
                                to="/contact"
                                className="letsConnect-btn"
                                aria-label="Contact Origin Connect"
                            >
                                {letsConnectContent.button}
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