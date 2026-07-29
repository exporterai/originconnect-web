import { Link } from "react-router-dom";
import logo from "@/assets/images/logoOC-dark.svg";
import { footerData } from "@/data/footerLinks";
import { Mail, MapPin, ChevronRight } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";
import { Fragment } from "react";

const socialIcons = {
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    facebook: FaFacebookF,
    twitter: FaXTwitter,
};
const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="pt-14 pb-6 md:pt-16 md:pb-8">
                    <div className="footer-grid">
                        {/* ================= Logo Card ================= */}
                        <div className="footer-card footer-logo-card">
                            <Link to="/" className="footer-logo">
                                <img
                                    src={logo}
                                    alt={footerData.logo.imageAlt}
                                />
                                <h2 id="footerLogo">{footerData.logo.title}</h2>
                            </Link>
                            <div className="footer-divider"></div>
                            <div className="footer-countries">
                                {chunkArray(footerData.logo.countries, 2).map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="country-row"
                                    >
                                        {row.map((country, index) => (
                                            <Fragment key={country.label}>
                                                <a
                                                    href={country.url}
                                                    className="country-item"
                                                >
                                                    {country.label}
                                                </a>
                                                {index !== row.length - 1 && (
                                                    <span className="country-divider">|</span>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {footerData.sections.map((section) => {
                            return (
                                <div
                                    key={section.id}
                                    className="footer-card"
                                >
                                    <h3 className="footer-title">
                                        {section.title}
                                    </h3>
                                    <div className="footer-title-line"></div>
                                    {
                                        section.type === "links" ? (
                                            <div className="footer-links">
                                                {section.items.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        to={item.path}
                                                        className="footer-link"
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronRight
                                                            size={18}
                                                            className="footer-link-arrow"
                                                        />
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <ul className="contact-list">
                                                {section.items.map((item, index) => {
                                                    let Icon = null;
                                                    if (item.type === "address") Icon = MapPin;
                                                    if (item.type === "whatsapp") Icon = FaWhatsapp;
                                                    if (item.type === "email") Icon = Mail;
                                                    return (
                                                        <li key={index}>
                                                            <Icon className="footer-contact-icon" />
                                                            {
                                                                item.type === "address" ? (
                                                                    <span>
                                                                        {item.value.map((line, i) => (
                                                                            <Fragment key={i}>
                                                                                {line}
                                                                                <br />
                                                                            </Fragment>
                                                                        ))}
                                                                    </span>
                                                                ) : (
                                                                    <a href={item.url}>
                                                                        {item.value}
                                                                    </a>
                                                                )
                                                            }
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )
                                    }
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer-bottom">
                        <p>
                            {footerData.copyright}
                        </p>
                        <div className="footer-socials">
                            {footerData.socials.map((social) => {
                                const Icon = socialIcons[social.icon];
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.id}
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;