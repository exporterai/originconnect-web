import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Categories from "@/pages/Categories/Categories";
import CategoryLanding from "@/pages/CategoryLanding/CategoryLanding";
import Products from "@/pages/Products/Products";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import NotFound from "@/pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

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