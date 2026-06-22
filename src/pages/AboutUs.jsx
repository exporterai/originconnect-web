import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import Highlights from '@/components/AboutUs/Highlights'
import HowCreateValue from '@/components/AboutUs/HowCreateValue'
import LetsConnect from '@/components/AboutUs/LetsConnect'
import MissionVision from '@/components/AboutUs/MissionVision'
import OurStory from '@/components/AboutUs/OurStory'
import WhatMakesDifferent from '@/components/AboutUs/WhatMakesDifferent'
import React from 'react'

function AboutUs() {
  return (
    <div className='aboutUs'>
      <AboutUsHero />
      <Highlights />
      <OurStory />
      <WhatMakesDifferent/>
      <MissionVision/>
      <LetsConnect/>
      <HowCreateValue/>
    </div>
  )
}

export default AboutUs