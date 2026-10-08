import React from 'react'
import BrandsHero from '@/components/brands/BrandsHero'
import LetsConnect from '@/components/services/LetsConnect'
import useLanguage from '@/hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import BrandsCountryGrid from '@/components/brands/BrandsCountryGrid';

function Brands() {
  const { seo } = useLanguage();
  return (
    <>
      <Helmet>
        <title>{seo.brands.title}</title>
        <meta
          name="description"
          content={seo.brands.description}
        />
        <meta
          name="keywords"
          content={seo.brands.keywords}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <link
          rel="canonical"
          href={`${window.location.origin}/brands`}
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
      <main className="brands">
        <BrandsHero />
        <BrandsCountryGrid />
        <LetsConnect />
      </main>
    </>
  )
}

export default Brands