import { lazy } from "react";

const FirstSection = lazy(() => import("@/components/BpomPages/FirstSection"));
const Order = lazy(() => import("@/components/Order"));
const Artikel = lazy(() => import("@/components/Artikel"));
const Faq = lazy(() => import("@/components/Faq"));
const Testimoni = lazy(() => import("@/components/Testimoni"));
const Footer = lazy(() => import("@/components/Footer"));

const BpomModules = () => {
  return (
    <div>
      <FirstSection />
      <Order />
      <Artikel />
      <Faq />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default BpomModules;
