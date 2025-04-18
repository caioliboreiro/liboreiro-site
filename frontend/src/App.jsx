import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
