import { Handshake, Send } from "lucide-react";
import useLanguage from "@/hooks/useLanguage";

export default function ConsultationCTA() {
  const { contactConsultationCTAContent } = useLanguage();
  const cta = contactConsultationCTAContent;
  return (
    <section className="consultationCTA">
      <div className="container">
        <div className="consultationCTA-card">
          <div className="consultationCTA-content">
            <div className="consultationCTA-icon">
              <Handshake size={42} strokeWidth={1.5} />
            </div>
            <div>
              <h2>{cta.title}</h2>
              <p>{cta.description}</p>
            </div>
          </div>
          <div className="consultationCTA-divider" />
          <a
            href="https://wa.me/919227041987"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start WhatsApp consultation"
            className="consultationCTA-btn"
          >
            {cta.button}
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}