import { lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));
const BpomModules = lazy(() => import("@/modules/BpomPages"));

export const Bpom = () => {
  return (
    <div>
      <Navbar />
      <BpomModules />
    </div>
  );
};
