import { lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));
const ArtikelModules = lazy(() => import("@/modules/ArtikelPages"));

export const Artikel = () => {
  return (
    <div>
      <Navbar />
      <ArtikelModules />
    </div>
  );
};
