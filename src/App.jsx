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
        {/* <Sidebar /> */}
        <Navbar />
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <Portfolio/>
      <section>
        <Contact/>
      </section>
    </>
  );
};

export default App;
