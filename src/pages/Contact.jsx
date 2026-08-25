import React from 'react'
import ContactHero from '@/components/contact/ContactHero'
import OfficeSection from '@/components/contact/OfficeSection'
import ContactForm from '@/components/contact/ContactForm'
import ConsultationCTA from '@/components/contact/ConsultationCTA'
import { Helmet } from 'react-helmet-async'
import useLanguage from '@/hooks/useLanguage'

function Contact() {
  const {seo} = useLanguage()
  return ( 
     <>
        <Helmet>
          <title>{seo.contact.title}</title>
          <meta
            name="description"
            content={seo.contact.description}
          />
          <meta
            name="keywords"
            content={seo.contact.keywords}
          />
          <meta
            name="robots"
            content="index,follow"
          />
          <link
            rel="canonical"
            href={`${window.location.origin}/contact`}
          />
          <meta
            name="author"
            content="Origin Connect"
          />
          <meta
            name="publisher"
            content="Origin Connect"
          />
        </Helmet>
    <main>
        <ContactHero/>
        <OfficeSection/>
        <ContactForm/>
        <ConsultationCTA/>
    </main>
    </>
  )
}

export default Contact