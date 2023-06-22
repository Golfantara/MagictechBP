import Navbar from "@/components/Navbar";
import { lazy } from "react";
const BpomModules = lazy(() => import("@/modules/BpomPages"));
export const Bpom = () => {
  return (
    <div>
      <Navbar />
      <BpomModules />
    </div>
  );
};
