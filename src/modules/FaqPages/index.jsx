import { lazy } from "react";
const FirstSection = lazy(() => import("@/components/FaqPages/firstSection"));
const SecondSection = lazy(() => import("@/components/FaqPages/secondSection"));
const ThirdSection = lazy(() => import("@/components/FaqPages/thirdSection"));
const Order = lazy(() => import("@/components/Order"));
const FourthSection = lazy(() => import("@/components/FaqPages/fourthSection"));
const Footer = lazy(() => import("@/components/Footer"));

const FaqModules = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Order />
      <FourthSection />
      <Footer />
    </div>
  );
};

export default FaqModules;
