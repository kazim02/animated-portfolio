import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/project/Project";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>
      

        <Project />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;
