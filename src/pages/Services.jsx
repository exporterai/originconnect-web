import HowCreateValue from '@/components/services/HowCreateValue'
import HowWorkTogether from '@/components/services/HowWorkTogether'
import LetsConnect from '@/components/services/LetsConnect'
import ServicesHero from '@/components/services/ServicesHero'
import useLanguage from '@/hooks/useLanguage'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function Services() {
  const { seo } = useLanguage();
  return (
    <>
      <Helmet>
        <title>{seo.services.title}</title>
        <meta
          name="description"
          content={seo.services.description}
        />
        <meta
          name="keywords"
          content={seo.services.keywords}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <link
          rel="canonical"
          href={`${window.location.origin}/services`}
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
      <main className='services'>
        <ServicesHero />
        <HowCreateValue />
        <HowWorkTogether />
        <LetsConnect />
      </main>
    </>
  )
}

export default Services