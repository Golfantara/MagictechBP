import { lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));
const ModulesProduk = lazy(() => import("@/modules/ProdukPages"));

export const Produk = () => {
  return (
    <div>
      <Navbar />
      <ModulesProduk />
    </div>
  );
};
