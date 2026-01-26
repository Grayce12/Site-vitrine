import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Team from './components/Team';
import SplitColumns from './components/SplitColumns';
import Reviews from './components/Reviews';
import LeftRightContent from "./components/LeftRightContent";
import OurCollection from './components/OurCollection';
import TheWatch from './components/TheWatch';
import PreOrderModal from './components/PreOrderModal';
import Faqs from './components/Faqs';
import TechSpecs from './components/TechSpecs';
import MobileApp from './components/MobileApp';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  const pageClassName = isPreOrderOpen
    ? "pointer-events-none select-none blur-sm opacity-40"
    : "";

  useEffect(() => {
    document.body.style.overflow = isPreOrderOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreOrderOpen]);

  return (
    <div className="App">
      <div className={pageClassName}>
        <Navbar onPreOrder={() => setIsPreOrderOpen(true)} />
        <Hero onPreOrder={() => setIsPreOrderOpen(true)} />
        <Product />
        <HowItWorks />
        <Benefits />
        <LeftRightContent />
        <OurCollection />
        <TheWatch />
        <SplitColumns />
        <Reviews />
        <Faqs />
        <TechSpecs />
        <Timeline />
        <Team />
        <MobileApp />
        <Newsletter />
        <Contact />
        <Footer />
      </div>

      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
      />
    </div>
  );
}

export default App;
