import React from "react";

import { homeHeroSlides } from "@/data/Home/homeHero";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HomeHero() {
  return (
    <section className="homeHero">

      <Swiper
        modules={[
          Pagination,
          Autoplay,
          Mousewheel,
          Keyboard,
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

        {homeHeroSlides.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="homeHeroCard">

              <img
                src={item.image}
                alt={item.title}
                className="homeHeroCard-image"
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

        ))}

      </Swiper>

    </section>
  );
}

export default HomeHero;