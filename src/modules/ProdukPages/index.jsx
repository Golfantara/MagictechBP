import { lazy } from "react";

const FirstSection = lazy(() =>
  import("@/components/ProdukPages/FirstSection")
);
const SecondSection = lazy(() =>
  import("@/components/ProdukPages/SecondSection")
);
const BpomSection = lazy(() => import("@/components/BpomSection"));
const Faq = lazy(() => import("@/components/Faq"));
const PromoSection = lazy(() => import("@/components/Promo"));
const ArtikelSection = lazy(() => import("@/components/Artikel"));
const Footer = lazy(() => import("@/components/Footer"));

const ModulesProduk = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <BpomSection />
      <Faq />
      <PromoSection />
      <ArtikelSection />
      <Footer />
    </div>
  );
};

export default ModulesProduk;
