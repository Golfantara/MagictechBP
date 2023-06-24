import { lazy } from "react";

const Navbar = lazy(() => import("@/components/Navbar"));
const AboutModules = lazy(() => import("@/modules/AboutPages"));

export const About = () => {
  return (
    <div>
      <Navbar />
      <AboutModules />
    </div>
  );
};
