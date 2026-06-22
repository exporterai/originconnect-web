import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Categories from "@/pages/Categories";
import CategoryLanding from "@/pages/CategoryLanding";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* AboutUs */}
      <Route path="/aboutUs" element={<AboutUs />} />

      {/* Categories */}
      <Route path="/categories" element={<Categories />} />

      {/* Category Landing */}
      <Route
        path="/categories/:category"
        element={<CategoryLanding />}
      />

      {/* Products Listing */}
      <Route path="/products" element={<Products />} />

      {/* Product Details */}
      <Route
        path="/product/:slug"
        element={<ProductDetails />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;