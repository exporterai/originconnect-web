import { Link } from "react-router-dom";
import { footerSections } from "@/data/footerLinks";

const Footer = () => {
    return (
        <footer className="bg-[#1E1C1A] text-[#F5F1EC8C]">
            <div className="container">
                <div className="py-14 md:py-20">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                        {/* Logo Section */}
                        <div className="lg:col-span-2">
                            <Link
                                to="/"
                                id="footerLogo"
                            >
                                Origin Connect
                            </Link>

                            <p className="mt-5 text-sm leading-7">
                                Premium hospitality textiles. Crafted to the standards of the world's finest properties.
                            </p>
                        </div>
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h4 className="mb-5 text-[13px] font-semibold uppercase tracking-[2px]">
                                    {section.title}
                                </h4>

                                <div className="flex flex-col gap-3">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            to={link.path}
                                            className="text-sm transition-all duration-200 ease-in-out hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 border-t border-[#F5F1EC14] pt-6">
                        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
                            <p className="text-xs">
                                © 2026 Origin Connect. All rights reserved.
                            </p>

                            <div className="flex justify-center gap-6 md:justify-end">
                                <Link
                                    to="#"
                                    className="text-xs tracking-[1px] hover:text-white transition-all duration-200 ease-in-out "
                                >
                                    INSTAGRAM
                                </Link>

                                <Link
                                    to="#"
                                    className="text-xs hover:text-white tracking-[1px] transition-all duration-200 ease-in-out"
                                >
                                    LINKEDIN
                                </Link>
                                <Link
                                    to="#"
                                    className="text-xs hover:text-white tracking-[1px] transition-all duration-200 ease-in-out"
                                >
                                    WHATSAPP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;