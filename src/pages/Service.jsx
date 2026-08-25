import HowCreateValue from '@/components/service/HowCreateValue'
import HowWorkTogether from '@/components/service/HowWorkTogether'
import LetsConnect from '@/components/service/LetsConnect'
import ServiceHero from '@/components/service/ServiceHero'
import useLanguage from '@/hooks/useLanguage'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function Service() {
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
      <main className='service'>
        <ServiceHero />
        <HowCreateValue />
        <HowWorkTogether />
        <LetsConnect />
      </main>
    </>
  )
}

export default Service