import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@routes/AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
