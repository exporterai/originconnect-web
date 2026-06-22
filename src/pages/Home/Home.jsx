import HomeHero from "@/components/Home/HomeHero";
import HowWeWork from "@/components/Home/HowWeWork";
import ManufacturingEcosystem from "@/components/Home/ManufacturingEcosystem";
import OriginConnectModel from "@/components/Home/OriginConnectModel";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhoWeServe from "@/components/Home/WhoWeServe";

const Home = () => {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <ManufacturingEcosystem />
      <HowWeWork />
      <OriginConnectModel />
      <WhoWeServe />
    </>
  );
};

export default Home;