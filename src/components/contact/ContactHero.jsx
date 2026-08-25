import { contactHeroData } from "@/data/contact";
import useLanguage from "@/hooks/useLanguage";

const scrollToContactForm = () => {
  const section = document.getElementById("contactForm");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function ContactHero() {
  const { contactHeroContent } = useLanguage();
  const hero = contactHeroContent;
  return (
    <section
      className="contactHero section"
      style={{
        backgroundImage: `url(${contactHeroData.image})`,
      }}
    >
      <div className="container">
        <div className="contactHero-content">
          <span className="contactHero-tag">
            {hero.tag}
          </span>
          <h1 className="contactHero-title">
            <span>{hero.title.line1}</span>
            <span>{hero.title.line2}</span>
          </h1>
          <p className="contactHero-description">
            {hero.description}
          </p>
          <div className="contactHero-actions">
            <a href="https://wa.me/919227041987"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat"
              className="btnPrimary">
              {hero.primaryButton}
            </a>
            <button
              type="button"
              onClick={scrollToContactForm}
              className="btnSecondary"
              aria-label="Scroll to contact form"
            >
              {hero.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}