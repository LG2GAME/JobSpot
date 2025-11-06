import { Outlet } from "react-router-dom";
import { Navigation, Backdrop } from "./index";

const Layout = () => (
  <>
    <Navigation />
    <Backdrop />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
