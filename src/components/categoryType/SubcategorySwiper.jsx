import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { subcategories } from "@/data/subcategories";

import SubCategoryCard from "@/components/categoryType/SubCategoryCard";

function SubcategorySwiper() {
  return (
    <section className="subcategorySwiper section">
     <div className="container">
       <h2
        className="heading dark-heading mb-4"
      >
        Browse the Collection
      </h2>
     </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {subcategories.towels.map((item) => (
          <SwiperSlide key={item.id}>
            <SubCategoryCard
              categorySlug="towels"
              item={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default SubcategorySwiper;