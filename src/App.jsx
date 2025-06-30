import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroPage from "./pages/Hero/HeroPage";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <HeroPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
