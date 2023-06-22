import { lazy } from "react";
const FirstSection = lazy(() => import("@/components/AboutPages/FirstSection"));
const SecondSection = lazy(() =>
  import("@/components/AboutPages/SecondSection")
);
const ThirdSection = lazy(() => import("@/components/AboutPages/ThirdSection"));
const FourthSection = lazy(() =>
  import("@/components/AboutPages/FourthSection")
);
const Faq = lazy(() => import("@/components/Faq"));
const Footer = lazy(() => import("@/components/Footer"));

const AboutModules = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default AboutModules;
