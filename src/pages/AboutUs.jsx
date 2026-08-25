import AboutUsHero from '@/components/aboutUs/AboutUsHero'
import Highlights from '@/components/aboutUs/Highlights'
import HowCreateValue from '@/components/aboutUs/HowCreateValue'
import LetsConnect from '@/components/aboutUs/LetsConnect'
import MissionVision from '@/components/aboutUs/MissionVision'
import OurStory from '@/components/aboutUs/OurStory'
import WhatMakesDifferent from '@/components/aboutUs/WhatMakesDifferent'
import useLanguage from '@/hooks/useLanguage'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function AboutUs() {
  const { seo } = useLanguage();
  return (
    <>
      <Helmet>
        <title>{seo.about.title}</title>
        <meta
          name="description"
          content={seo.about.description}
        />
        <meta
          name="keywords"
          content={seo.about.keywords}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <link
          rel="canonical"
          href={`${window.location.origin}/aboutUs`}
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
      <main className='aboutUs'>
        <AboutUsHero />
        <Highlights />
        <OurStory />
        <WhatMakesDifferent />
        <MissionVision />
        <LetsConnect />
        <HowCreateValue />
      </main>
    </>
  )
}

export default AboutUs