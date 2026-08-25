import { officeContacts } from "@/data/contact";
import OfficeCard from "@/components/contact/OfficeCard";
import useLanguage from "@/hooks/useLanguage";

export default function OfficeSection() {
  const { officeSectionContent } = useLanguage();
  return (
    <section className="officeSection section light-bg">
      <div className="container">
        {/* Section Header */}
        <div className="officeSection-header">
          <span className="officeSection-tag">
            {officeSectionContent.tag}
          </span>
          <h2 className="officeSection-title">
            {officeSectionContent.title}
          </h2>
          <p className="officeSection-description">
            {officeSectionContent.description}
          </p>
        </div>
        {/* Office Cards */}
        <div className="officeSection-wrapper">
          {officeContacts.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
            />
          ))}
        </div>
      </div>
    </section>
  );
}