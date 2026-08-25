import React from "react";
import useLanguage from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

function BrandCTA() {
    const { brandCTAContent } = useLanguage();
    return (
        <section className="brandCTA section">
            <div className="container">
                <h2 className="heading light-heading mb-2">
                    {brandCTAContent.title}
                </h2>
                <p className="description light-description max-w-[650px] mx-auto">
                    {brandCTAContent.description}
                </p>
                <div className="brandCTA-actions">
                    <Link
                        to="/contact"
                        className="brandCTA-btn"
                        aria-label="Contact Origin Connect"
                    >
                        {brandCTAContent.enquireButton}
                    </Link>
                    <a
                        href="https://wa.me/919327041987"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="brandCTA-btn brandCTA-btn-outline"
                    >
                        {brandCTAContent.whatsappButton}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BrandCTA;