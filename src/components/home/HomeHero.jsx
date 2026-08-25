import React from "react";
import useLanguage from "@/hooks/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroImages } from "@/data/Home/homeHero";

function HomeHero() {
  const { homeHeroSlides } = useLanguage();
  return (
    <section className="homeHero">
      <Swiper
        modules={[
          Pagination,
          Autoplay,
        ]}
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
        {heroImages.map((image, index) => {
          const item = {
            ...homeHeroSlides[index],
            image: image.image,
            id: image.id,
          };
          return (
            <SwiperSlide key={item.id}>
              <div className="homeHeroCard">
                <img
                  src={item.image}
                  alt={item.title}
                  className="homeHeroCard-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                <div className="homeHeroCard-overlay"></div>
                <div className="container">
                  <div className="homeHeroCard-content">
                    <h1 className="heading light-heading homeHeroCard-title">
                      {item.title}
                    </h1>
                    <p className="description light-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default HomeHero;