import { Outlet } from "react-router-dom";
import { Navigation, Backdrop, Footer } from "./index";

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

export default Layout;
