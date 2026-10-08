import { useLocation } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/routes/ScrollToTop";
import CountryBar from "@/components/layout/CountryBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {isHomePage && (
        <CountryBar
          countryIds={["uk", "brazil"]}
        />
      )}
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;