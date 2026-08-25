import { useParams } from "react-router-dom";

import { categoriesBanner } from "@/data/categoryType/categoriesBanner";
import CategoryHero from "@/components/categoryType/CategoryHero";
import CategoryAbout from "@/components/categoryType/CategoryAbout";
import ManufacturingProcess from "@/components/categoryType/ManufacturingProcess";
import CategoryCTA from "@/components/categoryType/CategoryCTA";
import CategoryPrivateLabel from "@/components/categoryType/CategoryPrivateLabel";
import SubcategorySwiper from "@/components/categoryType/SubcategorySwiper";
import useLanguage from "@/hooks/useLanguage";

const CategoryLanding = () => {
  const { categoryLanding } = useLanguage();
  const { category } = useParams();
  const categoryData = categoriesBanner.find(
    (item) => item.slug === category
  );
  if (!categoryData) {
    return <div>{categoryLanding.notFound}</div>;
  }
  return (
    <>
      <CategoryHero category={categoryData} />
      <CategoryAbout category={category} />
      <SubcategorySwiper category={category} />
      <CategoryPrivateLabel />
      <ManufacturingProcess category={category} />
      <CategoryCTA />
    </>
  );
};

export default CategoryLanding;