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


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <HowItWorks />
      <Benefits />
      <LeftRightContent />
      <OurCollection />
      <TheWatch />
      <SplitColumns />
      <Timeline />
      <Reviews />
      <Team />
    </div>
  );
}

export default App;
