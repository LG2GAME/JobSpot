import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Backdrop from "../components/layout/backdrop/Backdrop";

const Home = lazy(() => import("@pages/home/Home"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <BackdropWrapper>
              <Home />
            </BackdropWrapper>
          }
        />
      </Routes>
    </Suspense>
  );
};

const ContainerWrapper = ({ children }) => (
  <div className="container">{children}</div>
);

const BackdropWrapper = ({ children }) => (
  <>
    <Backdrop />
    <ContainerWrapper>{children}</ContainerWrapper>
  </>
);

export default AppRoutes;
