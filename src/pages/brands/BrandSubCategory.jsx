import BrandProductsGrid from '@/components/brandDetail/BrandProductsGrid';
import BrandSubCategoryHero from '@/components/brandDetail/BrandSubCategoryHero';
import BrandCTA from '@/components/brands/BrandCTA';
import React from 'react'
import { useParams } from 'react-router-dom';

function BrandSubCategory() {
  const {
    brandSlug,
    categorySlug,
    subcategorySlug,
  } = useParams();

  return (
    <>
      <BrandSubCategoryHero />
      <BrandProductsGrid />
      <BrandCTA />
    </>
  );
}

export default BrandSubCategory