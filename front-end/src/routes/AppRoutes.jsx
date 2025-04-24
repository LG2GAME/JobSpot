import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Backdrop, { SmallBackdrop } from "@components/layout/backdrop/Backdrop";

const Home = lazy(() => import("@pages/home/Home"));
const Career = lazy(() => import("@pages/career/Career"));
const Blog = lazy(() => import("@pages/blog/Blog"));
const AboutUs = lazy(() => import("@pages/about-us/AboutUs"));
const Login = lazy(() => import("@pages/auth/login/Login"));
const Register = lazy(() => import("@pages/auth/register/Register"));

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
        <Route
          path="/blog"
          element={
            <SmallBackdropWrapper>
              <Blog />
            </SmallBackdropWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <SmallBackdropWrapper>
              <AboutUs />
            </SmallBackdropWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <ContainerWrapper>
              <Login />
            </ContainerWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <ContainerWrapper>
              <Register />
            </ContainerWrapper>
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
