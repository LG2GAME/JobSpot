import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@routes/AppRoutes";

import { Navigation } from "@components/layout/navigation/Navigation";

import "@styles/main.scss";
import { Footer } from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
