import CategoriesHero from "@/components/categories/CategoriesHero";
import CategoriesSwiper from "@/components/categories/CategoriesSwiper";
import ExpansionRoadmap from "@/components/categories/ExpansionRoadmap";
import HowCategoriesEnterEcosystem from "@/components/categories/HowCategoriesEnterEcosystem";
import LetsConnect from "@/components/categories/LetsConnect";

const Categories = () => {
  return(
    <div className="categories">
    <CategoriesHero/>
    <CategoriesSwiper/>
    <ExpansionRoadmap/>
    <HowCategoriesEnterEcosystem/>
    <LetsConnect/>
    </div>
  )
};

export default Categories;