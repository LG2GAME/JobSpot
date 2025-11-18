import { Outlet } from "react-router-dom";
import { Navigation, Backdrop, Footer, AuthNavigation } from "./index";

const Layout = () => (
  <>
    <Navigation />
    <Backdrop />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export const ErrorLayout = () => (
  <>
    <Navigation />
    <Backdrop />
    <main>
      <Outlet />
    </main>
  </>
);

export const AuthLayout = () => (
  <>
    <AuthNavigation />
    <main>
      <Outlet />
    </main>
  </>
);

export const AccountLayout = () => (
  <>
    <Navigation />
    <Backdrop />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
