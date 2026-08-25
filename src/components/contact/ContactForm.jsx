import {
  Clock3,
  Users,
  Languages,
  ShieldCheck,
  Send,
} from "lucide-react";
import useLanguage from "@/hooks/useLanguage";
import Select from "react-select";
import { useState } from "react";

export default function ContactForm() {
  const {
    contactFormContent,
    contactHelpContent,
    countries
  } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const icons = [
    Clock3,
    Users,
    Languages,
    ShieldCheck,
  ];
  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));
  const inquiryOptions = contactFormContent.inquiryTypes.map((type) => ({
    value: type,
    label: type,
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCountry || !selectedInquiry) {
      alert("Please select country and inquiry type");
      return;
    }
    setLoading(true);
    const formData = {
      access_key: "ccd8747b-deb2-4b2a-ba33-b785dad34dd8",
      full_name: fullName,
      company_name: companyName,
      email: email,
      country: selectedCountry.value,
      inquiry_type: selectedInquiry.value,
      message: message,
    };
    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.success) {
        alert("Inquiry sent successfully");
        setFullName("");
        setCompanyName("");
        setEmail("");
        setMessage("");
        setSelectedCountry(null);
        setSelectedInquiry(null);
      } else {
        alert("Failed to send inquiry");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <section className="contactFormSection section" id="contactForm">
      <div className="container">
        <div className="contactFormGrid">
          {/* Form */}
          <div className="contactFormCard">
            <h2>{contactFormContent.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="contactFormRow">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={contactFormContent.placeholders.fullName}
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="sr-only">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    autoComplete="organization"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={contactFormContent.placeholders.companyName}
                  />
                </div>
              </div>
              <div className="contactFormRow">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={contactFormContent.placeholders.email}
                  />
                </div>
                <div>
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <Select
                    inputId="country"
                    aria-label="Country"
                    classNamePrefix="originSelect"
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    placeholder={contactFormContent.placeholders.country}
                    isSearchable
                  />
                </div>
              </div>
              <div>
                <label htmlFor="inquiryType" className="sr-only">
                  Inquiry Type
                </label>
                <Select
                  inputId="inquiryType"
                  aria-label="Inquiry Type"
                  classNamePrefix="originSelect"
                  options={inquiryOptions}
                  value={selectedInquiry}
                  onChange={setSelectedInquiry}
                  placeholder={contactFormContent.placeholders.inquiryType}
                  isSearchable={false}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={contactFormContent.placeholders.message}
                />
              </div>
              <button
                type="submit"
                className="contactSubmitBtn"
                disabled={loading}
                aria-label={loading ? "Sending message" : contactFormContent.button}
              >
                {loading ? "Sending..." : contactFormContent.button}
                <Send size={18} />
              </button>
            </form>
          </div>
          {/* Help */}
          <div className="contactHelpCard">
            <h2>{contactHelpContent.title}</h2>
            <div className="contactHelpList">
              {contactHelpContent.items.map(
                (item, index) => {
                  const Icon = icons[index];
                  return (
                    <div
                      key={item.title}
                      className="contactHelpItem"
                    >
                      <div className="contactHelpIcon">
                        <Icon
                          size={34}
                          strokeWidth={1.6}
                        />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}