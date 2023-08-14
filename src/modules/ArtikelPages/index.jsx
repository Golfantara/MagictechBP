import FirstSection from "@/components/ArtikelPages/firstSection";
import SecondSection from "@/components/ArtikelPages/secondSection";
// import Pagination from "@/components/ArtikelPages/thirdSection";
import Order from "@/components/Order";
import Faq from "@/components/Faq";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";

const ArtikelModules = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      {/* <Pagination /> */}
      <Order />
      <Faq />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default ArtikelModules;
