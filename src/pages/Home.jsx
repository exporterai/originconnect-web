import HomeHero from "@/components/home/HomeHero";
import HowWeWork from "@/components/home/HowWeWork";
import ManufacturingEcosystem from "@/components/home/ManufacturingEcosystem";
import OriginConnectModel from "@/components/home/OriginConnectModel";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeServe from "@/components/home/WhoWeServe";
import useLanguage from '@/hooks/useLanguage';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { seo } = useLanguage();
  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta
          name="description"
          content={seo.home.description}
        />
        <meta
          name="keywords"
          content={seo.home.keywords}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <link
          rel="canonical"
          href={`${window.location.origin}`}
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
        <HomeHero />
        <WhatWeDo />
        <ManufacturingEcosystem />
        <HowWeWork />
        <OriginConnectModel />
        <WhoWeServe />
      </main>
    </>
  );
};

export default Home;