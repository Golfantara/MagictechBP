import { lazy } from "react";

import Navbar from "@/components/Navbar";
const AboutModules = lazy(() => import("@/modules/AboutPages"));

export const About = () => {
  return (
    <div>
      <Navbar />
      <AboutModules />
    </div>
  );
};
