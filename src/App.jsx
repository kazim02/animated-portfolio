import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
const App = () => {
  return (
    <>
      <section id="Homepage">
        {/* <Sidebar /> */}
        <Navbar />
        <Hero />
      </section>
      <section>Parallex</section>
      <section>Services</section>
  
    </>
  );
};

export default App;
