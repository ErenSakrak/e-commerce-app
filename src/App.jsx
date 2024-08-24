import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Anasayfa from "./pages/Anasayfa";
import Ecommerce from "./pages/Ecommerce";
import Hakkinda from "./pages/Hakkinda";
import Iletisim from "./pages/Iletisim";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/anasayfa" element={<Anasayfa />} />

            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/hakkinda" element={<Hakkinda />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
