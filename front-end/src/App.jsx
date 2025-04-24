import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { Navigation } from "./components/layout/navigation/Navigation";
import { Footer } from "./components/layout/footer/Footer";
import { ResetScroll } from "./components/layout/helpers/ResetScroll";

import "@styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <ResetScroll />
      <Navigation />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
