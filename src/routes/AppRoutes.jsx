import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Products = lazy(() => import("@/pages/Products"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
const Brands = lazy(() => import("@/pages/brands/Brands"));
const BrandCategory = lazy(() => import("@/pages/brands/BrandCategory"));
const BrandProductDetails = lazy(() => import("@/pages/brands/BrandProductDetails"));
const BrandSubCategory = lazy(() => import("@/pages/brands/BrandSubCategory"));
const Categories = lazy(() => import("@/pages/Categories"));
const CategoryLanding = lazy(() => import("@/pages/CategoryLanding"));
const Service = lazy(() => import("@/pages/Service"));
const Contact = lazy(() => import("@/pages/Contact"));
const BrochureDownloadPage = lazy(() =>
  import("@/pages/brochure/BrochureDownloadPage")
);
const NotFound = lazy(() => import("@/pages/NotFound"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetails />} />

        <Route path="/brands" element={<Brands />} />
        <Route
          path="/brands/:brandSlug/:categorySlug"
          element={<BrandCategory />}
        />
        <Route
          path="/brands/:brandSlug/:categorySlug/:productSlug"
          element={<BrandProductDetails />}
        />
        <Route
          path="/brands/:brandSlug/:categorySlug/subcategory/:subcategorySlug"
          element={<BrandSubCategory />}
        />
        <Route
          path="/brands/:brandSlug/:categorySlug/subcategory/:subcategorySlug/:productSlug"
          element={<BrandProductDetails />}
        />

        <Route
          path="/brochure/:slug"
          element={<BrochureDownloadPage />}
        />

        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/:category"
          element={<CategoryLanding />}
        />

        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

        <Route
          path="/preview-brochure/:slug?"
          element={<BrochureDownloadPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
