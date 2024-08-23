import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import TopStart from './components/TopStart'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FactStart from "./components/FactStart";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {

  return (
    <>
    <TopStart/>
    <NavBar/>
    <section id="home">
    <Hero/>
    <FactStart/>
    </section>
    <section id="about">
    <About />
    <WhyChooseUs/>
    </section>
    <section id="product">
    <ProductPage/>
    </section>
    <section id="testimonials">
      <Testimonials/>
    </section>
    <section id="contact">
    <Contact/>  
    </section>
    <Footer/>
    </>
  )
}

export default App
