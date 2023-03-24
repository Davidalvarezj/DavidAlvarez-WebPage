import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbarmenu from "./components/Navbarmenu";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./logo.svg";
import "./App.css";

AOS.init({});

function App() {
  return (
    <>
      <Navbarmenu />
      <Header />
      <Aboutme />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
