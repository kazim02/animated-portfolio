import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
const App = () => {
  return (
    <>
      <section id="Homepage">
        
        <Navbar />
        <Hero />
      </section>
      <section id="skills">
        <Services />
      </section>

      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
