import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "smart-webcomponents-react/source/styles/smart.default.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Inicio />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
