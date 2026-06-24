import HowCreateValue from '@/components/Service/HowCreateValue'
import HowWorkTogether from '@/components/Service/HowWorkTogether'
import LetsConnect from '@/components/Service/LetsConnect'
import ServiceHero from '@/components/Service/ServiceHero'
import React from 'react'

function Service() {
  return (
    <div className='service'>
    <ServiceHero/>
    <HowCreateValue/>
    <HowWorkTogether/>
    <LetsConnect/>
    </div>
  )
}

export default Service