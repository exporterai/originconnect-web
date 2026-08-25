import ReactCountryFlag from "react-country-flag";
import {
    MapPin,
    Globe,
    Phone,
    Mail,
    UserRound,
    ChevronRight,
} from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import { FaWhatsapp } from "react-icons/fa6";

const OfficeCard = ({ office }) => {
    const { officeSectionContent } = useLanguage();
    return (
        <div className="officeCard">
            {/* ADDRESS */}
            <div className="officeCard-address">
                <div className="officeCard-title">
                    <ReactCountryFlag
                        countryCode={office.countryCode}
                        svg
                        className="officeCard-flag"
                        aria-label={`${officeSectionContent.offices[office.id]} flag`}
                    />
                    <h3>
                        {officeSectionContent.offices[office.id]}
                    </h3>
                </div>
                <div className="officeInfoBlock">
                    <MapPin size={18} />
                    <div>
                        <span className="officeInfoLabel">
                            {officeSectionContent.officeAddress}
                        </span>
                        <p>{office.address.line1}</p>
                        <p>{office.address.line2}</p>
                    </div>
                </div>
                <div className="officeInfoBlock">
                    <Globe size={18} />
                    <div>
                        <span className="officeInfoLabel">
                            {officeSectionContent.website}
                        </span>
                        <a
                            href={office.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${office.website.replace("https://", "")}`}
                        >
                            {office.website.replace("https://", "")}
                        </a>
                    </div>
                </div>
            </div>
            <div className="officeCard-right">
                {office.primaryContacts.length > 0 && (
                    <div className="contactGroup">
                        <div className="groupHeading">
                            {office.primaryContacts.length > 1
                                ? officeSectionContent.primaryContacts
                                : officeSectionContent.primaryContact}
                        </div>
                        <div
                            className="contactGrid"
                            style={{
                                gridTemplateColumns: `repeat(${office.primaryContacts.length}, minmax(0, 1fr))`,
                            }}
                        >
                            {office.primaryContacts.map((contact, index) => (
                                <div className="officeContactCard" key={index}>
                                    <div className="officeContactHeader">
                                        <div className="officeContactIcon">
                                            <UserRound size={22} />
                                        </div>
                                        <div>
                                            <h4>{contact.name}</h4>
                                            <p className="officeDesignation">
                                                {contact.designation}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="officeContactInfo">
                                        {/* <Phone size={16} /> */}
                                        <FaWhatsapp size={16} />
                                        <a
                                            href={`https://wa.me/${contact.phone.replace(/\s+/g, "")}`}
                                            target="_blank"
                                            className="officeContactLink"
                                            aria-label={`Whatsapp msg ${contact.name}`}
                                            rel="noopener noreferrer"
                                        >
                                            {contact.phone}
                                        </a>
                                    </div>
                                    <div className="officeContactInfo">
                                        <Mail size={16} />
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="officeContactLink"
                                        >
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {office.secondaryContacts.length > 0 && (
                    <div className="contactGroup">
                        <div className="groupHeading">
                            {officeSectionContent.secondaryContact}
                        </div>
                        <div
                            className="contactGrid"
                            style={{
                                gridTemplateColumns: `repeat(${office.secondaryContacts.length}, minmax(0, 1fr))`,
                            }}
                        >
                            {office.secondaryContacts.map((contact, index) => (
                                <div className="officeContactCard" key={index}>
                                    <div className="officeContactHeader">
                                        <div className="officeContactIcon">
                                            <UserRound size={22} />
                                        </div>
                                        <div>
                                            <h4>{contact.name}</h4>
                                            <p className="officeDesignation">
                                                {contact.designation}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="officeContactInfo">
                                        {/* <Phone size={16} /> */}
                                        <FaWhatsapp size={16} />
                                        <a
                                            href={`https://wa.me/${contact.phone.replace(/\s+/g, "")}`}
                                            target="_blank"
                                            className="officeContactLink"
                                            aria-label={`Whatsapp msg ${contact.name}`}
                                            rel="noopener noreferrer"
                                        >
                                            {contact.phone}
                                        </a>
                                    </div>
                                    <div className="officeContactInfo">
                                        <Mail size={16} />
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="officeContactLink"
                                            aria-label={`Email ${contact.name}`}
                                        >
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* ARROW */}
            <div className="officeCardArrow">
                <ChevronRight size={24} />
            </div>
        </div>
    );
};
export default OfficeCard;