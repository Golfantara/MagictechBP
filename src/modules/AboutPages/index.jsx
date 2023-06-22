import { lazy } from "react";
const FirstSection = lazy(() => import("@/components/AboutPages/FirstSection"));
const SecondSection = lazy(() =>
  import("@/components/AboutPages/SecondSection")
);

const AboutModules = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default AboutModules;
