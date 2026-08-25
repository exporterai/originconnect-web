import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/routes/ScrollToTop";
import CountryBar from "@/components/layout/CountryBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <CountryBar />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;