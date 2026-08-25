import { brandProductsData } from "@/data/brands/brandProductsData";
import BrandProductDetailsTable from '@/components/brandDetail/BrandProductDetailsTable'
import BrandProductImageSwiper from '@/components/brandDetail/BrandProductImageSwiper'
import LetsConnect from '@/components/categories/LetsConnect'
import React from 'react'
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useLanguage from "@/hooks/useLanguage";

function BrandProductDetails() {
  const {
    brandSlug,
    categorySlug,
    productSlug,
  } = useParams();
  const { brandProductsContent } = useLanguage();
  const productContent =
    brandProductsContent?.[brandSlug]
    ?.[categorySlug]
    ?.[productSlug];
  return (
    <>
      <Helmet>
        <title>
          {productContent?.title
            ? `${productContent.title} | Origin Connect`
            : "Origin Connect"}
        </title>
        <meta
          name="description"
          content={
            productContent?.description ||
            "Premium manufacturing products from Origin Connect."
          }
        />
        <meta
          name="keywords"
          content={`
            ${productContent?.title || ""},
            ${categorySlug},
            ${brandSlug},
            Indian manufacturer,
            export supplier
          `}
        />
        <meta
          name="robots"
          content="index,follow"
        />
        <meta
          name="author"
          content="Origin Connect"
        />
        <meta
          name="publisher"
          content="Origin Connect"
        />
        <link
          rel="canonical"
          href={`https://originconnect.uk/brands/${brandSlug}/${categorySlug}/${productSlug}`}
        />
      </Helmet>
      <main>
        <BrandProductImageSwiper />
        <BrandProductDetailsTable />
        {/* <BrandCTA/> */}
        <LetsConnect />
      </main>
    </>
  )
}

export default BrandProductDetails