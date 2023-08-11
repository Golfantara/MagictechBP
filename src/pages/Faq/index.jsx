import { lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));
const FaqModules = lazy(() => import("@/modules/FaqPages"));

export const Faq = () => {
  return (
    <div>
      <Navbar />
      <FaqModules />
    </div>
  );
};
