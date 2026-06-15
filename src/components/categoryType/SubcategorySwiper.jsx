import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

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
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
          Keyboard,
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