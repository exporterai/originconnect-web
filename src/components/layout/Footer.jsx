import { Link } from "react-router-dom";
import { footerSections } from "@/data/footerLinks";
import { Mail, MapPin, Phone } from 'lucide-react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="pt-14 pb-6 md:pt-20 md:pb-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

                        {/* Logo Section */}
                        <div className="lg:col-span-2 logosection">
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
                        {footerSections.map((section) =>
                            section.title !== "Contact" ?
                                (
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
                                )
                                :
                                (
                                    <div key={section.title} className="footer-col lg:col-span-2">
                                        <h4 className="mb-5 text-[13px] font-semibold uppercase tracking-[2px]">
                                            {section.title}
                                        </h4>
                                        <ul className="contact-list">
                                            <li>
                                                <MapPin size={14} className="footer-contact-icon" />
                                                <span>
                                                   The Discovery, Dattapada Road, Borivali East, Mumbai 400066, India
                                                </span>
                                            </li>
                                            <li>
                                                <Phone size={14} className="footer-contact-icon" />
                                                <a href="tel:+919227041987">
                                                    <span>+91 922 704 1987</span>
                                                </a>
                                            </li>
                                            <li>
                                                <Mail size={14} className="footer-contact-icon" />
                                                <span>
                                                    {/* <a href="mailto:commercial@oceanmarque.com">
                                                        commercial@oceanmarque.com
                                                    </a> */}
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="footer-socials">

                                            <a href="#">
                                                <FaLinkedinIn />
                                            </a>
                                            <a href="#">
                                                <FaInstagram />
                                            </a>
                                            <a href="#">
                                                <FaFacebookF />
                                            </a>
                                            <a href="#">
                                                <FaXTwitter />
                                            </a>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 border-t border-[#F5F1EC14] pt-6">
                        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
                            <p className="text-xs">
                                © 2026 Origin Connect. All rights reserved.
                            </p>

                            <div className="flex justify-center gap-6 md:justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;