import Navbar from "@/components/Navbar";
import Carousel from "@/components/Hero";
import Footer from "@/components/Footer";
import SecondSection from "@/components/HomePages/SecondSection";
import ThirdSection from "@/components/HomePages/ThirdSection";
import FourthSection from "@/components/HomePages/FourthSection";
import FifthSection from "@/components/HomePages/FifthSection";
import FaqComponents from "@/components/Faq";
import ArtikelComponents from "@/components/Artikel";

const ModulesHome = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <FaqComponents />
      <ArtikelComponents />
      <Footer />
    </div>
  );
};

export default ModulesHome;
