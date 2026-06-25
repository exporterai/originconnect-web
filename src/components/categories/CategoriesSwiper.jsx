import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CategoriesCard from "@/components/categories/CategoriesCard";
import { categories } from '@/data/categories';

function CategoriesSwiper() {
  return (
    <>
      <section className="categoriesSwiper section light-bg">
        <div className="container">
          {/* Header */}
          <div className='text-center mb-8'>
            <span className="category-tag">
              CURRENT MANUFACTURING CATEGORIES
            </span>

            <h2 className="heading dark-heading mb-4">
             Our Product Categories
            </h2>
            <p className="description dark-description max-w-[450px] mx-auto">
              Proven manufacturing capabilities across key categories to support your business requirements.
            </p>
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
            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <CategoriesCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>
    </>
  )
}

export default CategoriesSwiper