import { lazy } from "react";
const ModulesHome = lazy(() => import("@/modules/HomePages"));

export const Home = () => {
  return (
    <div>
      <ModulesHome />
    </div>
  );
};
