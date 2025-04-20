import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@routes/AppRoutes";

import { Navigation } from "@components/layout/navigation/Navigation";

import "@styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
