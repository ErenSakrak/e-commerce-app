import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Anasayfa from "./pages/Anasayfa";
import Hakkinda from "./pages/Hakkinda";
import Iletisim from "./pages/Iletisim";
import AuthPage from "./pages/AuthPage";
import Man from "./pages/Man";
import Women from "./pages/Women";
import UrunDetay from "./pages/UrunDetay";
import Urunler from "./pages/Urunler";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/women" element={<Women />} />
          <Route path="/man" element={<Man />} />
          <Route path="/urun-detay/:id" element={<UrunDetay />} />
          <Route path="/hakkinda" element={<Hakkinda />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urunler/:id" element={<UrunDetay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
