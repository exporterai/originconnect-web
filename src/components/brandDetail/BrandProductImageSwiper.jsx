import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import {
  brandProductsData,
} from "@/data/brands/brandProductsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguage from "@/hooks/useLanguage";

const BrandProductImageSwiper = () => {
  const {
    brandSlug,
    categorySlug,
    subcategorySlug,
    productSlug,
  } = useParams();
  const {
    brandProductsContent,
    brandCollaborationContent,
  } = useLanguage();

  const productData =
    subcategorySlug
      ? brandProductsData?.[brandSlug]?.[
      categorySlug
      ]?.[subcategorySlug]?.[
      productSlug
      ]
      : brandProductsData?.[brandSlug]?.[
      categorySlug
      ]?.[
      productSlug
      ];
  const productContent =
    subcategorySlug
      ? brandProductsContent?.[brandSlug]
      ?.[categorySlug]
      ?.[subcategorySlug]
      ?.[productSlug]
      : brandProductsContent?.[brandSlug]
      ?.[categorySlug]
      ?.[productSlug];

  if (!productData || !productContent) {
    return null;
  }
  const formattedBrandName = brandSlug
    ?.replaceAll("-", " ")
    ?.toUpperCase();
  return (
    <section className="brandProductImageSwiper-wrapper section">
      <div className="container">
        <div className="brandProductImageSwiper-heading section-heading text-center">
          {/* <span
            className="category-tag"
            style={{
              color: "#a67c52",
              fontWeight: "700",
            }}
          >
            {
              brandProductsText.galleryLabel
            }
          </span> */}
          <div className="brandCollab-title">
            <span className="oc">
              {brandCollaborationContent.titlePrefix}
            </span>
            {formattedBrandName}
          </div>
          <h2 className="heading mb-2">
            {productContent.title}
          </h2>
          <p className="description dark-description max-w-[1170px] mx-auto">
            {productContent.description}
          </p>
        </div>
        <div className="brandProductImageSwiper-container">
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
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="brandProductImageSwiper"
          >
            {productData.gallery.map(
              (image, index) => (
                <SwiperSlide key={index}>
                  <div className="brandProductImageSwiper-slide">
                    <img
                      src={image}
                      alt={productContent.title}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BrandProductImageSwiper;