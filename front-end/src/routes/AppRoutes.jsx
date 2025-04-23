import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Backdrop, {
  SmallBackdrop,
} from "../components/layout/backdrop/Backdrop";

const Home = lazy(() => import("@pages/home/Home"));
const Career = lazy(() => import("@pages/career/Career"));

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
        <Route
          path="/career"
          element={
            <SmallBackdropWrapper>
              <Career />
            </SmallBackdropWrapper>
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

const SmallBackdropWrapper = ({ children }) => (
  <>
    <SmallBackdrop />
    <ContainerWrapper>{children}</ContainerWrapper>
  </>
);

export default AppRoutes;
