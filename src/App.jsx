import AppRoutes from "@/routes/AppRoutes";
import ScrollToTop from "@/routes/ScrollToTop";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;