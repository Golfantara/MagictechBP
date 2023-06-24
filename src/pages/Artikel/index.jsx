import { lazy } from "react";
const Navbar = lazy(() => import("@/components/Navbar"));

export const Artikel = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen">
        <h1 className="text-red-500 text-5xl mt-60 flex justify-center items-center">
          INI ARTIKEL
        </h1>
      </div>
    </div>
  );
};
