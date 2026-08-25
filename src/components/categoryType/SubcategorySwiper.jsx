import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { subcategories } from "@/data/categoryType/subcategories";
import useLanguage from "@/hooks/useLanguage";
import SubCategoryCard from "@/components/categoryType/SubCategoryCard";

function SubcategorySwiper({ category }) {
  const { subcategorySwiper } = useLanguage();
  const categorySubcategories = subcategories[category] || [];
  if (categorySubcategories.length === 0) {
    return null;
  }
  return (
    <section className="subcategorySwiper section">
      <div className="container">
        <h2 className="heading dark-heading mb-4">
         {subcategorySwiper.title}
        </h2>
      </div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        navigation
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {categorySubcategories.map((item) => (
          <SwiperSlide key={item.id}>
            <SubCategoryCard
              categorySlug={category}
              item={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SubcategorySwiper;