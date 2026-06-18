import { useParams } from "react-router-dom";

import { categories } from "@/data/categoryType/categories";

import CategoryHero from "@/components/categoryType/CategoryHero";
import CategoryAbout from "@/components/categoryType/CategoryAbout";
import ManufacturingProcess from "@/components/categoryType/ManufacturingProcess";
import CategoryCTA from "@/components/categoryType/CategoryCTA";
import CategoryPrivateLabel from "@/components/categoryType/CategoryPrivateLabel";
import SubcategorySwiper from "@/components/categoryType/SubcategorySwiper";

const CategoryLanding = () => {
  const { category } = useParams();

  const categoryData = categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    return <div>Category Not Found</div>;
  }

  return (
    <>
      <CategoryHero category={categoryData} />
      <CategoryAbout category={category} />
      <SubcategorySwiper/>
      <CategoryPrivateLabel />
      <ManufacturingProcess category={category} />
      <CategoryCTA />
    </>
  );
};

export default CategoryLanding;