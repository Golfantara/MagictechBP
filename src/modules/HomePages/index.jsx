import Navbar from "@/components/navbar";
import Carousel from "@/components/Hero";
import Footer from "@/components/Footer";
const ModulesHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 w-full lg:mt-0 lg:h-[100vh] font-inter">
        <Carousel />
        <Footer />
      </div>
    </div>
  );
};

export default ModulesHome;
