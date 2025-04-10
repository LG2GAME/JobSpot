// const Home = lazy(() => import("@pages/home/Home"));

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
