import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroPage from "./pages/Hero/HeroPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import ServicosPage from "./pages/ServicosPage/ServicosPage";
import ContatoPage from "./pages/ContatoPage/ContatoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/sobre" element={<InfoPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
