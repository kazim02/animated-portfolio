import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <About/>
      </section>
      <section id="skills">
        <Services />
      </section>
        <Portfolio />
      <section id="contact">
        <Contact />
        <Footer/>
      </section>
    </>
  );
};

export default App;
